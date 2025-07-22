"use client"
import { useRef, useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from "@/components/ui/Navbar"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs'
import { HiArrowLeft } from 'react-icons/hi'

export default function InputKomoditas() {
  const router = useRouter()
  const [komoditasData, setKomoditasData] = useState(
    Array.from({ length: 30 }, () => ({ nama: '', perkiraan: null }))
  )

  const handleInputChange = (index: number, field: string, value: any) => {
    const newData = [...komoditasData]
    newData[index] = { ...newData[index], [field]: value }
    setKomoditasData(newData)
  }

  const handleSubmit = () => {
    const formattedData = komoditasData.map(item => ({
      ...item,
      perkiraan: item.perkiraan ? dayjs(item.perkiraan).format('YYYY-MM-DD') : ''
    }))
    console.log('Komoditas data:', formattedData)
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
          <span className='font-bold'>KOMODITAS</span> </h1>

        {/* Form Card */}
        <div className="w-[100%] sm:w-[90%] md:w-[90%] lg:w-[65%] xl:w-[60%] mx-auto transition-all duration-300">
          <div className="bg-white rounded-3xl shadow-lg">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#456882] via-[#a5bfcc] to-[#456882] text-white rounded-t-3xl p-4">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <h2 className="text-lg sm:text-xl text-center font-semibold">Nama Komoditas</h2>
                <h2 className="text-lg sm:text-xl text-center font-semibold">Perkiraan Panen</h2>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 space-y-3 max-h-[320px] overflow-y-auto custom-scrollbar">
              {komoditasData.map((item, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 sm:gap-6 md:gap-8 relative">
                  {/* Nama Komoditas */}
                  <input
                    type="text"
                    placeholder="Isikan Komoditas"
                    value={item.nama}
                    onChange={(e) => handleInputChange(index, 'nama', e.target.value)}
                    className="col-span-3 border-b-2 border-gray-300 bg-transparent text-gray-800 placeholder-gray-400 focus:border-blue-500 outline-none p-2 sm:p-3"
                  />

                 <div className="col-span-2 w-full">
  <DatePicker
    selected={item.perkiraan}
    onChange={(date) => handleInputChange(index, 'perkiraan', date)}
    dateFormat="dd-MM-yyyy"
    placeholderText="dd/mm/yyyy"
    className="w-full border-b-2 border-gray-300 bg-transparent text-gray-800 text-center placeholder-gray-400 focus:border-blue-500 outline-none p-2 sm:p-3"
    wrapperClassName="w-full"
  />
</div>

                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="relative -mt-4 flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-12 py-1 rounded-full text-lg transition-colors shadow-lg outline outline-1 outline-black z-50"
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
