"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion"; // Framer Motion import

interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
  tariffs?: Tariff[]; // Tariflar uchun qo'shimcha maydon
}

interface Tariff {
  title: string;
  desc: string;
  tarif_info: string;
  price: string;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Audit",
    image: "/audit.png",
    description: `✅ Moliya va buxgalteriya hisobotlarini to‘liq tekshirish
✅ Soliq va huquqiy xatolarni aniqlash
✅ Moliyaviy faoliyat tahlili va tavsiyalar
✅ Ichki nazorat tizimini baholash va takomillashtirish
✅ Hisobotlarni tayyorlash va taqdim etish`,
  },
  {
    id: 2,
    title: "Buxgalteriya hisobini yuritish",
    image: "/buxgalter.png",
    description: `✅ Buxgalteriya hisobotlarini yuritish
✅ Moliyaviy hisobotlarni tayyorlash
✅ Soliq hisobotlarini taqdim etish
✅ Harajatlar va daromadlarni nazorat qilish`,
    tariffs: [
      {
        title: "Asosiy",
        desc: "Kichik biznes va tadbirkorlar uchun mo‘ljallangan asosiy buxgalterlik xizmati. Moliyaviy hisob-kitoblarni yuritish, boshlang‘ich hujjatlarni tayyorlash va hisobotlarni topshirishda yordam beramiz. Oddiy va ishonchli yechim!",
        tarif_info: `✅ Asosiy buxgalterlik xizmatlari
✅ Hisobotlarni tayyorlash va topshirish
✅ Soliq hisob-kitoblari bo‘yicha maslahat`,
        price: "4 000 000 oyiga",
        color: "#007BFF",
      },
      {
        title: "Optimal",
        desc: "O‘rta va kichik biznes egalari uchun kengaytirilgan xizmatlar. Soliq optimallashtirish, hujjatlar tahlili va har tomonlama buxgalterlik yordami. Biznesingizning moliyaviy barqarorligini ta’minlaymiz!",
        tarif_info: `✅ Asosiy + qo‘shimcha hujjatlar tayyorlash
        ✅ Soliq optimallashtirish bo‘yicha maslahat
        ✅ Har choraklik hisobotlarni tayyorlash
        ✅ Xodimlarning ish haqi hisob-kitobi`,
        price: "6 000 000 oyiga",
        color: "#28A745",
      },
      {
        title: "Kengaytirilgan",
        desc: "Rivojlanayotgan va yiriklashayotgan kompaniyalar uchun kengaytirilgan xizmatlar. Biznesingizning moliyaviy barqarorligini ta’minlaymiz va barcha hujjatlarni yuritamiz.",
        tarif_info: `✅ Barqaror tarifining barcha xizmatlari
        ✅ Xalqaro hisob standartlariga mos hisobotlar
        ✅ Xodimlar va kontragentlar bilan hisob-kitoblar
        ✅ Kredit olish va moliyaviy rejalashtirish bo‘yicha maslahat`,
        price: "10 000 000 oyiga",
        color: "#F39C12",
      },
      {
        title: "Premium",
        desc: "Yirik kompaniyalar va jadal rivojlanayotgan bizneslar uchun to‘liq moliyaviy nazorat. Bu tarif soliqqa tortish, hujjat aylanishi va yillik strategik buxgalteriya rejalari bo‘yicha maslahatlarni o‘z ichiga oladi. Biz sizning biznesingizni yangi darajaga olib chiqamiz!",
        tarif_info: `✅ Barqaror tarifining barcha xizmatlari
        ✅ Kompaniyaning moliyaviy tahlili va rejalashtirish
        ✅ Soliq auditi va yuridik hujjatlar bo‘yicha maslahat
        ✅ Soliq auditi va yuridik hujjatlar bo‘yicha maslahat
        ✅ Soliq auditi va yuridik hujjatlar bo‘yicha maslahat
        ✅ Soliq auditi va yuridik hujjatlar bo‘yicha maslahat
        ✅ Xalqaro buxgalteriya standartlariga muvofiq hisobotlar`,
        price: "15 000 000 oyiga",
        color: "#FFD700",
      },
    ],
  },
  {
    id: 3,
    title: "Kadrlar hisobi",
    image: "/kadr.png",
    description: `✅ Kadrlar bo'yicha hujjatlarni yuritish
✅ Ishchilarni ro'yxatga olish va hisobini yuritish
✅ Mehnat qonunchiligiga rioya qilish`,
  },
  {
    id: 4,
    title: "Soliq maslahati",
    image: "/soliq.png",
    description: `✅ Soliq qonunchiligiga rioya qilish bo'yicha maslahat
✅ Soliq hisobotlarini tayyorlash va taqdim etish
✅ Soliq yukini optimallashtirish`,
  },
  {
    id: 5,
    title: "Deklarant",
    image: "/Deklarant.png",
    description: `✅ Tashqi savdo operatsiyalarini hujjatlashtirish
✅ Bojxona deklaratsiyalarini tayyorlash
✅ Bojxona qonunchiligiga rioya qilish`,
  },
  {
    id: 6,
    title: "Boshqalar",
    image: "/boshqalar.png",
    description: `✅ Boshqa xizmatlar bo'yicha batafsil ma'lumot uchun biz bilan bog'laning.`,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  // Scroll qilish
  setTimeout(() => {
    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, 100); // Scroll qilishni biroz kechiktirish

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto text-center px-4 sm:px-15">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-10">
          Bizning Xizmatlar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleServiceClick(service)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
            >
              <div className="flex justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-32 h-28 sm:w-44 sm:h-40 object-cover rounded-md mb-4"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {selectedService && (
          <motion.div
            ref={detailsRef}
            className="mt-8 sm:mt-10 bg-white p-4 sm:p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: selectedService.id * 0.1 }}
          >
            {selectedService.id !== 2 && (
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-15">
                <div className="flex-shrink-0">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-20 sm:w-[50px] md:w-90 h-auto object-cover rounded-md"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedService.description}
                  </p>
                </div>
              </div>
            )}

            {selectedService.id === 2 && (
              <div className="mt-4">
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-10 text-center">
                  Buxgalteriya xizmat tariflari
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {selectedService.tariffs?.map((tariff, index) => (
                    <motion.div
                      key={index}
                      className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow text-center flex flex-col justify-between h-full"
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: index * 0.5 }}
                    >
                      <div>
                        <h5
                          className="text-lg font-bold"
                          style={{ color: tariff.color }}
                        >
                          {tariff.title}
                        </h5>
                        <p
                          className="text-gray-700 mt-2 text-left text-justify"
                          style={{
                            width: "100%",
                            height: "150px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {tariff.desc}
                        </p>
                        <div
                          className="mt-2 p-2 border-t"
                          style={{ color: tariff.color }}
                        ></div>
                        <p className="text-gray-600 mt-1 whitespace-pre-line text-left">
                          {tariff.tarif_info}
                        </p>
                      </div>
                      <div style={{ color: tariff.color }}>
                        <button
                          className="text-lg font-bold text-black hover:shadow-lg px-6 sm:px-10 py-2 rounded hover:bg-green-700 transition-colors mt-4 sm:mt-6"
                          style={{ backgroundColor: tariff.color }}
                          onClick={() => {
                            window.location.href = "/#contact";
                          }}
                        >
                          {tariff.price}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
