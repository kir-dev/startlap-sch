import Cookies from 'js-cookie'
import Link from 'next/link'
import { TbArrowRight, TbUser } from 'react-icons/tb'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useProfile } from '@/hooks/queries/use-profile'

export function UserDisplay() {
  const profile = useProfile()

  const onLogout = () => {
    Cookies.remove('jwt')
    location.reload()
  }
  return (
    <>
      {!profile.data && !profile.isLoading && (
        <Button variant='outline'>
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/login`}>Belépés</a>
        </Button>
      )}
      {profile.data && (
        <>
          {profile.data.role === 'ADMIN' && (
            <Button asChild variant='ghost'>
              <Link href='/admin'>Admin panel</Link>
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant='outline'>{profile.data.firstName}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href='/profile' className={'flex items-center gap-2'}>
                  <TbUser />
                  Profil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onLogout}>
                <span className={'flex items-center gap-2'}>
                  <TbArrowRight />
                  Kijelentkezés
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </>
  )
}
