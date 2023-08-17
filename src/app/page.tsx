import ListProducts from '@/components/ListProducts'
import SidebarNav from '@/components/SidebarNav'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="flex w-full h-full p-4 relative bg-white/10">
      <div className='flex min-w-[1024px] relative'>
        <SidebarNav />
        <main className='ml-[300px] flex flex-wrap relative'>
          <ListProducts />
        </main>
      </div>
    </div>
  )
}
