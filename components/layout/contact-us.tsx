"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Framer Motion import
import { useInView } from "react-intersection-observer"; // Intersection Observer import

const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animatsiya faqat bir marta ishlaydi
    threshold: 0.15, // Bo'limning 20% qismi ko'rinsa animatsiya boshlanadi
  });

  const [phoneError, setPhoneError] = useState(""); // Telefon raqam uchun xato holati
  const [phone, setPhone] = useState(""); // Telefon raqamni kuzatish uchun holat
  const [name, setName] = useState(""); // Ism uchun holat
  const [message, setMessage] = useState(""); // Xabar uchun holat
  const [successMessage, setSuccessMessage] = useState(false); // Muvaffaqiyat xabari uchun holat

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Formani yuborishni to'xtatish

    // Telefon raqamni validatsiya qilish
    const phoneRegex = /^\+998\d{2}\d{3}\d{2}\d{2}$/; // Telefon raqam formati
    if (!phoneRegex.test(phone)) {
      setPhoneError("Telefon maydoni to'liq emas yoki nomer formati xato");
      return;
    }

    // Agar hammasi to'g'ri bo'lsa, xatoni tozalash va muvaffaqiyat xabarini ko'rsatish
    setPhoneError("");
    setSuccessMessage(true);

    // Input maydonlarini tozalash
    setPhone("");
    setName("");
    setMessage("");

    // Xabarni 5 soniyadan keyin yashirish
    setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
            {/* Title, Description, and Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 px-4 md:px-11">
            <div>
              <motion.div
              initial={{ opacity: 0, x: -100 }} // Boshlang'ich holat: chapdan chiqadi
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animatsiya holati: markazga joylashadi
              transition={{ duration: 0.5, delay: 0.5 }} // Animatsiya davomiyligi va kechikish
              >
              <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
                Kontaktlarimiz
              </h2>
              </motion.div>
              <motion.p
              initial={{ opacity: 0, x: -100 }} // Boshlang'ich holat: chapdan chiqadi
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animatsiya holati: markazga joylashadi
              transition={{ duration: 0.7, delay: 0.5 }} // Animatsiya davomiyligi va kechikish
              className="text-gray-700 mb-10 text-sm md:text-base"
              >
              Bizni ishonchli ma’lumotlarimiz, agar bizda savollar bo’lsa
              yuborishingiz mumkin.
              </motion.p>
              <motion.form
              className="flex flex-col gap-4 md:gap-10"
              initial={{ opacity: 0, x: -100 }} // Boshlang'ich holat: chapdan chiqadi
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animatsiya holati: markazga joylashadi
              transition={{ duration: 0.9, delay: 0.9 }} // Animatsiya davomiyligi va kechikish
              >
              <input
                type="text"
                placeholder="+ 998 99 185 37 03"
                className="p-3 border border-gray-300 rounded-lg w-full md:w-[450px] bg-[#002F6C] text-white placeholder-white"
                required
              />
              <input
                type="email"
                placeholder="balansoruz@gmail.com"
                className="p-3 border border-gray-300 rounded-lg w-full md:w-[450px] bg-[#002F6C] text-white placeholder-white"
                required
              />
              <input
                type="text"
                placeholder="Parkent ko’chasi, 76"
                className="p-3 border border-gray-300 rounded-lg w-full md:w-[450px] bg-[#002F6C] text-white placeholder-white"
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
            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="text-[20px] font-semibold text-gray-900 mb-0">
                  Ism
                </label>
                <input
                  type="text"
                  placeholder="Ismingiz"
                  className="p-3 border border-gray-300 rounded-lg w-full bg-[#002F6C] text-white placeholder-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Ismni kuzatish
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label className="text-[20px] font-semibold text-gray-900 mb-0">
                  Telefon raqam
                </label>
                <input
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  className={`p-3 border ${
                    phoneError ? "border-red-500" : "border-gray-300"
                  } rounded-lg w-full bg-[#002F6C] text-white placeholder-white`}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} // Telefon raqamni kuzatish
                  required
                />
                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className="text-[20px] font-semibold text-gray-900 mb-0">
                  Xabaringiz
                </label>
                <textarea
                  placeholder="Xabaringizni yozing *(ixtiyoriy)"
                  className="p-3 border border-gray-300 rounded-lg w-full h-32 bg-[#002F6C] text-white placeholder-white"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} // Xabarni kuzatish
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="bg-[#002F6C] text-white px-6 py-3 rounded-lg hover:bg-[#0951B0] transition"
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Yuborish
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Muvaffaqiyat xabari */}
        {successMessage && (
          <motion.div
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Ma&apos;lumotlaringiz muvaffaqiyatli yuborildi! Mas&apos;ullarimiz
              siz bilan tez orada bog&apos;lanishadi 😊
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
