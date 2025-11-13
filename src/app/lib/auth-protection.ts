// src/app/lib/auth-protection.ts
'use server'

import { redirect } from 'next/navigation'
import { getSession } from './auth'

export async function protectRoute() {
  const session = await getSession()
  
  if (!session) {
    redirect('/login')
  }
  
  return session
}

export async function protectAdminRoute() {
  const session = await getSession()
  
  if (!session) {
    redirect('/login?redirect=/admin')
  }
  
  if (session.role !== 'admin') {
    redirect('/dashboard')
  }
  
  return session
}

export async function redirectIfAuth() {
  const session = await getSession()
  
  if (session) {
    redirect(session.role === 'admin' ? '/admin/dashboard' : '/dashboard')
  }
}