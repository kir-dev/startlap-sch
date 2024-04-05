import Cookies from 'js-cookie'
import Link from 'next/link'

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
        <Button asChild variant="ghost">
        <Link href='/admin'>
          Admin panel
        </Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant='outline'>{profile.data.firstName}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={onLogout}>Kijelentkezés</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </>
      )}
    </>
  )
}
