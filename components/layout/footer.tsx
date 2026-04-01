import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Send } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-[#002F6C] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div className="flex items-center space-x-4 pl-10">
            <Image src="/footer.png" alt="Buxgalter" width={200} height={200} />
            <h3 className="text-2xl font-bold text-[#D65A00]">Hisobchi</h3>
          </div>

            {/* Navigation links */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-4">{t("title")}</h3>
              <ul className="grid grid-cols-2 gap-2 justify-center sm:justify-start">
              <li>
                <Link
                href="/#home"
                className="hover:text-blue-200 transition-colors"
                >
                {t("link1")}
                </Link>
              </li>
              <li>
                <Link
                href="/#about"
                className="hover:text-blue-200 transition-colors"
                >
                {t("link2")}
                </Link>
              </li>
              <li>
                <Link
                href="/service"
                className="hover:text-blue-200 transition-colors"
                >
                {t("link3")}
                </Link>
              </li>
              <li>
                <Link
                href="/team"
                className="hover:text-blue-200 transition-colors"
                >
                {t("link4")}
                </Link>
              </li>
              <li>
                <Link
                href="/#contact"
                className="hover:text-blue-200 transition-colors"
                >
                {t("link5")}
                </Link>
              </li>
              </ul>

              {/* Social links */}
                <div className="flex gap-5 mt-4 justify-center sm:justify-start sm:hidden">
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

{/* Map */}
<div>
  <div className="w-full sm:w-fit bg-blue-700 rounded-md overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1059.969529976963!2d69.35536310383883!3d41.28609091225325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef58b0b3c23a7%3A0x145559d09b7489e0!2zNzlQNCtISjksINGD0LvQuNGG0LAg0JDQstC40LDRgdC-0LfQu9Cw0YAgNzgsIDEwMDIwNCwg0KLQsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2sus!4v1755337628261!5m2!1sru!2sus"
      className="w-full h-[200px] sm:w-[430px] sm:h-[170px]"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
