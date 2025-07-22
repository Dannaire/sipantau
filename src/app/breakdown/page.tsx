"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export const fetchCache = "force-no-store";

export default function Breakdown() {
  const router = useRouter();

  const [marketName, setMarketName] = useState("Pasar Tidak Diketahui");
  const [komoditasName, setKomoditasName] = useState("Komoditas Tidak Diketahui");

  // Ambil data dari localStorage setelah komponen mount
  useEffect(() => {
    const savedMarket = localStorage.getItem("selectedMarket");
    const savedKomoditas = localStorage.getItem("selectedKomoditasRight");

    if (savedMarket) setMarketName(savedMarket);
    if (savedKomoditas) setKomoditasName(savedKomoditas);
  }, []);

  const handleRekomendasi = () => {
    router.push("/rekomendasi");
  };

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[95%] mx-auto px-4 sm:px-6 lg:px-20 py-1 transition-all duration-300">
        {/* Market Selection */}
        <div className="flex justify-end mb-8">
          <div className="bg-white rounded-full px-6 py-2 shadow-md">
            <span className="text-gray-600">{marketName}</span>
            <span className="mx-2">|</span>
            <span className="text-gray-400">{komoditasName}</span>
          </div>
        </div>

        {/* Content */}
        <div className="xl:w-[87%]">
          <h1 className="text-5xl text-gray-600 mb-8">
            FAKTOR YANG MEMPENGARUHI<br />
            <span className="text-gray-700 font-bold">INTERNAL</span>
          </h1>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Kelompok tani kurang optimal dalam membeli pupuk dan pestisida sehingga
              hasil panen kurang optimal yang mempengaruhi harga pasar.
            </p>

            <p>
              Ketidakteraturan pola tanam antarkelompok tani mengakibatkan
              ketidakseimbangan pasokan. Pada periode tertentu terjadi surplus, namun
              pada periode lainnya mengalami kekosongan pasokan.
            </p>

            <p>
              Curah hujan yang tinggi dan suhu ekstrem menimbulkan penyakit pada
              tanaman dan peningkatan hama yang merugikan petani
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-16">
          {/* Tombol Back */}
          <div className="max-w-4xl w-full">
            <div className="w-full flex justify-start">
              <button
                onClick={() => router.back()}
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2"
              >
                <HiArrowLeft size={20} color="white" />
                <span>Back</span>
              </button>
            </div>
          </div>

          {/* Tombol Rekomendasi */}
          <div className="flex justify-end w-full">
            <button
              onClick={handleRekomendasi}
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition flex items-center space-x-2"
            >
              <span className="font-bold">Rekomendasi Intervensi</span>
              <span>
                <HiArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
