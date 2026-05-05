import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value
    || req.headers.get('authorization')?.replace('Bearer ', '')

  try {
    const { searchParams } = new URL(req.url)
    const pasar_id = searchParams.get('pasar_id') || '1'
    const komoditas_id = searchParams.get('komoditas_id') || '1'

    const headers: HeadersInit = { 'Accept': 'application/json' }
    if (token) headers['Authorization'] = `Bearer ${token}`

    const url = `http://sipantau.simdacloud.id/api/predict?pasar_id=${pasar_id}&komoditas_id=${komoditas_id}`
    console.log('[/api/predict] Fetching:', url)

    const response = await fetch(url, {
      method: 'GET',
      headers,
    })

    const data = await response.json()
    console.log('[/api/predict] Response:', JSON.stringify(data).substring(0, 200))
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('[/api/predict] Error:', error)
    return NextResponse.json({ success: false, message: 'Gagal mengambil data prediksi.' }, { status: 500 })
  }
}
