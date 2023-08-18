import Link from 'next/link'
import { IoCartSharp, IoHomeSharp, IoPersonCircleSharp } from 'react-icons/io5'
import AccountButtonServer from './account-button-server'

const NAVIGATION_ITEMS = [
  {
    title: "Home",
    url: "/",
    icon: IoHomeSharp
  },
  {
    title: "Cart",
    url: "/cart",
    icon: IoCartSharp
  }
]
export default function SidebarNav() {
  return (
    <section className='fixed w-72 flex flex-col h-screen p-4 space-y-4 rounded-2xl
                        text-black/90 dark:bg-stone-800/80'>
      {
        NAVIGATION_ITEMS.map((item) => (
          <Link
            className='bg-white/50 flex items-center justify-center space-x-2 rounded-2xl p-4'
            href={`${item.url.toLowerCase()}`}
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
      <AccountButtonServer />
    </section>
  )
}
