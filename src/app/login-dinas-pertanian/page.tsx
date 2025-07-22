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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white rounded-b-[65px] px-6 flex items-center justify-center shadow-md w-[20%] h-24">
        <img
          src="/assets/img/logo.png"
          alt="Watugate Logo"
          className="h-[170%] object-contain"
        />
      </div>

<div className="w-full flex justify-start mt-20 pl-24">
  <button
    onClick={() => router.push('/')}
    className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-12 py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2"
  >
    <HiArrowLeft size={20} color="white" />
    <span>Back</span>
  </button>
</div>

     {/* Login Form */}
{/* Login Form */}
<div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[60%] mx-auto mt-28 relative z-10 transition-all duration-300">
  <h2 className="text-center text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800">
    Silahkan Masukkan Email dan Password Anda
  </h2>

  <div className="space-y-5 sm:space-y-6">
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700 transition"
      />
    </div>

    <div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700 transition"
      />
    </div>

    <div className="flex justify-center">
      <button
        onClick={handleLogin}
        className="w-full sm:w-[30%] bg-yellow-500 text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors shadow-md"
      >
        Masuk
      </button>
    </div>
  </div>
</div>

{/* Red background bawah */}
<div className="bg-red-700 h-10 sm:h-12 w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[60%] mx-auto rounded-b-3xl relative -mt-4 z-0"></div>


    </main>
  )
}
