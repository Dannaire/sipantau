'use client';

import { useRouter } from 'next/navigation';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

export const fetchCache = 'force-no-store';

export default function PriceChart() {
  const router = useRouter();

  const [marketName, setMarketName] = useState('Pasar Tidak Diketahui');
  const [komoditasName, setKomoditasName] = useState('Komoditas Tidak Diketahui');
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for chart config
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ambil data dari localStorage
  useEffect(() => {
    const savedMarket = localStorage.getItem('selectedMarket');
    const savedKomoditas = localStorage.getItem('selectedKomoditasRight');

    if (savedMarket) setMarketName(savedMarket);
    if (savedKomoditas) setKomoditasName(savedKomoditas);
  }, []);

  const dateLabels = useMemo(() => {
    const labels: string[] = [];
    const today = new Date();

    const formatter = new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    for (let i = -1; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      labels.push(formatter.format(date));
    }

    return labels;
  }, []);

  const priceData = [54000, 61500, 69000, 70000, 72500];

  const historicalData = dateLabels.slice(0, 3).map((date, i) => ({
    date,
    price: priceData[i]
  }));

  const predictedData = dateLabels.slice(2).map((date, i) => ({
    date,
    price: priceData[i + 2]
  }));

  const handleBreakdown = () => {
    localStorage.setItem('market', marketName);
    localStorage.setItem('komoditas', komoditasName);
    router.push('/breakdown');
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Back Button - Desktop only (top) */}
      <div className="hidden md:flex justify-start px-8 md:px-12 lg:px-20 -translate-y-6 xl:translate-y-4">
        <button
          onClick={() => router.back()}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2 text-sm md:text-base"
        >
          <HiArrowLeft size={20} color="white" />
          <span>Back</span>
        </button>
      </div>

      <div className="w-[95%] sm:w-[92%] md:w-[90%] lg:w-[95%] xl:w-[95%] mx-auto px-2 sm:px-4 lg:px-12 xl:px-20 py-1 transition-all duration-300">
        {/* Market Selection Pill */}
        <div className="flex justify-center sm:justify-end mb-2">
          <div className="bg-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 shadow-md text-sm sm:text-base">
            <span className="text-gray-600">{marketName}</span>
            <span className="mx-1.5 sm:mx-2">|</span>
            <span className="text-gray-400">{komoditasName}</span>
          </div>
        </div>

        {/* Chart with vertical label */}
        <div className="mb-1">
          <div className="flex">
            {/* Vertical Label - hidden on very small screens */}
            <div className="hidden sm:flex items-center justify-center w-10 md:w-15 relative z-0">
              <span className="text-base md:text-xl lg:text-2xl font-bold whitespace-nowrap text-black transform -rotate-90">
                Harga (Rp)
              </span>
            </div>
            {/* Chart */}
            <div className="flex-1 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-96 z-10">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart margin={{ top: 10, right: 20, bottom: isMobile ? 60 : 10, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: isMobile ? 9 : 12, fill: '#6B7280' }}
                    type="category"
                    allowDuplicatedCategory={false}
                    interval={0}
                    padding={{ left: isMobile ? 20 : 100, right: 10 }}
                    angle={isMobile ? -35 : 0}
                    textAnchor={isMobile ? 'end' : 'middle'}
                  />
                  <YAxis
                    domain={[45000, 76000]}
                    ticks={[49000, 52000, 55000, 58000, 60000, 63000, 66000, 69000, 72000, 75000]}
                    tickFormatter={(value) => `Rp. ${(value / 1000).toFixed(0)}.000`}
                    tick={{ fontSize: isMobile ? 9 : 12, fill: '#6B7280' }}
                    width={isMobile ? 65 : 85}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const currentPrice = payload[0].value as number;
                        const currentIndex = priceData.findIndex(price => price === currentPrice);

                        let info = '';
                        if (currentIndex > 0) {
                          const prevPrice = priceData[currentIndex - 1];
                          const change = ((currentPrice - prevPrice) / prevPrice) * 100;
                          const isIncrease = change >= 0;

                          info = `${isIncrease ? '📈 Kenaikan' : '📉 Penurunan'} ${Math.abs(change).toFixed(2)}%`;
                        } else {
                          info = 'Data pertama';
                        }

                        return (
                          <div className="p-2 rounded-lg shadow bg-white border border-gray-200 text-xs sm:text-sm">
                            <p className="text-gray-500">Rp{currentPrice.toLocaleString()}</p>
                            <p className="font-medium text-blue-600">{info}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    data={historicalData}
                    type="linear"
                    dataKey="price"
                    stroke="black"
                    strokeWidth={2}
                    dot={{ fill: 'black', r: 4 }}
                    isAnimationActive={false}
                  />
                  <Line
                    data={predictedData}
                    type="linear"
                    dataKey="price"
                    stroke="red"
                    strokeWidth={2}
                    dot={{ fill: 'red', r: 4 }}
                    isAnimationActive={false}
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Section - stacks on mobile */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-4 sm:mt-6 md:mt-8 gap-4 lg:gap-0">
          {/* Description */}
          <div className="w-full lg:flex-1">
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700">
              Terjadi Kenaikan harga pada {dateLabels[2]}<br />
              Hingga {dateLabels[4]} yang cukup fluktuaktif
            </p>
          </div>

          {/* Breakdown Button */}
          <div className="w-full lg:flex-1 flex justify-center lg:border-r-2 lg:border-gray-500 lg:pr-4">
            <button
              onClick={handleBreakdown}
              className="bg-[#456882] w-full sm:w-[80%] lg:w-[80%] justify-center text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#243039] transition flex items-center space-x-2 text-sm sm:text-base"
            >
              <span>Breakdown</span>
              <HiArrowRight />
            </button>
          </div>

          {/* Legend */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-center">
            <div className="space-y-1.5 sm:space-y-2 text-left">
              <div className="flex items-center space-x-3 sm:space-x-7 justify-start">
                <div className="w-10 sm:w-18 h-0.5 bg-red-500"></div>
                <span className="text-xs sm:text-sm font-semibold text-gray-600">Prediksi 3 Hari Kedepan</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-7 justify-start">
                <div className="w-10 sm:w-18 h-0.5 bg-black"></div>
                <span className="text-xs sm:text-sm font-semibold text-gray-600">Harga komoditas dua hari sebelumnya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button - Mobile only (bottom) */}
        <div className="flex md:hidden mt-6 pb-4">
          <button
            onClick={() => router.back()}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-md transition duration-300 flex items-center space-x-2 text-sm"
          >
            <HiArrowLeft size={16} color="white" />
            <span>Back</span>
          </button>
        </div>
      </div>
    </main>
  );
}
