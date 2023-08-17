'use client'
import Image from 'next/image'
import React from 'react'

type Props = {
  img: string,
  title: string,
  price: string
}

export default function ProductContainer({ img, title, price }: Props) {
  return (
    <div className='flex flex-col w-72 h-96 items-center text-center justify-between rounded-3xl p-4 m-1 bg-gray-800/30
                    hover:border hover:cursor-pointer hover:shadow-2xl
                    transition-transform hover:scale-105' suppressHydrationWarning>
      <div className='flex overflow-hidden max-h-64'>
        <Image
          src={img} alt={title} width={500} height={500} loading='lazy'
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='overflow-hidden'>{title}</div>
      <div>{price}</div>
    </div>
  )
}