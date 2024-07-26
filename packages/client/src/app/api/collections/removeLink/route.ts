import { isAxiosError } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

import authorizedApi from '@/network/authorizedApiSetup'
export async function POST(request: NextRequest) {
  const body = await request.json()
  const { collectionId, linkId } = body
  try {
    console.log('requested:', `/collection/${collectionId}/links/${linkId}`)
    const response = await authorizedApi.delete(`/collection/${collectionId}/links/${linkId}`)
    return NextResponse.json(response.data)
  } catch (e) {
    if (isAxiosError(e)) {
      return console.error(e.response?.data)
    }
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
