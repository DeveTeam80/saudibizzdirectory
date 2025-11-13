// src/app/api/auth/reset-password/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/lib/db'
import { hashPassword, verifyPassword } from '@/app/lib/auth'
import { validatePassword } from '@/app/lib/validators'

// 🔥 CRITICAL: Add Node.js runtime
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json()

    if (!token || !password) {
      return NextResponse.json(
        { error: 'Token and password are required' },
        { status: 400 }
      )
    }

    // Validate password strength
    const passwordValidation = validatePassword(password)
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { error: passwordValidation.error },
        { status: 400 }
      )
    }

    // Find user with valid token
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gt: new Date(),
        },
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or expired password reset link.' },
        { status: 400 }
      )
    }

    // Check if new password is same as old
    const isSamePassword = await verifyPassword(password, user.password)
    if (isSamePassword) {
      return NextResponse.json(
        { error: 'New password must be different from your old password.' },
        { status: 400 }
      )
    }

    // Hash new password and update
    const hashedPassword = await hashPassword(password)

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
        failedLoginAttempts: 0,
        accountLockedUntil: null,
      },
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Password reset successful. You can now log in with your new password.' 
    })

  } catch (error) {
    console.error('Password reset error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}