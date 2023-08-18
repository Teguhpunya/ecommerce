import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import AuthButtonServer from '@/components/auth-button-server'

type Props = {}

export default async function Login({ }: Props) {
  return (
    <AuthButtonServer />
  )
}