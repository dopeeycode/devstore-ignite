import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <Link href="/" className="text-2xl font-bold">
          devstore
        </Link>

        <form
          className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 
          px-5 py-3 ring-zinc-700"
        >
          <Search className="w-6 h-6 text-zinc-500" />

          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/dopeeycode.png"
            alt="Avatar"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
