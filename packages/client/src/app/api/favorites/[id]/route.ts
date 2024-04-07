import { NextResponse } from 'next/server'

import { deleteFavorite } from '@/network/deleteFavorite'

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await deleteFavorite(params.id)
  return NextResponse.json('Unfavorited')
}
