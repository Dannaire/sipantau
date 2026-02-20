"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HiArrowLeft } from 'react-icons/hi'

export default function LoginDinasPertanian() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email && password) {
      router.push('/dashboard-dinas-pertanian')
    }
  }

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-start px-4"
      style={{
        backgroundImage: `
           linear-gradient(to left, rgba(69, 104, 130, 0.99), rgba(69, 104, 130, 0.6)),
          url('/assets/img/sawah.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white rounded-b-[40px] sm:rounded-b-[55px] md:rounded-b-[65px] px-4 sm:px-6 flex items-center justify-center shadow-md w-[50%] sm:w-[30%] md:w-[20%] lg:w-[15%] xl:w-[12%] h-16 sm:h-20 md:h-24 transition-all duration-300">
        <img
          src="/assets/img/logo.png"
          alt="Watugate Logo"
          className="h-[150%] sm:h-[160%] md:h-[170%] object-contain"
        />
      </div>


      {/* Back Button - Desktop only (top) */}
      <div className="hidden md:flex w-full justify-start mt-20 pl-16 lg:pl-24">
        <button
          onClick={() => router.push('/login-sebagai')}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 md:px-12 py-2.5 md:py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2 text-sm md:text-base"
        >
          <HiArrowLeft size={18} color="white" />
          <span>Back</span>
        </button>
      </div>


      {/* Login Form */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 lg:p-10 w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[55%] mx-auto mt-20 sm:mt-24 md:mt-12 lg:mt-16 relative z-10 transition-all duration-300">
        <h2 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-gray-800">
          Silahkan Masukkan Email dan Password Anda
        </h2>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700 transition text-sm sm:text-base"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700 transition text-sm sm:text-base"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleLogin}
              className="w-full sm:w-[50%] md:w-[30%] bg-yellow-500 text-white py-2.5 sm:py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors shadow-md text-sm sm:text-base"
            >
              Masuk
            </button>
          </div>
        </div>
      </div>

      {/* Red background bawah */}
      <div className="bg-red-700 h-8 sm:h-10 md:h-12 w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[55%] mx-auto rounded-b-2xl sm:rounded-b-3xl relative -mt-4 z-0 transition-all duration-300"></div>

      {/* Back Button - Mobile only (bottom) */}
      <div className="flex md:hidden w-full justify-start mt-6 mb-6 pl-4 sm:pl-8">
        <button
          onClick={() => router.push('/login-sebagai')}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 sm:px-8 md:px-12 py-2 sm:py-2.5 md:py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm md:text-base"
        >
          <HiArrowLeft size={16} color="white" />
          <span>Back</span>
        </button>
      </div>
    </main>
  )
}
