"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animatsiya faqat bir marta ishlaydi
    threshold: 0.2, // Bo'limning 20% qismi ko'rinsa animatsiya boshlanadi
  });

  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                Balansor
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Zamonaviy texnologiyalar yordamida qishloq xo&apos;jaligida
                inqilob! AgroCloud sun&apos;iy intellekt (AI) va IoT
                tizimlaridan foydalangan holda fermerlarga hosildorlikni
                oshirish, resurslarni samarali boshqarish imkonini beradi.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Aqlli monitoring tizimlari orqali suv, o&apos;g&apos;it va
                tuproq sifatini real vaqt rejimida nazorat qiling va ilg&apos;or
                qishloq xo&apos;jaligi texnologiyalari bilan natijalaringizni
                yaxshilang!
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg h-140 col-span-2 mt-4">
                <Image
                  src="/main.jpg"
                  alt="Smart farming technology"
                  width={800}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div
            className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-6 px-10"
            ref={ref}
          >
            {/* Chap tomondagi div */}
            <motion.div
              className="bg-blue-50 p-6 rounded-lg hover:shadow-lg border-t-4 border-blue-800 shadow-md"
              initial={{ opacity: 0, x: -100 }} // Chapdan chiqadi
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animatsiya faqat ko'rinsa ishlaydi
              transition={{ duration: 0.5, delay: 0.1 }} // Animatsiya davomiyligi va kechikish
            >
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Tezkor buxgalteriya xizmatlari
              </h3>
              <p className="text-gray-700">
                Soliq hisobotlari, balanslar va boshqa moliyaviy hujjatlarni qisqa vaqt ichida tayyorlab beramiz.
              </p>
            </motion.div>

            {/* O'rtadagi div */}
            <motion.div
              className="bg-blue-50 p-6 rounded-lg hover:shadow-lg border-t-4 border-blue-800 shadow-md"
              initial={{ opacity: 0, y: 100 }} // Pastdan chiqadi
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animatsiya faqat ko'rinsa ishlaydi
              transition={{ duration: 0.5, delay: 0.2 }} // Animatsiya davomiyligi va kechikish
            >
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Real vaqt monitoringi
              </h3>
              <p className="text-gray-700">
                Dalalaringiz holatini har doim nazorat qilib turing.
              </p>
            </motion.div>

            {/* O'ng tomondagi div */}
            <motion.div
              className="bg-blue-50 p-6 rounded-lg hover:shadow-lg border-t-4 border-blue-800 shadow-md"
              initial={{ opacity: 0, x: 100 }} // O'ngdan chiqadi
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animatsiya faqat ko'rinsa ishlaydi
              transition={{ duration: 0.5, delay: 0.3 }} // Animatsiya davomiyligi va kechikish
            >
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Resurslarni tejash
              </h3>
              <p className="text-gray-700">
                Suv, o&apos;g&apos;it va boshqa resurslarni optimal foydalanish
                imkoniyati.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;