// src/app/api/auth/logout/route.ts
import { NextResponse } from 'next/server'

// 🔥 CRITICAL: Add Node.js runtime
export const runtime = 'nodejs'

export async function POST() {
  const response = NextResponse.json({ 
    success: true,
    message: 'Logged out successfully'
  })
  
  response.cookies.delete('auth-token')
  
  return response
}