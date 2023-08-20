import { Session, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import sanitizeHtml from 'sanitize-html'

type Media = {
  id: number,
  title: {
    romaji: string,
    english: string
  },
  coverImage: {
    large: string
  },
  description: string,
}

function ButtonAddCart({ props: { onSubmit, session } }: { props: { onSubmit: () => {}, session: Session | null } }) {
  if (session)
    return (
      <form action={onSubmit} >
        <button type="submit"
          className='bg-white/50 text-black flex items-center justify-center space-x-2 rounded-2xl p-4'>
          Add to cart
        </button>
      </form>
    )
}

export default function ProductDetail({ media: { id, title, coverImage, description }, session }: { media: Media, session: Session | null }) {
  const price = id + 100000
  const productTitle = title.english || title.romaji
  const sanitizedDesc = sanitizeHtml(description, {
    allowedTags: ['b', 'i'],
  })

  const handleOnSubmit = async () => {
    "use server"
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data } = await supabase.from("carts").select("id").single()
    if (data) {
      await supabase.from("cart_items")
        .insert({ cart_id: data.id, product_id: id }).then(() => {
          redirect('/cart')
        })
    }
  }

  return (
    <>
      <div className='relative w-full flex space-x-4 rounded-3xl p-4 
    text-white bg-stone-800/80
      transition-transform '>
        <Image
          src={coverImage.large} alt={productTitle} width={300} height={300} loading='lazy'
          className='object-cover rounded-2xl'
        />
        <div className='relative flex flex-col min-h-full w-full justify-between'>
          <div className='flex flex-col'>
            <p>{productTitle}</p>
            <br />
            <p>Synopsis:
              <br /><br />
            </p>
            <div dangerouslySetInnerHTML={{ __html: sanitizedDesc }}>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>Price: Rp. {price}</p>
            <ButtonAddCart props={
              {
                onSubmit: handleOnSubmit,
                session: session
              }
            } />
          </div>
        </div>
      </div>
    </>
  )
}