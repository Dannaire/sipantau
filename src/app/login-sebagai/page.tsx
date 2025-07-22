"use client"

import { useRouter } from 'next/navigation'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { HiArrowLeft } from 'react-icons/hi'
export default function LoginSelection() {
  const router = useRouter()

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

      {/* Back Button */}

<div className="w-full flex justify-start mt-20 pl-24">
  <button
    onClick={() => router.push('/')}
    className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-12 py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2"
  >
    <HiArrowLeft size={20} color="white" />
    <span>Back</span>
  </button>
</div>


      {/* Title */}
      <h1 className="text-white text-5xl font-bold drop-shadow-lg mt-8 mb-40">
        LOGIN SEBAGAI
      </h1>

      {/* Login Options */}
      <div className="flex flex-wrap justify-center gap-20 max-w-6xl w-full">
        {/* Dinas Pertanian */}
        <button
          onClick={() => router.push('/login-dinas-pertanian')}
          className="relative bg-red-700 rounded-4xl shadow-[8px_8px_20px_rgba(0,0,0,0.5)] pt-32 pb-16 px-14 flex flex-col items-center space-y-8 w-[28rem] hover:brightness-110 transition"
        >
          <img
            src="/assets/img/logo2.png"
            alt="Logo Dinas Pertanian"
            className="absolute -top-36 h-72 w-72 object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.1)]"
          />
          <span className="text-white font-bold text-2xl text-center leading-snug">
            Dinas Pertanian & Dinas Ketahanan Pangan
          </span>
        </button>

        {/* Tim Penanggulangan */}
        <button
          onClick={() => router.push('/login-tim-pengendalian')}
          className="relative bg-yellow-500 rounded-4xl shadow-[8px_8px_20px_rgba(0,0,0,0.5)] pt-32 pb-16 px-29 flex flex-col items-center space-y-8 w-[28rem] hover:brightness-110 transition"
        >
          <img
            src="/assets/img/tpid.png"
            alt="Logo Tim Pengendalian"
            className="absolute -top-40 h-86 w-86 object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.1)]"
          />
          <span className="text-white font-bold text-2xl text-center leading-snug">
            Tim Pengendalian Inflasi Daerah
          </span>
        </button>
      </div>
    </main>
  )
}
