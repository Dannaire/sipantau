"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { useMemo } from 'react'
import Navbar from '@/components/ui/Navbar'
import { HiArrowLeft } from 'react-icons/hi'

export default function Rekomendasi() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const marketName = searchParams.get('market') || 'Pasar Tidak Diketahui'
  const komoditasName = searchParams.get('komoditas') || 'Komoditas Tidak Diketahui'

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
     <Navbar/>

      {/* Main Content */}
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[95%] mx-auto px-4 sm:px-6 lg:px-20 py-1 transition-all duration-300">
        {/* Market Selection */}
        <div className="my-6 flex justify-end mb-1">
          <div className="bg-white rounded-full px-6 py-2 shadow-md">
            <span className="text-gray-600">{marketName}</span>
            <span className="mx-2">|</span>
            <span className="text-gray-400">{komoditasName}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex">
          {/* Left side - Text content */}
          <div className="flex-1 pr-8">
            <h1 className="text-5xl text-gray-600 mb-4">
              REKOMENDASI<br />
              <span className="text-gray-700 font-bold">INTERVENSI</span>
            </h1>

            <div className="space-y-2.5">
              <div>
                <h2 className="text-2xl font-bold text-gray-600 mb-3">KABUPATEN GARUT</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Kabupaten Garut sedang mengalami surplus cabai rawit, lakukan 
                  koordinasi dengan daerah tersebut.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-600 mb-3">KABUPATEN BANDUNG BARAT</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Kabupaten Bandung Barat sedang mengalami surplus cabai rawit, 
                  lakukan koordinasi dengan daerah tersebut.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-600 mb-3">LAKUKAN INVESTIGASI LAPANGAN</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lakukan investigasi rantai distribusi dan pengecekan penimbunan 
                  stock komoditas.
                </p>
              </div>
            </div>

<div className="w-full flex justify-start">
             <button
               onClick={() => router.back()}
               className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2"
             >
               <HiArrowLeft size={20} color="white" />
               <span>Back</span>
             </button>
           </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 h-[470px] flex justify-center items-center">
             <img
              src="/assets/img/sayur.png"
              alt="Map Kabupaten Sukabumi"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
