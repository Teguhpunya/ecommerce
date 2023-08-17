import ListProducts from '@/components/ListProducts'
import SidebarNav from '@/components/SidebarNav'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="flex w-full h-full items-center justify-between p-4 relative bg-white/10">
      <div className='flex max-w-screen-xl min-w-[800px] h-full p-6 relative'>
        <SidebarNav />
        <main className='ml-[300px] flex flex-wrap relative'>
          <ListProducts />
        </main>
      </div>
    </div>
  )
}
