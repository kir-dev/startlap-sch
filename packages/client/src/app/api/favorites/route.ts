import {NextRequest, NextResponse} from 'next/server'

import {addFavorite} from "@/network/addFavorite";

export async function POST(request: NextRequest) {
    const body = await request.json()
    await addFavorite(body.id)
    return NextResponse.json("Favorited")
}


