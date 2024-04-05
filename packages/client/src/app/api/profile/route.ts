import { NextResponse } from 'next/server'

import { getProfile } from '@/network/getProfile'

export async function GET() {
  const profile = await getProfile()
  return NextResponse.json(profile)
}
