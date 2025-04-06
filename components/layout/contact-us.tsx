"use client";

import React from "react";
import { motion } from "framer-motion"; // Framer Motion import
import { useInView } from "react-intersection-observer"; // Intersection Observer import

const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animatsiya faqat bir marta ishlaydi
    threshold: 0.15, // Bo'limning 20% qismi ko'rinsa animatsiya boshlanadi
  });

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
          {/* Title, Description, and Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-16 px-11">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -100 }} // Boshlang'ich holat: chapdan chiqadi
                animate={inView ? { opacity: 1, x: 0 } : {}} // Animatsiya holati: markazga joylashadi
                transition={{ duration: 0.5, delay: 0.5 }} // Animatsiya davomiyligi va kechikish
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Kontaktlarimiz
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -100 }} // Boshlang'ich holat: chapdan chiqadi
                animate={inView ? { opacity: 1, x: 0 } : {}} // Animatsiya holati: markazga joylashadi
                transition={{ duration: 0.7, delay: 0.5 }} // Animatsiya davomiyligi va kechikish
                className="text-gray-700 mb-10"
              >
                Bizni ishonchli ma’lumotlarimiz, agar bizda savollar bo’lsa
                yuborishingiz mumkin.
              </motion.p>
              <motion.form
                className="flex flex-col gap-10"
                initial={{ opacity: 0, x: -100 }} // Boshlang'ich holat: chapdan chiqadi
                animate={inView ? { opacity: 1, x: 0 } : {}} // Animatsiya holati: markazga joylashadi
                transition={{ duration: 0.9, delay: 0.9 }} // Animatsiya davomiyligi va kechikish
              >
                <input
                  type="text"
                  placeholder="+ 998 99 185 37 03"
                  className="p-3 border border-gray-300 rounded-lg w-[450px] bg-[#002F6C] text-white placeholder-white"
                  required
                />
                <input
                  type="email"
                  placeholder="balansoruz@gmail.com"
                  className="p-3 border border-gray-300 rounded-lg w-[450px] bg-[#002F6C] text-white placeholder-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Parkent ko’chasi, 76"
                  className="p-3 border border-gray-300 rounded-lg w-[450px] bg-[#002F6C] text-white placeholder-white"
                  required
                />
              </motion.form>
            </div>
          </div>

          {/* Frame with User Input */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 ml-4"
            initial={{ opacity: 0, y: 100 }} // Forma pastdan chiqadi
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animatsiya faqat ko'rinsa ishlaydi
            transition={{ duration: 0.7, delay: 0.3 }} // Animatsiya davomiyligi va kechikish
          >
            <form className="flex flex-col gap-4">
              {["Ism", "Familiya", "Xabaringiz"].map((label, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }} // Har bir element o'ngdan chiqadi
                  animate={inView ? { opacity: 1, x: 0 } : {}} // Animatsiya faqat ko'rinsa ishlaydi
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }} // Har bir element uchun kechikish
                >
                  <label className="text-[20px] font-semibold text-gray-900 mb-0">
                    {label}
                  </label>
                  {label === "Xabaringiz" ? (
                    <textarea
                      placeholder={`${label}ni yozing`}
                      className="p-3 border border-gray-300 rounded-lg w-full h-32 bg-[#002F6C] text-white placeholder-white"
                      required
                    ></textarea>
                  ) : (
                    <input
                      type="text"
                      placeholder={`${label}ingiz`}
                      className="p-3 border border-gray-300 rounded-lg w-full bg-[#002F6C] text-white placeholder-white"
                      required
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                type="submit"
                className="bg-[#002F6C] text-white px-6 py-3 rounded-lg hover:bg-[#0951B0] transition"
                initial={{ opacity: 0, x: 100 }} // Tugma o'ngdan chiqadi
                animate={inView ? { opacity: 1, x: 0 } : {}} // Animatsiya faqat ko'rinsa ishlaydi
                transition={{ duration: 0.5, delay: 0.7 }} // Tugma uchun kechikish
              >
                Yuborish
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
