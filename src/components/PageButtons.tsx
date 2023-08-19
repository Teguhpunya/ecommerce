'use client'
import Link from 'next/link'
import React from 'react'

type Props = {
  pageInfo: {
    total: number,
    currentPage: number,
    lastPage: number,
    hasNextPage: true,
    perPage: number,
  },
  variables: any
}

const generateButton = (currentPage: number, index: number, variables: any) => {
  if (index != currentPage) {
    return (
      <Link
        className='bg-white/50 text-black/90 flex items-center justify-center rounded-2xl p-4'
        href={`/page/${index}?title=${encodeURIComponent(variables.search || '')}&status=${encodeURIComponent(variables.status)}`}
        key={index}
      >
        <div>
          {index}
        </div>
      </Link>
    )
  }
  return (
    <Link
      className='text-white/90 flex items-center justify-center rounded-2xl p-4'
      href={`/page/${index}?title=${encodeURIComponent(variables.search || '')}&status=${encodeURIComponent(variables.status)}`}
      key={index}
    >
      <div>
        {index}
      </div>
    </Link>
  )


}

export default function PageButtons({ pageInfo, variables }: Props) {
  const { currentPage, lastPage } = pageInfo
  const buttonElements = []
  let index = (currentPage != 1) ? currentPage - 1 : currentPage
  for (index; index <= lastPage && buttonElements.length != 3; index++) {
    buttonElements.push(generateButton(currentPage, index, variables))
  }

  return (
    <section className='relative w-fit flex p-4 space-x-2 justify-center rounded-2xl
             bg-stone-800/80'>
      {buttonElements}
    </section>

  )
}