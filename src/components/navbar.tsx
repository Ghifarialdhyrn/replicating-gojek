"use client";

import logo from "@/assets/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#101820] text-white z-10 shadow-md">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#">
          <img src={logo.src} alt="Logo" className="w-24 h-10 sm:h-12" />
        </a>
        <button
          className="lg:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul
          className={`absolute lg:static bg-[#101820] lg:bg-transparent top-[70px] left-0 w-full lg:w-auto lg:flex lg:items-center lg:gap-8 px-5 py-4 lg:py-0 transition-all ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {[
            "Beranda",
            "Gabung Jadi Mitra",
            "Go Corp",
            "Karir",
            "Perusahaan",
            "Produk",
            "Blog",
            "Bantuan",
            "ID",
          ].map((item, index) => (
            <li key={index} className="py-2 lg:py-0">
              <a href="#" className="hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
