import {
  ChevronDownIcon,
  ChevronUpIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Lakukan pencarian menggunakan searchTerm
    console.log("Search term:", searchTerm);
    // Tambahkan logika pencarian sesuai kebutuhan
  };

  return (
    <nav className="bg-green-200 shadow-md relative flex flex-col">
      <div className="container mx-auto flex items-center justify-between py-2">
        {/* Ship To Button with Cart Icon and Arrow */}
        <div className="relative flex items-center">
          <button
            onClick={toggleDropdown}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            <span>Ship To</span>
            {isOpen ? (
              <ChevronUpIcon className="w-5 h-5 ml-2" /> // Panah ke atas saat dropdown terbuka
            ) : (
              <ChevronDownIcon className="w-5 h-5 ml-2" /> // Panah ke bawah saat dropdown tertutup
            )}
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
              <ul className="py-1">
                <li>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    United States
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    United Kingdom
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Canada
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Australia
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Logo dan nama */}
        <a href="/" className="flex items-center relative z-10">
          <img
            src={"/static/images/Logo.png"}
            alt="logo"
            className="w-32 h-30" // Ukuran logo yang lebih besar
          />
          <h1 className="text-3xl font-bold text-green-600 ml-2">
            BelanjaMudah
          </h1>
        </a>

        {/* Menu Navbar */}
        <div className="hidden md:flex space-x-4 gap-10 align-middle">
          <div className="flex gap-10">
            <a
              href="/"
              className="text-gray-700 font-medium hover:text-green-500 hover:underline"
            >
              Beranda
            </a>
            <a
              href="/"
              className="text-gray-700 font-medium hover:text-green-500 hover:underline"
            >
              Resep
            </a>
            <a
              href="/"
              className="text-gray-700 font-medium hover:text-green-500 hover:underline"
            >
              Pesanan
            </a>
            <a
              href="/"
              className="text-gray-700 font-medium hover:text-green-500 hover:underline"
            >
              Beli lagi
            </a>
          </div>
          <div className="relative">
            <ShoppingCartIcon className="w-8 h-8 text-green-500" />
            {/* Badge untuk angka */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
        </div>
      </div>
      {/* Kotak Pencarian */}
      <form
        onSubmit={handleSearch}
        className=" mx-auto flex items-center w-full max-w-md align-middle mb-8"
      >
        <input
          type="text"
          className="w-full py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <MagnifyingGlassIcon className="w-5 h-5" />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
