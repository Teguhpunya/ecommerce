'use client'
import { Session } from '@supabase/auth-helpers-nextjs'
import React from 'react'

export default function AccountButtonClient({ session, username }: { session: Session | null, username: string | null }) {
  return session ? (
    <button>{username}</button>
  ) : (
    <button >Login</button>
  )
}