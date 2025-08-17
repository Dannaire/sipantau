"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/ui/Navbar'
import { FiSearch } from 'react-icons/fi'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

export default function PilihHarga() {
  const router = useRouter()

  const [marketName, setMarketName] = useState('Pasar Tidak Diketahui')
  const [selectedDate, setSelectedDate] = useState({ day: '', month: '', year: '' })
  const [selectedKomoditasDrop, setSelectedKomoditasDrop] = useState('')
  const [selectedKomoditasRight, setSelectedKomoditasRight] = useState('')
  const [showDropdownLeft, setShowDropdownLeft] = useState(false)
  const [showDropdownRight, setShowDropdownRight] = useState(false)
  const [harga, setHarga] = useState<number | null>(null)

  const komoditasList = ['Cabai Rawit Merah','Cabai Rawit Hijau', 'Cabai Merah Besar', 'Cabai hijau Besar','Bawang Merah', 'Bawang Putih']

  // 🔥 Ambil marketName & komoditas dari LocalStorage saat pertama load
  useEffect(() => {
    const storedMarket = localStorage.getItem('selectedMarket')



    if (storedMarket) setMarketName(storedMarket)

  }, [])

  const handleCheckHarga = (komoditas = selectedKomoditasDrop) => {
    if (!komoditas) {
      setHarga(null) // reset harga jika komoditas kosong
      return
    }

    localStorage.setItem('selectedKomoditasDrop', komoditas) // 💾 simpan ke localStorage
    const fakeHarga = Math.floor(Math.random() * 50000) + 10000
    setHarga(fakeHarga)
    router.push('/input-harga')
  }

  const handleCheckHargaKanan = () => {
    if (!selectedKomoditasDrop || !selectedDate.day || !selectedDate.month || !selectedDate.year) {
      alert('Harap pilih komoditas di kiri dan isi tanggal terlebih dahulu!')
      return
    }
    const fakeHarga = Math.floor(Math.random() * 50000) + 10000
    setHarga(fakeHarga)
  }

  const handleCheckKomoditas = () => {
    if (!selectedKomoditasRight) {
      alert('Harap pilih komoditas di kanan terlebih dahulu!')
      return
    }

    localStorage.setItem('selectedKomoditasRight', selectedKomoditasRight) // 💾 simpan ke localStorage

    router.push('/price-chart')
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const [year, month, day] = value.split('-')
    setSelectedDate({ day, month, year })
  }

  const updateDateField = (field: 'day' | 'month' | 'year', value: string) => {
    const updatedDate = { ...selectedDate, [field]: value }
    setSelectedDate(updatedDate)

    const hiddenInput = document.querySelector<HTMLInputElement>('#hiddenDateInput')
    if (hiddenInput) {
      hiddenInput.value = `${updatedDate.year}-${updatedDate.month}-${updatedDate.day}`
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#ffff] to-[#dddcdc]">
      <Navbar />

      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[90%] mx-auto px-4 sm:px-6 lg:px-20 py-6 transition-all duration-300 items-center">
        <div className="">
          {/* Left Side */}
          <div className="">
            <h1 className="text-5xl text-center mb-8 text-gray-800 mt-2 leading-none"> <span> PILIH </span> <span className='font-semibold'>KOMODITAS</span>
            </h1>

            <div className="mb-71 items-center flex justify-center">
              <div className="relative w-[80%]">
                <input
                  type="text"
                  placeholder="Komoditas"
                  value={selectedKomoditasDrop}
                  onChange={(e) => setSelectedKomoditasDrop(e.target.value)}
                  onFocus={() => setShowDropdownLeft(true)}
                  className="w-full px-4 py-5 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
                />
                <button
                  onClick={() => handleCheckHarga()}
                  className="absolute  right-0 top-[5%] bg-gradient-to-r from-[#456882] to-[#a5bfcc] text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <FiSearch size={30} color="white" />
                </button>

                {showDropdownLeft && (
                  <div className="absolute top-full w-[96%] left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 mt-1">
                    {komoditasList.map((komoditas, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedKomoditasDrop(komoditas)
                          setShowDropdownLeft(false)
                          handleCheckHarga(komoditas)
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-green-100 first:bg-green-200 border-b border-gray-200 last:border-b-0 text-gray-900"
                      >
                        {komoditas}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>


          </div>

          {/* Right Side */}
        </div>
      </div>

      <div className="flex justify-start px-12 md:px-20 -translate-y-10 xl:-translate-y-1">
        <div className="w-full flex justify-start">
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
  )
}
