'use client'

import { useState, useEffect } from 'react'
import PasswordProtection from '@/components/PasswordProtection'
import Dashboard from '@/components/Dashboard'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('thailand-auth')
    if (stored === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50" />
  }

  if (!isAuthenticated) {
    return <PasswordProtection onSuccess={() => setIsAuthenticated(true)} />
  }

  return <Dashboard />
}
