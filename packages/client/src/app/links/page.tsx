import React from "react";

import LinkWidget from '@/components/links/LinkWidget'
import { getLinks } from '@/network/getLinks'

export default async function Links() {
  const links = await getLinks()
  return (
    <main >
        {/*<div className='grid auto-cols-auto auto-rows-auto justify-center place-items-center pt-10 pl-5 pr-5 gap-y-3 gap-x-6' style={ { gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))' } }>*/}
        <div className='flex flex-wrap justify-center gap-x-5 p-5'>
          {links.map(link => (
                <LinkWidget link={link} key={link.id}/>
          ))}
        </div>
    </main>
  )
}
