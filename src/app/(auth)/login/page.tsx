// src/app/(auth)/login/page.tsx
import { Suspense } from 'react'
import { redirectIfAuth } from '@/app/lib/auth-protection'
import LoginFormClient from './login-form'

// Loading fallback component
function LoginLoading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bs-light)'
      }}
    >
      <div
        className="spinner-border"
        role="status"
        style={{
          color: 'var(--bs-primary)',
          width: '3rem',
          height: '3rem',
          borderWidth: '0.3rem'
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default async function LoginPage() {
  // 🔥 Check auth and redirect if already logged in
  await redirectIfAuth()

  return (
    <Suspense fallback={<LoginLoading />}>
      <LoginFormClient />
    </Suspense>
  )
}