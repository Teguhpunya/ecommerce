'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  product_id: number,
  img: string,
  title: string,
}

export default function ProductContainer({ product_id, img, title }: Props) {
  const price = product_id + 100000
  return (
    <Link href={`/product/${product_id}`}>
      <div className='flex flex-col w-72 h-96 items-center text-center justify-between rounded-3xl p-4 m-1
                      text-white bg-gray-800/30
                      hover:border hover:cursor-pointer hover:shadow-2xl
                      transition-transform hover:scale-105' suppressHydrationWarning>
        <div className='flex overflow-hidden max-h-64'>
          <Image
            src={img} alt={title} width={500} height={500} loading='lazy'
            className='object-cover rounded-2xl'
          />
        </div>
        <h1 className='overflow-hidden line-clamp-2 font-bold'>{title}</h1>
        <p>Price: Rp. {price}</p>
      </div>
    </Link>
  )
}