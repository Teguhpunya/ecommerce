"use client"
import Image from 'next/image'
import React, { Component } from 'react'

type Props = {
  img: string,
  title: string,
  price: string
}

export default function ProductContainer({ img, title, price }: Props) {
  return (
    <div className='flex flex-col w-72 h-72 items-center justify-center space-y-2 rounded-3xl p-4 m-1 bg-gray-800/30
                    hover:border hover:cursor-pointer hover:shadow-2xl
                    transition-transform hover:scale-105 '>
      <Image
        src={img} alt={title} width={300} height={300} />
      <div>{title}</div>
      <div>{price}</div>
    </div>
  )
}