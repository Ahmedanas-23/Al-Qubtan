// import { useState } from "react";
// import { FaInstagram, FaLinkedinIn, FaFacebookF, FaBars, FaTimes } from "react-icons/fa";

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="w-full h-screen">
//           {/* Hero Section */}
//           <div className="relative w-full h-[130vh] lg:h-[130vh] overflow-hidden">
//             {/* Background Image */}
//             <img
//               className="absolute inset-0 w-full h-full object-cover"
//               src="src/assets/ChatGPT Image May 14, 2026, 06_19_38 PM.png"
//               alt="background"
//             />
    
//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-black/80"></div>
    
//             {/* Main Content */}
//             <div className="relative z-10 h-full">
    
//               {/* ─── NAVBAR ─── */}
//               <div className="top-0 left-0 w-full z-50 flex items-center justify-between">
//                 {/* Logo */}
//                 <div>
//                   <img
//                     className="w-30 rotate-90 ml-10"
//                     src="src/assets/WhatsApp_Image_2026-05-14_at_6.11.41_PM-removebg-preview.png"
//                     alt="company logo"
//                   />
//                 </div>
    
//                 {/* Desktop Nav — unchanged */}
//                 <nav className="hidden lg:block">
//                   <ul className="flex text-white mr-20 gap-10 font-medium">
//                     <li className="cursor-pointer hover:text-green-400 transition">Home</li>
//                     <li className="cursor-pointer hover:text-green-400 transition">Services</li>
//                     <li className="cursor-pointer hover:text-green-400 transition">About Us</li>
//                     <li className="cursor-pointer hover:text-green-400 transition">Contact</li>
//                   </ul>
//                 </nav>
    
//                 {/* Hamburger Button — mobile/tablet only */}
//                 <button
//                   className="lg:hidden text-white mr-6 text-2xl z-50 focus:outline-none"
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   aria-label="Toggle menu"
//                 >
//                   {menuOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//               </div>
    
//               {/* Mobile / Tablet Dropdown Menu */}
//               {menuOpen && (
//                 <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black/95 z-40 flex flex-col items-center justify-center gap-10">
//                   {["Home", "Services", "About Us", "Contact"].map((item) => (
//                     <span
//                       key={item}
//                       className="text-white text-3xl font-semibold cursor-pointer hover:text-green-400 transition"
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       {item}
//                     </span>
//                   ))}
    
//                   {/* Social icons inside mobile menu */}
//                   <div className="flex gap-8 mt-6 text-white text-2xl">
//                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition"><FaInstagram /></a>
//                     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition"><FaLinkedinIn /></a>
//                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><FaFacebookF /></a>
//                   </div>
//                 </div>
//               )}
    
//               <hr className="text-white/10" />
    
//               {/* ─── HERO CONTENT ─── */}
    
//               {/* Desktop layout — identical to original */}
//               <div className="hidden lg:flex flex-col mt-25 ml-10 h-full text-white">
//                 <h2 className="text-green-600 text-2xl font-bold leading-tight">
//                   Al-Qubtan Export Import Company
//                 </h2>
//                 <h1 className="text-7xl mt-4 font-bold text-gray-300">
//                   Global Spice Excellence
//                 </h1>
//                 <p className="mt-5 text-3xl">Delivering Premium Spices Worldwide</p>
    
//                 <div className="flex gap-20 mt-20">
//                   <button className="px-8 py-3 text-black bg-green-600 hover:bg-white transition hover:text-black">
//                     Contact Us
//                   </button>
//                   <button className="px-8 py-3 border-2 border-green-600 hover:bg-white transition hover:text-black hover:border-white">
//                     Export Countries
//                   </button>
//                 </div>
    
//                 {/* Desktop social icons — original positioning */}
//                 <div className="gap-7 justify-end items-end mr-10 -mt-85 flex flex-col text-white text-2xl">
//                   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300"><FaInstagram /></a>
//                   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300"><FaLinkedinIn /></a>
//                   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300"><FaFacebookF /></a>
//                 </div>
//               </div>
    
//               {/* Mobile layout */}
//               <div className="flex lg:hidden flex-col items-center justify-center h-full text-white text-center px-6 -mt-16">
//                 <h2 className="text-green-500 text-base font-bold leading-tight tracking-wide uppercase">
//                   Al-Qubtan Export Import Company
//                 </h2>
//                 <h1 className="text-4xl sm:text-5xl mt-4 font-bold text-gray-200 leading-tight">
//                   Global Spice Excellence
//                 </h1>
//                 <p className="mt-4 text-lg sm:text-xl text-gray-300">
//                   Delivering Premium Spices Worldwide
//                 </p>
    
//                 <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-10 w-full sm:w-auto">
//                   <button className="w-full sm:w-auto px-8 py-3 text-black bg-green-600 hover:bg-white transition hover:text-black font-semibold">
//                     Contact Us
//                   </button>
//                   <button className="w-full sm:w-auto px-8 py-3 border-2 border-green-600 text-white hover:bg-white transition hover:text-black hover:border-white font-semibold">
//                     Export Countries
//                   </button>
//                 </div>
//               </div>
    
//             </div>
//           </div>
//         </div>
//   );
// }
import { useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import bgImage from "../assets/ChatGPT Image May 14, 2026, 06_19_38 PM.png";
import logo from "../assets/WhatsApp_Image_2026-05-14_at_6.11.41_PM-removebg-preview.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={bgImage}
          alt="background"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* NAVBAR */}
          <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-10 py-2">
            {/* Logo */}
            <div>
              <img
                className="w-20 sm:w-24 md:w-28 lg:w-30 rotate-90"
                src={logo}
                alt="company logo"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:block">
              <ul className="flex text-white gap-10 font-medium">
                <li style={{cursor : "pointer"}} className="cursor-pointer hover:text-green-400 transition">
                 <a href="#home">Home</a>
                </li>
                <li  style={{cursor : "pointer"}} className="cursor-pointer hover:text-green-400 transition">
                  <a href="#about">About Us</a>
                </li>
                <li  style={{cursor : "pointer"}} className="cursor-pointer hover:text-green-400 transition">
                  <a href="#services">Services</a>
                </li>
                <li  style={{cursor : "pointer"}} className="cursor-pointer hover:text-green-400 transition">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>

            {/* Mobile Button */}
            <button
              className="lg:hidden text-white text-2xl z-50"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-10 px-6">
              {["Home", "Services", "About Us", "Contact"].map((item) => (
                <span
                  key={item}
                  className="text-white text-2xl sm:text-3xl font-semibold cursor-pointer hover:text-green-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </span>
              ))}

              {/* Social Icons */}
              <div className="flex gap-8 mt-6 text-white text-2xl">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          )}

          <hr className="border-white/10" />

          {/* HERO SECTION */}
          <div className="flex-1 flex items-center">
            {/* Desktop Layout */}
            <div className="hidden lg:flex w-full justify-between items-center px-10">
              {/* Left Content */}
              <div className="text-white max-w-4xl">
                <h2 className="text-green-600 text-2xl font-bold leading-tight">
                  Al-Qubtan Export Import Company
                </h2>

                <h1 className="text-5xl xl:text-7xl mt-4 font-bold text-gray-300 leading-tight">
                  Global Spice Excellence
                </h1>

                <p className="mt-5 text-2xl xl:text-3xl">
                  Delivering Premium Spices Worldwide
                </p>

                <div className="flex gap-8 xl:gap-20 mt-16">
                  <button className="px-8 py-3 text-black bg-green-600 hover:bg-white transition hover:text-black">
                    Contact Us
                  </button>

                  <button className="px-8 py-3 border-2 border-green-600 hover:bg-white transition hover:text-black hover:border-white">
                    Export Countries
                  </button>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex flex-col gap-7 text-white text-2xl">
                <a
                  href="https://www.instagram.com/al.qubtan_exporting?igsh=dHRxeGNtY2h4M3lw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition duration-300"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition duration-300"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex lg:hidden flex-col items-center justify-center w-full text-white text-center px-5 sm:px-8 py-10">
              <h2 className="text-green-500 text-sm sm:text-base font-bold tracking-wide uppercase">
                Al-Qubtan Export Import Company
              </h2>

              <h1 className="text-4xl sm:text-5xl mt-4 font-bold text-gray-200 leading-tight">
                Global Spice Excellence
              </h1>

              <p className="mt-4 text-base sm:text-xl text-gray-300">
                Delivering Premium Spices Worldwide
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 w-full sm:w-auto">
                <a href="#contacts" className="w-full sm:w-auto px-8 py-3 text-black bg-green-600 hover:bg-white transition hover:text-black font-semibold">
                  Contact Us
                </a>

                <button className="w-full sm:w-auto px-8 py-3 border-2 border-green-600 text-white hover:bg-white transition hover:text-black hover:border-white font-semibold">
                  Export Countries
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}