import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured')

  const products = await response.json()
  return products
}

const Home = async () => {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 flex 
        justify-center items-center"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-300"
          src={highlightedProduct.image}
          width={920}
          height={920}
          quality={100}
          alt={highlightedProduct.title}
        />

        <div
          className="absolute bottom-28 right-28 flex items-center gap-2 
        max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
        >
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span
            className="flex h-full items-center justify-center rounded-full 
          bg-violet-500 px-4 font-semibold"
          >
            R${highlightedProduct.price}
          </span>
        </div>
      </Link>
      {otherProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 flex 
        justify-center items-center"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-300"
            src={product.image}
            width={920}
            height={920}
            quality={100}
            alt=""
          />

          <div
            className="absolute bottom-10 right-10 flex items-center gap-2 
        max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
          >
            <span className="text-sm truncate">{product.title}</span>
            <span
              className="flex h-full items-center justify-center rounded-full 
          bg-violet-500 px-4 font-semibold"
            >
              R${product.price}
            </span>
          </div>
        </Link>
      ))}
    </main>
  )
}
export default Home
