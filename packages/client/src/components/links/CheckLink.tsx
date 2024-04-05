import { useEffect, useState } from 'react'
import { TbCheck, TbExclamationCircle, TbLoader } from 'react-icons/tb'

import { useCheckLink } from '@/hooks/mutations/use-check.link'

interface CheckLinkProps {
  link: string | undefined
}

export function CheckLink({ link }: CheckLinkProps) {
  const linkStatus = useCheckLink()

  useDebouncedEffect(
    () => {
      console.log('Checking link', link)
      linkStatus.trigger(link)
    },
    500,
    [link]
  )

  if (!link) return null
  if (linkStatus.isMutating) return <TbLoader className='animate-spin' />
  if (linkStatus.data)
    return (
      <div className='flex items-center gap-1 text-green-500'>
        <TbCheck className='inline' />
        <p>A link elérhető</p>
      </div>
    )
  return (
    <div className='flex items-center gap-1 text-red-500'>
      <TbExclamationCircle className='inline' />
      <p>A link nem elérhető</p>
    </div>
  )
}

function useDebouncedEffect(effect: React.EffectCallback, delay: number, deps: React.DependencyList) {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay)
    return () => clearTimeout(handler)
  }, deps)
}
