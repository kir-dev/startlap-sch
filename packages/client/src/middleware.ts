import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.redirect(new URL('/', request.url))
  const jwt = request.nextUrl.searchParams.get('jwt')
  if (jwt) {
    response.cookies.set({
      name: 'jwt',
      value: jwt,
      path: '/',
    })
  }

  return response
}
export const config = {
  matcher: '/authorized',
}
