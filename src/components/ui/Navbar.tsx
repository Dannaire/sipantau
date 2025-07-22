"use client"
import { useRouter } from 'next/navigation'



export default function Navbar() {
    const router = useRouter()
  return (
    <header className="relative z-10 flex justify-between items-center px-12 md:px-20 py-8 h-24 mx-auto">
      {/* Logo Kiri */}
      <div className="flex items-center ml-4 md:ml-8 translate-y-2">
        <img
          src="/assets/img/logo.png"
          alt="Watugate Logo"
          className="w-32 h-32 md:w-40 md:h-40 object-contain"
        />
      </div>

      {/* Rounded Gradient Background dengan Nav Putih */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#456882] to-[#a5bfcc] rounded-b-[65px] shadow-md w-[30%] h-[110%] flex items-center justify-center z-0">
        <nav className="bg-white/90 backdrop-blur-sm rounded-full w-[80%] h-[50%] shadow flex justify-evenly items-center text-gray-400 font-light">
          <button
          onClick={() => router.push('/')}
          className="hover:text-gray-900 transition-colors">Beranda</button>
          <button 
          onClick={() => router.push('/tentang-kami')}
          className="hover:text-gray-900 transition-colors">Tentang Kami</button>
          <button
          onClick={() => router.push('/faq')}
           className="hover:text-gray-900 transition-colors">FAQ</button>
        </nav>
      </div>

      {/* User Info Kanan */}
      <div className="flex items-center mr-4 md:mr-8 translate-y-2 text-gray-700">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-base font-semibold">
          U
        </div>
        <span className="font-medium ml-2">User</span>
      </div>
    </header>
  )
}
