"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { useMemo } from 'react'
import Navbar from '@/components/ui/Navbar'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

export default function PriceChart() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const marketName = searchParams.get('market') || 'Pasar Tidak Diketahui'
  const komoditasName = searchParams.get('komoditas') || 'Komoditas Tidak Diketahui'


const dateLabels = useMemo(() => {
  const labels: string[] = []
  const today = new Date()

  // format: 20 Juli 2025
  const formatter = new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  // mulai dari hari sebelumnya (today - 1)
  for (let i = -1; i <= 3; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    labels.push(formatter.format(date))
  }

  return labels
}, [])



  // 📊 Harga sample
  const priceData = [54000, 61500, 69000, 70000, 72500]

  // ✨ Pisahkan data historical & predicted
  const historicalData = dateLabels.slice(0, 3).map((date, i) => ({
    date,
    price: priceData[i]
  }))
  const predictedData = dateLabels.slice(2).map((date, i) => ({
    date,
    price: priceData[i + 2]
  }))
const handleBreakdown = () => {
    router.push(
      `/breakdown?market=${encodeURIComponent(marketName)}&komoditas=${encodeURIComponent(komoditasName)}`
    )
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-start px-12 md:px-20 -translate-y-10 xl:translate-y-4">
       <div className="w-full flex justify-start">
         <button
           onClick={() => router.back()}
           className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2"
         >
           <HiArrowLeft size={20} color="white" />
           <span>Back</span>
         </button>
       </div>
       
      </div>

      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[95%] mx-auto px-4 sm:px-6 lg:px-20 py-1 transition-all duration-300">
        {/* Market Selection */}
        <div className="flex justify-end mb-2">
          <div className="bg-white rounded-full px-6 py-2 shadow-md">
            <span className="text-gray-600">{marketName}</span>
            <span className="mx-2">|</span>
            <span className="text-gray-400">{komoditasName}</span>
          </div>
        </div>

        {/* Chart with vertical label */}
        <div className="   mb-1">
          <div className="flex">
            {/* Vertical Label */}
            <div className="flex items-center justify-center w-15 relative z-0">
              <span className="text-2xl font-bold whitespace-nowrap
 text-black transform -rotate-90">
                Harga (Rp)
              </span>
            </div>
            {/* Chart */}
            <div className="flex-1 relative h-96 z-10">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart margin={{ top: 0, right: 20, bottom: 0, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                    type="category"
                    allowDuplicatedCategory={false}
                    interval={0}
                    padding={{ left: 100, right: 10 }} // 🎯 tambah jarak kiri-kanan
                  />

<YAxis
  domain={[45000, 74000]} // 🎯 tambahkan 1000 ke bawah & atas untuk gap
  ticks={[49000, 54000, 59000, 64000, 69000, 74000]}
  tickFormatter={(value) => `Rp${value.toLocaleString()}`}
  tick={{ fontSize: 12, fill: '#6B7280' }}
/>


                  <Tooltip
  content={({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const currentPrice = payload[0].value as number
      const currentIndex = priceData.findIndex(price => price === currentPrice)

      let info = ''
      if (currentIndex > 0) {
        const prevPrice = priceData[currentIndex - 1]
        const change = ((currentPrice - prevPrice) / prevPrice) * 100
        const isIncrease = change >= 0

        info = `${isIncrease ? '📈 Kenaikan' : '📉 Penurunan'} ${Math.abs(change).toFixed(2)}%`
      } else {
        info = 'Data pertama'
      }

      return (
        <div className="p-2 rounded-lg shadow bg-white border border-gray-200">
          {/* <p className="font-semibold text-gray-700">{label}</p> */}
          <p className="text-gray-500">Rp{currentPrice.toLocaleString()}</p>
          <p className="text-sm font-medium text-blue-600">{info}</p>
        </div>
      )
    }
    return null
  }}
/>

                  {/* Black solid line (historical) */}
                  <Line
                    data={historicalData}
                    type="linear"
                    dataKey="price"
                    stroke="black"
                    strokeWidth={2}
                    dot={{ fill: 'black', r: 5 }}
                    isAnimationActive={false}
                  />
                  {/* Red dashed line (prediction) */}
                  <Line
                    data={predictedData}
                    type="linear"
                    dataKey="price"
                    stroke="red"
                    strokeWidth={2}
                    dot={{ fill: 'red', r: 5 }}
                    isAnimationActive={false}
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex-1">
            <p className="text-lg font-semibold text-gray-700">
              Terjadi Kenaikan harga pada {dateLabels[2]}<br />
              Hingga {dateLabels[4]} yang cukup fluktuaktif
            </p>
          </div>
          <div className="flex justify-center flex-1 border-r-2 border-gray-500">
            <button
              onClick={handleBreakdown}
              className="bg-[#456882] w-[80%] justify-center text-white px-8 py-3 rounded-full font-semibold hover:bg-[#243039] transition flex items-center space-x-2"
            >
              <span>Breakdown</span>
              <span><HiArrowRight/></span>
            </button>
          </div>
         <div className="flex-1 flex justify-center ">
  <div className="space-y-2 text-left">
    <div className="flex items-center space-x-7 justify-start">
      <div className="w-18 h-0.5 bg-red-500"></div>
      <span className="text-sm font-semibold text-gray-600">Prediksi 3 Hari Kedepan</span>
    </div>
    <div className="flex items-center space-x-7 justify-start">
      <div className="w-18 h-0.5 bg-black"></div>
      <span className="text-sm font-semibold text-gray-600">Harga komoditas dua hari sebelumnya</span>
    </div>
  </div>
</div>

        </div>
      </div>
    </main>
  )
}
