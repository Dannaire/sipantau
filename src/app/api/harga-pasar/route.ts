import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value
    || req.headers.get('authorization')?.replace('Bearer ', '')

  if (!token) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    console.log('[/api/harga-pasar] Mengirim data:', JSON.stringify(body))

    const response = await fetch('http://sipantau.simdacloud.id/api/harga-pasar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    console.log('[/api/harga-pasar] Response:', data)
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('[/api/harga-pasar] Error:', error)
    return NextResponse.json({ success: false, message: 'Gagal mengirim data harga pasar.' }, { status: 500 })
  }
}
