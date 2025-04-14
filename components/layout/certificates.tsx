"use client";

import React, { useState, useEffect } from "react";

interface Certificate {
  id: number;
  name: string;
  description: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: "Auditor sertifikati",
    description:
      "Ushbu sertifikat moliyaviy audit, soliq tekshiruvlari va korxona hisob-kitoblarini tahlil qilish bo‘yicha malakali auditorlarga beriladi. Auditorlar ushbu sertifikat orqali kompaniyalarning moliyaviy shaffofligini ta’minlash va qonunchilik talablariga javob berishini nazorat qiladi.",
    image: "/image/serti1.png",
  },
  {
    id: 2,
    name: "Auditor sertifikati1",
    description:
      "Ushbu sertifikat moliyaviy audit, soliq tekshiruvlari va korxona hisob-kitoblarini tahlil qilish bo‘yicha malakali auditorlarga beriladi. Auditorlar ushbu sertifikat orqali kompaniyalarning moliyaviy shaffofligini ta’minlash va qonunchilik talablariga javob berishini nazorat qiladi.",
    image: "/image/serti2.png",
  },
  {
    id: 3,
    name: "Auditor sertifikati11",
    description:
      "Ushbu sertifikat moliyaviy audit, soliq tekshiruvlari va korxona hisob-kitoblarini tahlil qilish bo‘yicha malakali auditorlarga beriladi. Auditorlar ushbu sertifikat orqali kompaniyalarning moliyaviy shaffofligini ta’minlash va qonunchilik talablariga javob berishini nazorat qiladi.",
    image: "/image/serti3.png",
  },
  {
    id: 4,
    name: "Auditor sertifikati111",
    description:
      "Ushbu sertifikat moliyaviy audit, soliq tekshiruvlari va korxona hisob-kitoblarini tahlil qilish bo‘yicha malakali auditorlarga beriladi. Auditorlar ushbu sertifikat orqali kompaniyalarning moliyaviy shaffofligini ta’minlash va qonunchilik talablariga javob berishini nazorat qiladi.",
    image: "/image/serti4.png",
  },
  {
    id: 5,
    name: "Programming Pro1",
    description: "Dasturlash bo'yicha sertifikat.",
    image: "/image/serti5.jpg",
  },
  {
    id: 6,
    name: "Programming Pro2",
    description: "Dasturlash bo'yicha sertifikat.",
    image: "/image/serti6.png",
  },
];

const Certificates = () => {
  const [visibleCertificates, setVisibleCertificates] = useState<Certificate[]>(
    certificates.slice(0, 3)
  ); // Dastlab 3 ta sertifikat
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
      const nextVisibleCertificates = [
        certificates[currentIndex % certificates.length],
        certificates[(currentIndex + 1) % certificates.length],
        certificates[(currentIndex + 2) % certificates.length],
      ];
      setVisibleCertificates(nextVisibleCertificates);
    }, 6000); // Har 5 soniyada almashadi

    return () => clearInterval(interval); // Tozalash
  }, [currentIndex]);

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-5 md:px-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 text-center">
          Sertifikatlar
        </h2>

        {/* Mobil versiya */}
        <div className="md:hidden text-center relative">
          <h3 className="text-xl font-bold text-gray-800">
            {certificates[currentIndex].name}
          </h3>
          <p
            className="text-gray-600 mt-3 mx-auto"
            style={{ width: "360px", height: "160px" }}
          >
            {certificates[currentIndex].description}
          </p>
          <div className="mt-5 flex justify-center items-center relative">
            {/* Oldingi rasmga o'tish tugmasi */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              onClick={() =>
                setCurrentIndex(
                  (prevIndex) =>
                    (prevIndex - 1 + certificates.length) % certificates.length
                )
              }
            >
              &#8249; {/* Chap o'q belgisi */}
            </button>

            <div className="w-60 h-83 border rounded-lg overflow-hidden">
              <img
                src={certificates[currentIndex].image}
                alt={certificates[currentIndex].name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Keyingi rasmga o'tish tugmasi */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              onClick={() =>
                setCurrentIndex(
                  (prevIndex) => (prevIndex + 1) % certificates.length
                )
              }
            >
              &#8250; {/* O'ng o'q belgisi */}
            </button>
          </div>
        </div>
        
        {/* Katta ekranlar uchun versiya */}
        <div className="hidden md:flex flex-col md:flex-row items-center gap-10">
          {/* Chap tomonda titul va tavsif */}
          <div className="flex-1 text-center md:text-center">
            <h3 className="text-2xl font-bold text-gray-800">
              {visibleCertificates[0].name}
            </h3>
            <p
              className="text-gray-600 mt-3"
              style={{ width: "690px", height: "80px" }}
            >
              {visibleCertificates[0].description}
            </p>
          </div>

          {/* O'ng tomonda sertifikatlar */}
          <div className="flex-1 flex justify-left md:justify-end gap-15 px-10">
            {visibleCertificates.slice(0, 2).map((certificate, index) => (
              <div
                key={certificate.id}
                className="cursor-pointer p-2 border-0 rounded-lg transition-transform duration-300 border-gray-300"
                style={{ width: "280px", height: "405px" }}
              >
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className={`object-cover rounded-md transition-all duration-300 w-full h-full ${
                    index === 0
                      ? "scale-110"
                      : index === 1
                      ? "scale-90"
                      : "scale-80"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
