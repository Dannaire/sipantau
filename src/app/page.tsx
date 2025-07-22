"use client"

import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#456882] to-[#a5bfcc] relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#456882]/10 to-[#a5bfcc]/30 z-10"></div>

      {/* Right 30% with Vegetable Image (Full Height) */}
      <div className="absolute top-0 right-0 w-[40%] h-full z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/img/landing.jpg')`,
          }}
        ></div>
      </div>

     {/* Header */}
<header className="relative z-10 flex justify-between items-center px-6 md:px-16 py-6 mt-4 h-20">
  {/* Logo di kiri */}
  <div className="flex items-center space-x-3">
    <img
      src="/assets/img/logo.png"
      alt="Watugate Logo"
      className="w-24 h-24 md:w-48 md:h-48 object-contain"
    />
  </div>

  {/* Nav di tengah */}
  <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 md:px-12 py-2 md:py-3">
    <div className="flex space-x-4 md:space-x-16 text-gray-600 text-sm md:text-base">
      <button
        onClick={() => router.push('/')}
        className="hover:text-gray-900 transition-colors"
      >
        Beranda
      </button>
      <button
        onClick={() => router.push('/tentang-kami')}
        className="hover:text-gray-900 transition-colors"
      >
        Tentang Kami
      </button>
      <button
        onClick={() => router.push('/faq')}
        className="hover:text-gray-900 transition-colors"
      >
        FAQ
      </button>
    </div>
  </nav>

  {/* Icon di kanan */}
  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
    <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full"></div>
  </div>
</header>



      {/* Main Content */}
      <main className="relative z-10 flex">
        {/* Left 70% */}
        <div className="flex-1 px-16 py-20">
          <h1 className="text-white text-8xl font-bold mb-6">SIPANTAU</h1>
          <p className="text-white/90 text-xl mb-4">
            Sistem Informasi Prediksi dan Pantauan Komoditas
          </p>
          <p className="text-white/90 text-xl mb-6">
            Kabupaten Sukabumi
          </p>
          <p className="text-white/80 text-lg italic mb-12">
            #PrediksiHargaHariEsok,IntervensiLebihCepat
          </p>

          {/* Mulai Button */}
          <button
            onClick={() => router.push('/login-sebagai')}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-14 py-3 rounded-full text-lg transition transform hover:scale-105 shadow-2xl"
          >
            Mulai
          </button>
        </div>
      </main>
    </div>
  )
}
