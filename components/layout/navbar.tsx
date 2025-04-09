"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobil menyuni boshqarish
  const [isSticky, setIsSticky] = useState(false); // Skrollni kuzatish uchun holat

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      {/* Top header with contact info and social links */}
      <div className="bg-[#002F6C] py-2 text-white text-sm hidden sm:block">
        <div className="container mx-auto px-10 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+998 99 185 3703</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>balansoruz@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Parkent ko&apos;chasi, 76</span>
            </div>
          </div>

          <div className="flex gap-5 mt-20 sm:mt-0">
            <Link
              href="https://facebook.com"
              className="text-[#1877F2] hover:text-[#145dbf] transition-colors"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="https://www.instagram.com/balansor_uz"
              className="text-[#E4405F] hover:text-[#c13545] transition-colors"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://t.me/balansoruz"
              className="text-[#0088CC] hover:text-[#006699] transition-colors"
            >
              <Send size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`w-full transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 z-50 bg-[#F5F5F5] shadow-md"
            : "relative"
        }`}
      >
        {/* Main navbar with logo and navigation */}
        <div className="bg-[#F5F5F5] shadow-sm">
          <div className="container mx-auto px-7">
            <div className="flex justify-between items-center h-16">
              <Link
                href="/"
                className="flex items-center gap-x-2 font-bold text-xl text-primary"
              >
                <Image
                  src={"/logo.png"}
                  alt={"logo"}
                  width={200}
                  height={200}
                />
              </Link>
              <div className="hidden md:flex flex-col sm:flex-row gap-4 sm:gap-10">
                <Link
                  href="/#home"
                  className="font-medium text-[#000000] hover:text-primary transition-colors"
                >
                  Bosh sahifa
                </Link>
                <Link
                  href="/#about"
                  className="font-medium text-[#000000] hover:text-primary transition-colors"
                >
                  Biz haqimizda
                </Link>
                <Link
                  href="/service"
                  className="font-medium text-[#000000] hover:text-primary transition-colors"
                >
                  Xizmatlar
                </Link>
                <Link
                  href="/team"
                  className="font-medium text-[#000000] hover:text-primary transition-colors"
                >
                  Jamoa
                </Link>
                <Link
                  href="/#contact"
                  className="font-medium text-[#000000] hover:text-primary transition-colors"
                >
                  Bog&apos;lanish
                </Link>
              </div>
              <div className="flex items-center gap-4">
                {/* Language Switcher */}
                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#002F6C] text-[#FFFFF] rounded-md hover:bg-[#0951B0]">
                    <span>UZ</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md text-[#000000] hover:bg-gray-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#002F6C"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#F5F5F5] shadow-sm">
            <div className="container mx-auto px-7 py-4">
              <Link
                href="#home"
                className="block py-2 font-medium text-[#000000] hover:text-primary transition-colors"
              >
                Bosh sahifa
              </Link>
              <Link
                href="#about"
                className="block py-2 font-medium text-[#000000] hover:text-primary transition-colors"
              >
                Biz haqimizda
              </Link>
              <Link
                href="/service"
                className="block py-2 font-medium text-[#000000] hover:text-primary transition-colors"
              >
                Xizmatlar
              </Link>
              <Link
                href="/team"
                className="block py-2 font-medium text-[#000000] hover:text-primary transition-colors"
              >
                Jamoalar
              </Link>
              <Link
                href="#contact"
                className="block py-2 font-medium text-[#000000] hover:text-primary transition-colors"
              >
                Bog&apos;lanish
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
