// src/app/api/user/change-password/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/lib/db'
import { requireAuth, verifyPassword, hashPassword } from '@/app/lib/auth'
import { validatePassword } from '@/app/lib/validators'

export const runtime = 'nodejs'

export async function PUT(request: NextRequest) {
  try {
    const session = await requireAuth()
    const { currentPassword, newPassword } = await request.json()

    // Validate input
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Current password and new password are required' },
        { status: 400 }
      )
    }

    // Validate new password strength
    const passwordValidation = validatePassword(newPassword)
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { error: passwordValidation.error },
        { status: 400 }
      )
    }

    // Get user with password
    const user = await prisma.user.findUnique({
      where: { id: session.userId as number },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // ✅ CHANGED: Use verifyPassword (no await needed)
    const isValid = verifyPassword(currentPassword, user.password)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Current password is incorrect' },
        { status: 400 }
      )
    }

    // ✅ CHANGED: Check if new password is same as old
    const isSamePassword = verifyPassword(newPassword, user.password)
    if (isSamePassword) {
      return NextResponse.json(
        { error: 'New password must be different from your current password' },
        { status: 400 }
      )
    }

    // ✅ CHANGED: Use hashPassword (no await needed)
    const hashedPassword = hashPassword(newPassword)

    // Update password and reset any account locks
    await prisma.user.update({
      where: { id: user.id },
      data: { 
        password: hashedPassword,
        failedLoginAttempts: 0,
        accountLockedUntil: null,
      },
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Password changed successfully' 
    })
  } catch (error: any) {
    console.error('Change password error:', error)
    
    // Handle unauthorized error
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Please log in to change your password' },
        { status: 401 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to change password. Please try again.' },
      { status: 500 }
    )
  }
}