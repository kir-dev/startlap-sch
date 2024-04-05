import { constants } from 'http2'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const jwt = request.nextUrl.searchParams.get('jwt')

  if (!jwt) {
    return NextResponse.json({ error: 'Missing jwt query parameter' }, { status: constants.HTTP_STATUS_BAD_REQUEST })
  }

  cookies().set('jwt', jwt, { path: '/' })

  return NextResponse.redirect(new URL('/', request.url))
}

