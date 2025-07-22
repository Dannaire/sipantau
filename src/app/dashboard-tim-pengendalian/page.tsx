"use client"

import { useState } from 'react'
import Navbar from "@/components/ui/Navbar"
import { useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

export default function DashboardTimPenanggulangan() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMarket, setSelectedMarket] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const pasarList = [
    'Pasar Cisaat',
    'Pasar Parungkuda',
    'Pasar Cicurug',
    'Pasar Cibadak',
    'Pasar Sukaraja',
    'Pasar Surade',
    'Pasar Sagaranten',
    'Pasar Palabuhanratu'
  ]

  const filteredPasar = pasarList.filter(pasar =>
    pasar.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handlePasarSelect = (pasar: string) => {
    setSearchTerm(pasar)
    setSelectedMarket(pasar)
    setShowDropdown(false)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 30000000) // hide alert after 3s
  }

  const handleCheckHarga = () => {
    router.push(`/checking-station?market=${encodeURIComponent(selectedMarket)}`)
  }

  return (
    <main className="min-h-screen bg-gray-100 text-black">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[85%] mx-auto transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start justify-between px-4 sm:px-6 md:px-8 py-16 space-y-8 md:space-y-0 md:space-x-8">
          {/* Left side - Search and Info */}
          <div className="flex-1 relative">
            {/* Title */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              <span className="text-lg sm:text-xl font-semibold">
                Lokasi 8 Pasar Induk di Kabupaten Sukabumi
              </span>
            </div>

            {/* Searchbar */}
            <div className="relative mb-6">
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Cari Lokasi Pasar Induk"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setShowDropdown(true)
                  }}
                  onFocus={() => setShowDropdown(true)}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
                />
                <button className="absolute  right-0 top-[5%] bg-gradient-to-r from-[#456882] to-[#a5bfcc] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <FiSearch size={20} color="white" />
                </button>
              </div>

              {/* Dropdown */}
              {showDropdown && filteredPasar.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 mt-1">
                  {filteredPasar.map((pasar, index) => (
                    <button
                      key={index}
                      onClick={() => handlePasarSelect(pasar)}
                      className="w-full text-left px-4 py-2 hover:bg-green-100 first:bg-green-200 border-b border-gray-200 last:border-b-0"
                    >
                      {pasar}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Check Button & Alert */}
            <div className="h-64 relative">
              {/* Fixed height so searchbar doesn't shift */}
              {selectedMarket && (
                <div className="absolute top-0">
                  <button
                    onClick={handleCheckHarga}
                    className="w-[100%]  bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition flex items-center justify-center space-x-2 mb-2"
                  >
                    <span>Check!</span>
                    <span><HiArrowRight/></span>
                  </button>
                </div>
              )}
              {showAlert && selectedMarket && (
                <div className="absolute bottom-0 w-full px-4 py-3">
                  <strong className='text-3xl text-red-700 '>ALERT!</strong>
                  <p className='text-gray-900 text-xl'>
                    Harga dan pasokan di <b>{selectedMarket}</b> diprediksi terjadi kenaikan harga komoditas.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Map */}
          <div className="flex-1 relative w-full h-[480px]">
            <img
              src="/assets/img/map.png"
              alt="Map Kabupaten Sukabumi"
              className="w-full h-full object-contain"
            />

            {/* Red dots for market locations */}
            <div className="absolute top-[10%] right-[33%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-[25%] right-[10.5%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-[28%] right-[25%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-[27%] right-[33%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-[19%] right-[39.2%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-[10%] left-[37%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-[29%] right-[25%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-[39%] left-[37%] w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Back Button */}
        <div className="-mt-24">
         <div className="w-full flex justify-start">
           <button
             onClick={() => router.push('/')}
             className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-12 py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2"
           >
             <HiArrowLeft size={20} color="white" />
             <span>Back</span>
           </button>
         </div>
        </div>
      </div>
    </main>
  )
}
