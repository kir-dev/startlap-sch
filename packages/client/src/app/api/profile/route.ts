import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

import { getProfile } from '@/network/getProfile'

export async function GET() {
  const profile = await getProfile()

  return NextResponse.json(profile)
}
