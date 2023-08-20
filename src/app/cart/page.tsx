import CheckoutButton from '@/components/CheckoutButton'
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

  let total = 0

  return (
    <div className='flex flex-col w-full'>
      {
        data?.map((item) => {
          const price = item.product_id + 100000
          total += price
          return (
            <div key={item.id}
              className='relative min-w-[1024px] items-center justify-between rounded-3xl p-4 m-1 bg-gray-800
            hover:border hover:cursor-pointer hover:shadow-2xl
            transition-transform'>
              <div>Product id: {item.product_id}</div>
              <div>Quantity {item.quantity}</div>
              <div>Price: Rp. {price}</div>
            </div>
          )
        })
      }
      <div className='relative flex min-w-[1024px] items-center justify-between rounded-3xl p-4 m-1 bg-gray-800
            hover:border hover:cursor-pointer hover:shadow-2xl
            transition-transform'>
        <p>Total price: {total}</p>
        <CheckoutButton total={total} />
      </div>
    </div>
  )
}