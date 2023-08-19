import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import AuthButtonServer from '@/components/auth-button-server'

type Props = {}

export default async function Login({ }: Props) {
  return (
    <div className='bg-white/50 flex items-center justify-center space-x-2 rounded-2xl p-4'>
      <AuthButtonServer />
    </div>
  )
}