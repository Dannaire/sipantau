import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value
    || req.headers.get('authorization')?.replace('Bearer ', '')

  if (!token) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    console.log('[/api/ketersediaan] Mengirim data:', JSON.stringify(body))

    const response = await fetch('http://sipantau.simdacloud.id/api/ketersediaan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    console.log('[/api/ketersediaan] Response:', data)
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('[/api/ketersediaan] Error:', error)
    return NextResponse.json({ success: false, message: 'Gagal mengirim data ketersediaan.' }, { status: 500 })
  }
}
