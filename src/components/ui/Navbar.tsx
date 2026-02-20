"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-20 flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 h-20 sm:h-24 mx-auto">
      {/* Logo Kiri */}
      <div className="flex items-center ml-2 sm:ml-4 md:ml-8 translate-y-2">
        <img
          src="/assets/img/logo.png"
          alt="Watugate Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
        />
      </div>

      {/* Desktop Nav - Rounded Gradient Background */}
      <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#456882] to-[#a5bfcc] rounded-b-[65px] shadow-md w-[40%] lg:w-[30%] h-[110%] items-center justify-center z-0">
        <nav className="bg-white/90 backdrop-blur-sm rounded-full w-[80%] h-[50%] shadow flex justify-evenly items-center text-gray-400 font-light text-sm lg:text-base">
          <button
            onClick={() => router.push('/')}
            className="hover:text-gray-900 transition-colors"
          >Beranda</button>
          <button
            onClick={() => router.push('/tentang-kami')}
            className="hover:text-gray-900 transition-colors"
          >Tentang Kami</button>
          <button
            onClick={() => router.push('/faq')}
            className="hover:text-gray-900 transition-colors"
          >FAQ</button>
        </nav>
      </div>

      {/* User Info Kanan (desktop) */}
      <div className="hidden md:flex items-center mr-4 md:mr-8 translate-y-2 text-gray-700">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-base font-semibold">
          U
        </div>
        <span className="font-medium ml-2">User</span>
      </div>

      {/* Hamburger Button (mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden z-30 p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-700"
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-20 bg-black/30 backdrop-blur-sm" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 w-[70%] max-w-xs h-full bg-white shadow-2xl p-6 pt-20 flex flex-col gap-2 animate-in slide-in-from-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* User Info */}
            <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-base font-semibold">
                U
              </div>
              <span className="font-medium ml-3 text-gray-700">User</span>
            </div>

            {/* Nav Items */}
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
    </header>
  )
}
