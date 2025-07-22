"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from "@/components/ui/Navbar"
import DatePicker from "react-datepicker"
import { HiArrowLeft } from 'react-icons/hi'
import "react-datepicker/dist/react-datepicker.css"

export default function InputHarga() {
  const router = useRouter()
  const [hargaData, setHargaData] = useState(
    Array.from({ length: 30 }, () => ({ komoditas: '', harga: '', tanggal: null }))
  )

  const handleInputChange = (index: number, field: string, value: any) => {
    const newData = [...hargaData]
    newData[index] = { ...newData[index], [field]: value }
    setHargaData(newData)
  }

  const handleSubmit = () => {
    console.log('Harga data:', hargaData)
    router.push('/dashboard-dinas-pertanian')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl text-center mb-8 text-gray-800">
          <span>DATA </span>
          <span className='font-bold'>HARGA </span>
          <span>DARI PETANI</span> </h1>

        {/* Form Card */}
        <div className="w-[100%] sm:w-[90%] md:w-[90%] lg:w-[65%] xl:w-[60%] mx-auto transition-all duration-300">
          <div className="bg-white rounded-3xl shadow-lg">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#456882] via-[#a5bfcc] to-[#456882] text-white rounded-t-3xl p-4">
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <h2 className="text-lg sm:text-xl text-center font-semibold">Nama Komoditas</h2>
                <h2 className="text-lg sm:text-xl text-center font-semibold">Harga</h2>
                <h2 className="text-lg sm:text-xl text-center font-semibold">Tanggal</h2>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 space-y-3 max-h-[320px] overflow-y-auto custom-scrollbar">
              {hargaData.map((item, index) => (
                <div key={index} className="grid grid-cols-7 gap-4 sm:gap-6 md:gap-8 relative">
                  {/* Nama Komoditas */}
                  <input
                    type="text"
                    placeholder="Isikan Komoditas"
                    value={item.komoditas}
                    onChange={(e) => handleInputChange(index, 'komoditas', e.target.value)}
                    className="col-span-3 border-b-2 border-gray-300 bg-transparent text-gray-800 placeholder-gray-400 focus:border-blue-500 outline-none p-2 sm:p-3"
                  />

                  {/* Harga */}
                  <input
                    type="number"
                    placeholder="Rp"
                    value={item.harga}
                    onChange={(e) => handleInputChange(index, 'harga', e.target.value)}
                    className="col-span-2 border-b-2 border-gray-300 bg-transparent text-gray-800 placeholder-gray-400 focus:border-blue-500 outline-none p-2 sm:p-3"
                  />

                  {/* Tanggal (Date Picker) */}
                  <DatePicker
                    selected={item.tanggal}
                    onChange={(date) => handleInputChange(index, 'tanggal', date)}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="dd/mm/yyyy"
                    className="col-span-2 border-b-2 border-gray-300 bg-transparent text-gray-800 placeholder-gray-400 focus:border-blue-500 outline-none p-2 sm:p-3 text-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
         <div className="relative -mt-4 flex justify-center z-50">
  <button
    onClick={handleSubmit}
    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-12 py-1 rounded-full text-lg transition-colors shadow-lg outline outline-1 outline-black"
  >
    Input
  </button>
</div>

        </div>

        {/* Back Button */}
        <div className="flex justify-start px-12 md:px-20 -translate-y-10">
<div className="w-full flex justify-start mt-20 pl-24">
  <button
    onClick={() => router.push('/dashboard-dinas-pertanian')}
    className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-12 py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2"
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
