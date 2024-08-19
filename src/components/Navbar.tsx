import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="">
        <Link href='/' className="font-bold text-xl text-blue-500">DB5</Link>
      </div>
      {/* CENTER */}
      <div className="hidden"> </div>
      {/* RIGHT */}
      <div className="">
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar