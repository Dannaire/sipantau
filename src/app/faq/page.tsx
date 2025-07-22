"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/ui/Navbar'
import { HiArrowLeft } from 'react-icons/hi'

export default function FAQ() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const marketName = searchParams.get('market') || 'Pasar Tidak Diketahui'
  const komoditasName = searchParams.get('komoditas') || 'Komoditas Tidak Diketahui'

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[95%] mx-auto px-4 sm:px-6 lg:px-20 py-1 transition-all duration-300">
        {/* Title Section */}
        <div className="my-6 flex justify-end mb-1">
          <div className="bg-white rounded-full px-6 py-2 shadow-md">
            <span className="text-gray-600">SIPANTAU</span>
            <span className="mx-2">|</span>
            <span className="text-gray-400">FAQ</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Text content */}
          <div className="flex-1 pr-8">
            <h1 className="text-4xl text-gray-600 mb-3">
              PERTANYAAN<br />
              <span className="text-gray-700 font-bold">YANG SERING DIAJUKAN</span>
            </h1>

            <div className="space-y-2">
              {/* FAQ Item 1 */}
              <div>
                <h2 className="text-xl font-bold text-gray-700 mb-1">
                  Apa itu SIPANTAU?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  SIPANTAU adalah Sistem Informasi Prediksi dan Pantauan Komoditas yang dirancang untuk membantu pemantauan harga dan distribusi komoditas di berbagai pasar secara real-time.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div>
                <h2 className="text-xl font-bold text-gray-700 mb-1">
                  Data apa saja yang tersedia di SIPANTAU?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Data yang tersedia meliputi harga komoditas harian, prediksi harga untuk 3 hari ke depan, serta rekomendasi intervensi untuk daerah dengan surplus atau defisit komoditas.
                </p>
              </div>
              {/* FAQ Item 5 */}
              <div>
                <h2 className="text-xl font-bold text-gray-00 mb-1">
                  Bagaimana cara mendapatkan pembaruan data terbaru?
                </h2>7
                <p className="text-lg text-gray-600 leading-relaxed">
                  Data SIPANTAU diperbarui secara otomatis setiap hari berdasarkan laporan pasar dan input dari dinas terkait.
                </p>
              </div>
            </div>

    <div className="w-full flex justify-start">
                 <button
                   onClick={() => router.back()}
                   className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2"
                 >
                   <HiArrowLeft size={20} color="white" />
                   <span>Back</span>
                 </button>
               </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 h-[470px] flex justify-center items-center mt-8 lg:mt-0">
            <img
              src="/assets/img/faq.png" // Ganti ke ilustrasi FAQ atau logo SIPANTAU
              alt="FAQ SIPANTAU"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
