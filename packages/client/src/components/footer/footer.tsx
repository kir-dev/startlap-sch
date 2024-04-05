'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TbBrandFacebook, TbBrandGithub, TbBrandInstagram, TbWorld } from 'react-icons/tb'

export default function Footer() {
  return (
    <footer className='sticky top-0 border bg-white px-6 py-3'>
      <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
        <Link target='_blank' href='https://kir-dev.hu'>
          <Image alt='kir-dev_logo' src='/kirdev.svg' width={100} height={100} />
        </Link>
        <div className='flex flex-col text-center'>
          <p>Made with ♥ by Kir-Dev</p>
          <p>© {new Date().getFullYear()}</p>
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
        <Link target='_blank' href='https://vercel.com/'>
          <Image alt='vercel_logo' src='/vercel.svg' width={100} height={100} />
        </Link>
      </div>
    </footer>
  )
}

