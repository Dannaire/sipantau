import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value
    || req.headers.get('authorization')?.replace('Bearer ', '')

  try {
    const headers: HeadersInit = { 'Accept': 'application/json' }
    if (token) headers['Authorization'] = `Bearer ${token}`

    const response = await fetch('http://sipantau.simdacloud.id/api/komoditas', {
      method: 'GET',
      headers,
    })

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('[/api/komoditas] Error:', error)
    return NextResponse.json({ success: false, message: 'Gagal mengambil data komoditas.' }, { status: 500 })
  }
}
