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
    <div className="min-h-screen bg-gradient-to-br overflow-hidden from-gray-100 to-gray-200 relative pb-20">
      <Navbar />

      {/* Main Content */}
      <main className="px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-6 md:mb-8 text-gray-800">
          <span>DATA </span>
          <span className='font-bold'>HARGA </span>
          <span>DARI PETANI</span>
        </h1>

        {/* Form Card */}
        <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[65%] xl:w-[60%] mx-auto transition-all duration-300">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#456882] via-[#a5bfcc] to-[#456882] text-white rounded-t-2xl sm:rounded-t-3xl p-3 sm:p-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8">
                <h2 className="text-sm sm:text-lg md:text-xl text-center font-semibold">Harga</h2>
                <h2 className="text-sm sm:text-lg md:text-xl text-center font-semibold">Tanggal</h2>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3 max-h-[280px] sm:max-h-[320px] overflow-y-auto custom-scrollbar">
              {hargaData.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8 relative">
                  {/* Harga */}
                  <input
                    type="number"
                    placeholder="Rp"
                    value={item.harga}
                    onChange={(e) => handleInputChange(index, 'harga', e.target.value)}
                    className="border-b-2 text-center border-gray-300 bg-transparent text-gray-800 placeholder-gray-400 focus:border-blue-500 outline-none p-1.5 sm:p-2 md:p-3 text-sm sm:text-base"
                  />
                  {/* Tanggal (Date Picker) */}
                  <div className="w-full">
                    <DatePicker
                      selected={item.tanggal}
                      onChange={(date) => handleInputChange(index, 'tanggal', date)}
                      dateFormat="dd-MM-yyyy"
                      placeholderText="dd/mm/yyyy"
                      className="w-full border-b-2 border-gray-300 bg-transparent text-gray-800 text-center placeholder-gray-400 focus:border-blue-500 outline-none p-1.5 sm:p-2 md:p-3 text-sm sm:text-base"
                      wrapperClassName="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="relative -mt-4 flex justify-center z-50">
            <button
              onClick={handleSubmit}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 sm:px-10 md:px-12 py-1 rounded-full text-base sm:text-lg transition-colors shadow-lg outline outline-1 outline-black"
            >
              Input
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="absolute bottom-6 left-3 sm:left-4 md:left-6 lg:left-8 xl:left-20">
          <button
            onClick={() => router.push('/dashboard-dinas-pertanian')}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 sm:px-8 md:px-12 py-2.5 md:py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2 text-sm md:text-base"
          >
            <HiArrowLeft size={18} color="white" />
            <span>Back</span>
          </button>
        </div>
      </main>
    </div>
  )
}
