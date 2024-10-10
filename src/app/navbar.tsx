"use client"; 

import Link from "next/link";
import { useState } from "react";
import Sidebar from "./sidebar";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full py-4 bg-white fixed top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
          <h1 className="text-4xl font-bold">Hashtag Caffè</h1>
          <ul className="hidden md:flex space-x-8 font-medium">
            {["Home", "About", "Menu", "Reservation", "Contact"].map((item) => (
              <li key={item}>
                 <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="relative group">
      <span className="hover:text-gray-700 transition duration-200">{item}</span>
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
    </Link>
              </li>
            ))}
          </ul>
          <button 
            className="md:hidden text-gray-700" 
            onClick={toggleMenu}
          >
            <RxHamburgerMenu />

          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
}
