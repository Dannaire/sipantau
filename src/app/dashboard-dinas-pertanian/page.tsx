"use client"
import Navbar from "@/components/ui/Navbar"
import { useRouter } from 'next/navigation'
import { HiArrowRight, HiArrowLeft } from "react-icons/hi"

export default function DashboardDinasPertanian() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header */}
  {/* Header */}
{/* Header */}
{/* Header */}
<Navbar />





      {/* Main Content */}
      <main className="p-16">
        <h1 className="text-6xl text-center mb-16 text-gray-800"><span className="font">ISIKAN </span><span className="font-bold">DATA</span> </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Komoditas Button */}
          <div
            onClick={() => router.push('/input-komoditas')}
            className="bg-gradient-to-r from-[#456882] via-[#a5bfcc] to-[#456882] cursor-pointer transition-colors rounded-3xl p-8 flex justify-between items-center"
          >
            <span className="text-white text-2xl font-semibold">Komoditas</span>
            <span className="text-white text-2xl"><HiArrowRight size={20} color="white" /></span>
          </div>

          {/* Harga Button */}
          <div
            onClick={() => router.push('/input-harga')}
            className="bg-gradient-to-r from-[#456882] via-[#a5bfcc] to-[#456882] hover:bg-slate-700 cursor-pointer transition-colors rounded-3xl p-8 flex justify-between items-center"
          >
            <span className="text-white text-2xl font-semibold">Harga</span>
            <span className="text-white text-2xl"><HiArrowRight size={20} color="white" /></span>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-16 pl-12 md:pl-20">
          <div className="w-full flex justify-start">
            <button
              onClick={() => router.push('/')}
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-12 py-3 rounded-full shadow-xl transition duration-300 flex items-center space-x-2"
            >
              <HiArrowLeft size={20} color="white" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
