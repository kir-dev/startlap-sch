import { isAxiosError } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

import authorizedApi from '@/network/authorizedApiSetup'
import { Collection } from '@/types/collection.type'

export async function POST(request: NextRequest) {
  const body = await request.json()
  try {
    const response = await authorizedApi.post<Collection>('/collection', body)
    return NextResponse.json(response.data)
  } catch (e) {
    if (isAxiosError(e)) {
      return console.error(e.response?.data)
    }
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
