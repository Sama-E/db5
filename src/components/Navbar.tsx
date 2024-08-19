import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="">
        <Link href='/' className="font-bold text-xl text-blue-600">DB5</Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex">
        {/* LINKS */}
        <div className="">
          <Link href="/" className="flex gap-2">
            <Image src="/home.png" alt="Homepage" width={16} height={16}/>
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <Image src="/home.png" alt="Homepage" width={16} height={16}/>
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <Image src="/home.png" alt="Homepage" width={16} height={16}/>
            <span>Homepage</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="">
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar