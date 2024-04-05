import { isAxiosError } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

import authorizedApi from '@/network/authorizedApiSetup'
import { Submission } from '@/types/submission.type'

export async function POST(request: NextRequest) {
  const body = await request.json()
  try {
    const response = await authorizedApi.post<Submission>('/submissions', body)
    return NextResponse.json(response.data)
  } catch (e) {
    if (isAxiosError(e)) {
      return console.log(e.response?.data)
    }
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
