import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("HomePage")

  return (
    <div className="relative h-[670px] overflow-hidden" id="home">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png" // Add this image to your public folder
          alt="Balansor field"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-11 max-w-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {t('about')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#about"
              className="bg-[#002F6C] hover:bg-[#0951B0] text-white font-medium py-3 px-6 rounded-md transition-colors text-center"
            >
              {t('link1')}
            </Link>
            <Link
              href="#contact"
              className="bg-white hover:bg-gray-100 text-[#000000] font-medium py-3 px-6 rounded-md transition-colors text-center"
            >
              {t('link2')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
