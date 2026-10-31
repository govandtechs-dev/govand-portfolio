'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Invalid credentials. Please try again.')
      setLoading(false)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#0e0e0e]">
      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="font-playfair text-3xl font-bold">
            <span className="text-white">Govand</span>
            <span className="text-[#dc143c]">.</span>
          </div>
          <p className="text-zinc-500 text-sm mt-2">Admin Dashboard Access</p>
        </div>

        {/* Card */}
        <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-8">
          <h1 className="text-xl font-bold text-white mb-6">Sign In</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#0e0e0e] border border-[#2a2a2a] focus:border-[#dc143c] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-2 block">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#0e0e0e] border border-[#2a2a2a] focus:border-[#dc143c] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-[#dc143c]/10 border border-[#dc143c]/30 text-[#dc143c] text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#dc143c] hover:bg-[#a50e2d] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors mt-1"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-zinc-600 text-xs mt-6">
          Access restricted to authorised user only.
        </p>
      </div>
    </div>
  )
}
