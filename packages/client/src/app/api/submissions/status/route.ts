import { isAxiosError } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

import authorizedApi from '@/network/authorizedApiSetup'
import { LinkEntity } from '@/types/link.type'
import { Submission } from '@/types/submission.type'

export async function PATCH(request: NextRequest) {
  const body = await request.json()
  const id = body.id
  const approve = body.approved
  try {
    const response = await authorizedApi.patch<Submission | LinkEntity>(`/submissions/${id}/${approve ? 'approve' : 'decline'}`, {
      adminComment: body.comment,
    })
    return NextResponse.json(response.data)
  } catch (e) {
    if (isAxiosError(e)) {
      return console.error(e.response?.data)
    }
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
