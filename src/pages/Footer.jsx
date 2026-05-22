// import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";


// export default function Footer() {
//   return (
//     <footer className="w-full bg-green-700 text-white px-16 py-14 flex flex-col justify-between
//                            lg:absolute lg:translate-y-805 translate-y-775 lg:h-[150vh] lg:px-16 lg:py-14
//                            px-6 py-10 h-auto">
    
//           {/* ── Top Section ── */}
//           <div className="flex justify-between items-start
//                           lg:flex-row flex-col gap-8 lg:gap-0">
    
//             {/* Left Content */}
//             <div className="lg:w-[40%] w-full">
//               <h1 className="font-bold leading-tight
//                              lg:text-5xl text-3xl">
//                 "Delivering Nature's Finest Spices To The World."
//               </h1>
//               <p className="mt-8 text-gray-300 leading-8
//                             lg:text-lg text-base">
//                 Al-Qubtan is committed to exporting premium quality spices and
//                 agricultural products with trust, reliability, and international
//                 standards.
//               </p>
//             </div>
    
//             {/* Logo */}
//             <div className="flex items-center lg:justify-center justify-start">
//               <img
//                 className="lg:w-52 w-36 object-contain"
//                 src="src/assets/WhatsApp_Image_2026-05-13_at_9.16.54_PM-removebg-preview.png"
//                 alt="Al-Qubtan Logo"
//               />
//             </div>
//           </div>
    
//           {/* ── Middle Section ── */}
//           <div className="mt-10
//                           lg:grid lg:grid-cols-4 lg:gap-10
//                           grid grid-cols-2 gap-8 sm:grid-cols-2">
    
//             {/* Company */}
//             <div>
//               <h2 className="font-semibold mb-6 lg:text-2xl text-lg">Company</h2>
//               <ul className="space-y-4 text-gray-300 lg:text-base text-sm">
//                 <li className="hover:text-white cursor-pointer transition">Home</li>
//                 <li className="hover:text-white cursor-pointer transition">About Us</li>
//                 <li className="hover:text-white cursor-pointer transition">Services</li>
//                 <li className="hover:text-white cursor-pointer transition">Contact</li>
//               </ul>
//             </div>
    
//             {/* Products */}
//             <div>
//               <h2 className="font-semibold mb-6 lg:text-2xl text-lg">Products</h2>
//               <ul className="space-y-4 text-gray-300 lg:text-base text-sm">
//                 <li>Cardamom</li>
//                 <li>Black Pepper</li>
//                 <li>Cloves</li>
//                 <li>Cashew</li>
//               </ul>
//             </div>
    
//             {/* Services */}
//             <div>
//               <h2 className="font-semibold mb-6 lg:text-2xl text-lg">Services</h2>
//               <ul className="space-y-4 text-gray-300 lg:text-base text-sm">
//                 <li>Global Export</li>
//                 <li>Wholesale Supply</li>
//                 <li>Logistics</li>
//                 <li>Packaging</li>
//               </ul>
//             </div>
    
//             {/* Contact */}
//             <div>
//               <h2 className="font-semibold mb-6 lg:text-2xl text-lg">Contact</h2>
//               <ul className="space-y-4 text-gray-300 lg:text-base text-sm">
//                 <li>Banglore, Kasaragod, Kannur</li>
//                 <li className="lg:text-sm text-xs break-all">alqubtanexportingcompany@gmail.com</li>
//                 <li>+91 9207097813, 7510434657</li>
//               </ul>
    
//               {/* Social Icons */}
//               <div className="gap-6 lg:gap-10 mt-6 flex text-white text-2xl">
//                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
//                   className="hover:text-pink-500 transition duration-300">
//                   <FaInstagram />
//                 </a>
//                 <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
//                   className="hover:text-blue-500 transition duration-300">
//                   <FaLinkedinIn />
//                 </a>
//                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
//                   className="hover:text-blue-400 transition duration-300">
//                   <FaFacebookF />
//                 </a>
//               </div>
//             </div>
//           </div>
    
//           {/* ── Bottom ── */}
//           <div className="border-t border-gray-700 pt-6 flex items-center justify-between text-gray-400
//                           lg:flex-row flex-col gap-2 text-center lg:text-left mt-10 lg:mt-0">
//             <p className="lg:text-base text-sm">© 2026 Al-Qubtan. All Rights Reserved.</p>
//             <p className="lg:text-base text-sm">Premium Global Import &amp; Export Company</p>
//           </div>
//         </footer>
//   );
// }
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import logo from "../assets/WhatsApp_Image_2026-05-13_at_9.16.54_PM-removebg-preview.png";

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-green-700
        text-white
        px-5 sm:px-8 lg:px-16
        py-12 lg:py-14
        overflow-hidden
      "
    >
      {/* ── Top Section ── */}
      <div
        className="
          flex
          flex-col lg:flex-row
          justify-between
          items-start lg:items-center
          gap-10 lg:gap-0
        "
      >
        {/* Left Content */}
        <div className="w-full lg:w-[40%]">
          <h1
            className="
              font-bold
              leading-tight
              text-3xl sm:text-4xl lg:text-5xl
            "
          >
            "Delivering Nature's Finest Spices To The World."
          </h1>

          <p
            className="
              mt-6 lg:mt-8
              text-gray-300
              leading-7 lg:leading-8
              text-sm sm:text-base lg:text-lg
            "
          >
            Al-Qubtan is committed to exporting premium quality spices and
            agricultural products with trust, reliability, and international
            standards.
          </p>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-start lg:justify-center w-full lg:w-auto">
          <img
            className="
              w-32 sm:w-40 lg:w-52
              object-contain
            "
            src={logo}
            alt="Al-Qubtan Logo"
          />
        </div>
      </div>

      {/* ── Middle Section ── */}
      <div
        className="
          mt-14
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
        "
      >
        {/* Company */}
        <div>
          <h2 className="font-semibold mb-6 text-lg lg:text-2xl">
            Company
          </h2>

          <ul className="space-y-4 text-gray-300 text-sm lg:text-base">
            <li className="hover:text-white cursor-pointer transition">
              <a href="#home">Home</a>
            </li>

            <li className="hover:text-white cursor-pointer transition">
              <a href="#about">About Us</a>
            </li>

            <li className="hover:text-white cursor-pointer transition">
              <a href="#services">Services</a>
            </li>

            <li className="hover:text-white cursor-pointer transition">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h2 className="font-semibold mb-6 text-lg lg:text-2xl">
            Products
          </h2>

          <ul className="space-y-4 text-gray-300 text-sm lg:text-base">
            <li>Cardamom</li>
            <li>Black Pepper</li>
            <li>Cloves</li>
            <li>Cashew</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-semibold mb-6 text-lg lg:text-2xl">
            Services
          </h2>

          <ul className="space-y-4 text-gray-300 text-sm lg:text-base">
            <li>Global Export</li>
            <li>Wholesale Supply</li>
            <li>Logistics</li>
            <li>Packaging</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold mb-6 text-lg lg:text-2xl">
            Contact
          </h2>

          <ul className="space-y-4 text-gray-300 text-sm lg:text-base">
            <li>Bangalore, Kasaragod, Kannur</li>

            <li className="break-all">
              alqubtanexportingcompany@gmail.com
            </li>

            <li>+91 9207097813, 7510434657</li>
          </ul>

          {/* Social Icons */}
          <div className="gap-6 lg:gap-8 mt-6 flex text-white text-2xl">
            <a
              href="https://www.instagram.com/al.qubtan_exporting?igsh=dHRxeGNtY2h4M3lw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom ── */}
      <div
        className="
          border-t
          border-gray-600
          pt-6
          mt-14
          flex
          flex-col lg:flex-row
          items-center
          justify-between
          gap-3
          text-center lg:text-left
          text-gray-300
        "
      >
        <p className="text-sm lg:text-base">
          © 2026 Al-Qubtan. All Rights Reserved.
        </p>

        <p className="text-sm lg:text-base">
          Premium Global Import &amp; Export Company
        </p>
      </div>
    </footer>
  );
}