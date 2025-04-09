import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#002F6C] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div className="flex items-center space-x-4 pl-10">
            <Image src="/footer.png" alt="Buxgalter" width={200} height={200} />
            <h3 className="text-2xl font-bold text-[#D65A00]">Balansor</h3>
          </div>

            {/* Navigation links */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-4">Foydali havolalar</h3>
              <ul className="grid grid-cols-2 gap-2 justify-center sm:justify-start">
              <li>
                <Link
                href="/#home"
                className="hover:text-blue-200 transition-colors"
                >
                Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                href="/#about"
                className="hover:text-blue-200 transition-colors"
                >
                Biz haqimizda
                </Link>
              </li>
              <li>
                <Link
                href="/service"
                className="hover:text-blue-200 transition-colors"
                >
                Xizmatlar
                </Link>
              </li>
              <li>
                <Link
                href="/team"
                className="hover:text-blue-200 transition-colors"
                >
                Jamoa
                </Link>
              </li>
              <li>
                <Link
                href="/#contact"
                className="hover:text-blue-200 transition-colors"
                >
                Bog&apos;lanish
                </Link>
              </li>
              </ul>

              {/* Social links */}
              <div className="flex gap-5 mt-4 justify-center sm:justify-start">
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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.735410961824!2d69.32483161186941!3d41.314619271189585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef50242899e11%3A0xcd10a843b03e2033!2z0YPQu9C40YbQsCDQn9Cw0YDQutC10L3RgtGB0LrQsNGPIDc2LCAxMDAxMjQsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1743153690440!5m2!1sru!2s"
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
