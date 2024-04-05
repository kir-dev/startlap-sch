'use client'

import Link from 'next/link'
import { TbBrandFacebook, TbBrandGithub, TbBrandInstagram, TbWorld } from 'react-icons/tb'

export default function Footer() {
  return (
    <footer className='sticky top-0 border bg-white px-6 py-3'>
      <div className='flex flex-col text-center'>
        <p>Made with ♥ by Kir-Dev</p>
        <p>© 2024</p>
        <div className='flex justify-center'>
          <Link target='_blank' href='https://github.com/kir-dev'>
            <TbBrandGithub size={24} />
          </Link>
          <Link target='_blank' href='https://kir-dev.hu'>
            <TbWorld size={24} />
          </Link>
          <Link target='_blank' href='https://www.facebook.com/kirdevteam'>
            <TbBrandFacebook size={24} />
          </Link>
          <Link target='_blank' href='https://www.instagram.com/kir.dev/'>
            <TbBrandInstagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
