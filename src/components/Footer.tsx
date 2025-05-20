import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] border-t border-gray-200 py-12 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        {/* Left: Logo/Name and Address */}
        <div className="text-center md:text-left">
          <div className="text-2xl font-light mb-2 tracking-wide text-gray-800">
            Hotel Radho
          </div>
          <div className="text-gray-500 text-sm mb-2">
            Via Immaginaria 1, 22010 Lago di Como, Italy
          </div>
          <div className="text-gray-500 text-sm">
            Tel:{" "}
            <a href="tel:+39000000000" className="hover:underline">
              +39 000 000 0000
            </a>{" "}
            | Email:{" "}
            <a href="mailto:info@hotelradho.com" className="hover:underline">
              info@hotelradho.com
            </a>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex justify-center gap-6 text-gray-500 text-xl">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-gray-800 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-gray-800 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Tripadvisor"
            className="hover:text-gray-800 transition-colors"
          >
            <FaTripadvisor />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Hotel Radho. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
