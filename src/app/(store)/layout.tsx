import Header from '@/components/header'
import { ReactNode } from 'react'

const StoreLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app 
      gap-5 p-8"
    >
      <Header />

      <main>{children}</main>
    </div>
  )
}

export default StoreLayout
