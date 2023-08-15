import Link from 'next/link'
import { IoCartSharp, IoHomeSharp } from 'react-icons/io5'

const NAVIGATION_ITEMS = [
  {
    title: "Home",
    icon: IoHomeSharp
  },
  {
    title: "Cart",
    icon: IoCartSharp
  }
]
export default function SidebarNav() {
  return (
    <section className='fixed w-72 flex flex-col h-screen space-y-2'>
      {
        NAVIGATION_ITEMS.map((item) => (
          <Link
            className='bg-white/50 flex items-center justify-center space-x-2 rounded-3xl p-4'
            href={`/${item.title.toLowerCase()}`}
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            <div>
              {item.title}
            </div>

          </Link>
        ))
      }
    </section>
  )
}
