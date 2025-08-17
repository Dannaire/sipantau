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
      <main className="p-10">
        <h1 className="text-6xl text-center mb-4 text-gray-800"><span className="font">ISIKAN </span><span className="font-bold">DATA</span> </h1>

        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[80%] mx-auto px-4 sm:px-6 lg:px-20 transition-all duration-300 space-y-8">
          <div
            onClick={() => router.push('/pilih-kebutuhan')}
            className="bg-gradient-to-r from-[#456882] via-[#a5bfcc] to-[#456882] cursor-pointer transition-colors rounded-4xl p-6 flex justify-between items-center"
          >
            <span className="text-white text-2xl font-semibold">Data Kebutuhan & Ketersediaan</span>
            <span className="text-white text-2xl"><HiArrowRight size={20} color="white" /></span>
          </div>
          {/* Komoditas Button */}
          <div
            onClick={() => router.push('/pilih-komoditas')}
            className="bg-gradient-to-r from-[#456882] via-[#a5bfcc] to-[#456882] cursor-pointer transition-colors rounded-4xl p-6 flex justify-between items-center"
          >
            <span className="text-white text-2xl font-semibold">Data Komoditas</span>
            <span className="text-white text-2xl"><HiArrowRight size={20} color="white" /></span>
          </div>

          {/* Harga Button */}
          <div
            onClick={() => router.push('/pilih-harga')}
            className="bg-gradient-to-r from-[#456882] via-[#a5bfcc] to-[#456882] hover:bg-slate-700 cursor-pointer transition-colors rounded-4xl p-6 flex justify-between items-center"
          >
            <span className="text-white text-2xl font-semibold">Data Harga dari Petani</span>
            <span className="text-white text-2xl"><HiArrowRight size={20} color="white" /></span>
          </div>

                    <div
            onClick={() => router.push('/pilih-harga-pasar')}
            className="bg-gradient-to-r from-[#456882] via-[#a5bfcc] to-[#456882] hover:bg-slate-700 cursor-pointer transition-colors rounded-4xl p-6 flex justify-between items-center"
          >
            <span className="text-white text-2xl font-semibold">Data Harga dari Pasar</span>
            <span className="text-white text-2xl"><HiArrowRight size={20} color="white" /></span>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-4 pl-12 md:pl-20">
          <div className="w-full flex justify-start">
            <button
              onClick={() => router.push('/')}
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold font-semibold px-12 py-3 rounded-full shadow-xl transition duration-300 flex items-center space-x-2"
            >
              <HiArrowLeft size={20} color="white" />
              <span className="font-bold">Back</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
