'use client'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import { useState } from 'react'

import Clock from '@/components/clock/clock'
import { UserDisplay } from '@/components/navbar/user-display'

export default function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const [toggledClass, toggleClass] = useState('transition-all duration-200 ease-in-out opacity-0 h-0')

  const toggleMenu = () => {
    if (isMenuVisible) {
      setMenuVisible(false)
      toggleClass('transition-all duration-200 ease-in-out opacity-0 h-0')
    } else {
      setMenuVisible(true)
      toggleClass('transition-all duration-200 ease-in-out opacity-100 h-20')
    }
  }

  return (
    <header className='sticky top-0 border bg-white px-6 py-3'>
      <div className='grid grid-cols-3 items-center justify-between'>
        <div className='align flex items-center'>
          <Link href='/' className='flex w-fit align-middle'>
            <h1 className='m-0 w-fit text-3xl font-extrabold tracking-tight'>StartlapSCH</h1>
          </Link>
          {/*desktop menu*/}
          <nav className='mr-auto items-center max-md:hidden'>
            <ul className='flex space-x-4 px-10'>
              <li>
                <Link href='/links'>Links</Link>
              </li>
              <li>
                <Link href='/collections'>Collections</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Clock />
        </div>
        {/*right-side nav*/}
        <div className='flex items-center justify-end space-x-5 text-right md:items-stretch'>
          {/*<span className="hidden w-full md:inline-flex">
            <SearchBar></SearchBar>
          </span>*/}
          {/*todo set state*/}
          <UserDisplay />
          <button className='md:hidden' onClick={toggleMenu}>
            <Hamburger rounded toggled={isMenuVisible} direction='right' size={30} />
          </button>
        </div>
      </div>

      {/*mobile menu*/}
      <div className='md:hidden'>
        <div className={toggledClass}>
          <ul className='flex flex-col space-y-2 pt-3'>
            <li>
              <a href='/links'>Links</a>
            </li>
            <li>
              <a href='/collections'>Collections</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
