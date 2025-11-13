// src/app/(auth)/register/page.tsx
import { Suspense } from 'react'
import { redirectIfAuth } from '@/app/lib/auth-protection'
import RegisterFormClient from './register-form'

// Loading fallback component
function RegisterLoading() {
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

export default async function RegisterPage() {
  // 🔥 Check auth and redirect if already logged in
  await redirectIfAuth()

  return (
    <Suspense fallback={<RegisterLoading />}>
      <RegisterFormClient />
    </Suspense>
  )
}