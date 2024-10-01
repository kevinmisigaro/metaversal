import { ReactNode } from 'react'
import Header from '../Header'

function HomeLayout({children}: {children: ReactNode}) {
  return (
    <div className='bg-[#f8fbfa] font-roboto'>
    <Header />
    <div className="max-w-2xl mx-auto">
       <div className='px-5 md:px-0 py-6'>
       {children}
       </div>
    </div>
    </div>
  )
}

export default HomeLayout