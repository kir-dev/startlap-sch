import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.text()
  try {
    const response = await axios.head(body)
    return NextResponse.json({ success: response.status === 200 })
  } catch (e) {
    return NextResponse.json({ success: false })
  }
}
