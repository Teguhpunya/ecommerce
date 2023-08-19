import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export default async function Cart({ }: Props) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/account')
  }

  const { data: data } = await supabase
    .from("cart_items")
    .select()

  return (
    <div className='flex flex-col w-full'>
      {
        data?.map((item) => {
          return (
            <div key={item.id}
              className='relative min-w-[1024px] items-center justify-between rounded-3xl p-4 m-1 bg-gray-800
            hover:border hover:cursor-pointer hover:shadow-2xl
            transition-transform hover:scale-105 hover:translate-x-8'>
              <div>Product id: {item.product_id}</div>
              <div>Quantity {item.quantity}</div>
              <div>Last updated: {item.updated_at}</div>
            </div>
          )
        })
      }
    </div>
  )
}