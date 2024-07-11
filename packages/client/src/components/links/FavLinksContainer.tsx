'use client'
import { useEffect, useRef } from 'react'

import LinkWidget from '@/components/links/LinkWidget'
import { useFavLinks } from '@/hooks/queries/use-fav-links'

export default function FavLinksContainer() {
  const { data, mutate, isLoading } = useFavLinks()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      if (container) {
        container.scrollLeft += event.deltaY * 0.2
      }
    }

    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return (
    <div className='flex flex-col'>
      <h1>Kedvencek</h1>
      <div className='flex pl-4' ref={containerRef} style={{ overflowX: 'hidden' }}>
        {isLoading && <p className={'m-4'}>Kedvenc linkek betöltése...</p>}
        {!isLoading && Array.isArray(data) && data.length > 0 ? (
          data.map(link => (
            <div key={link.id}>
              <LinkWidget link={link} visits={link.visits} />
            </div>
          ))
        ) : (
          <p className={'m-4'}>Nincs egyetlen kedvenc linked sem</p>
        )}
      </div>
    </div>
  )
}
