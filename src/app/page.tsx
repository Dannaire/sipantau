"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'

export default function LandingPage() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#456882] to-[#a5bfcc] relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#456882]/10 to-[#a5bfcc]/30 z-10"></div>

      {/* Right side with Vegetable Image (Full Height) - hidden on very small screens, shown as overlay on mobile */}
      <div className="absolute top-0 right-0 w-full sm:w-[50%] md:w-[40%] h-full z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 sm:opacity-100"
          style={{
            backgroundImage: `url('/assets/img/landing.jpg')`,
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-20 flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 sm:py-6 mt-2 sm:mt-4 h-16 sm:h-20">
        {/* Logo di kiri */}
        <div className="flex items-center">
          <img
            src="/assets/img/logo.png"
            alt="Watugate Logo"
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
          />
        </div>

        {/* Nav di tengah - Desktop only */}
        <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 lg:px-12 py-2 lg:py-3">
          <div className="flex space-x-6 lg:space-x-16 text-gray-600 text-sm lg:text-base">
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

        {/* Icon di kanan - Desktop only */}
        <div className="hidden md:flex w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full items-center justify-center">
          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full"></div>
        </div>

        {/* Hamburger Button - Mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-black/30 backdrop-blur-sm" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 w-[70%] max-w-xs h-full bg-white shadow-2xl p-6 pt-20 flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => { router.push('/'); setMenuOpen(false) }}
              className="w-full text-left px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-[#eef4f7] transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => { router.push('/tentang-kami'); setMenuOpen(false) }}
              className="w-full text-left px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-[#eef4f7] transition-colors"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => { router.push('/faq'); setMenuOpen(false) }}
              className="w-full text-left px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-[#eef4f7] transition-colors"
            >
              FAQ
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 flex">
        {/* Left content */}
        <div className="flex-1 px-6 sm:px-10 md:px-16 py-10 sm:py-14 md:py-20">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3 sm:mb-4 md:mb-6">SIPANTAU</h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 md:mb-4">
            Sistem Informasi Prediksi dan Pantauan Komoditas
          </p>
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6">
            Kabupaten Sukabumi
          </p>
          <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg italic mb-6 sm:mb-8 md:mb-12">
            #PrediksiHargaHariEsok,IntervensiLebihCepat
          </p>

          {/* Mulai Button */}
          <button
            onClick={() => router.push('/dashboard-tim-pengendalian')}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 sm:px-10 md:px-14 py-2.5 sm:py-3 rounded-full text-sm sm:text-base md:text-lg transition transform hover:scale-105 shadow-2xl"
          >
            Mulai
          </button>
        </div>
      </main>
    </div>
  )
}
