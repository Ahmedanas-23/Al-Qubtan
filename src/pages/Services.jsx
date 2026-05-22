// // import WithUs from "./Withus";

// export default function Services() {
//   return (
//     <div className="h-screen w-full translate-y-190 relative
//                     lg:h-screen lg:translate-y-150
//                     ">

//       {/* ── Section Header ── */}
//       <h3 className="text-gray-800 lg:ml-10 font-bold
//                      lg:text-5xl text-3xl flex text-center justify-center lg:text-start lg:justify-start mt-10 lg:mt-0">
//         Our Services
//       </h3>
//       <h4 className="text-gray-800 mt-3
//                      lg:text-2xl lg:ml-10 text-xl flex text-center justify-center lg:text-start lg:justify-start flex-col">
//         Global Export &amp; Import Solutions
//         <p className="lg:w-[80%] ml-10 lg:ml-0 w-[85%] lg:text-[18px] text-[15px] mt-3">
//           All products are carefully sourced, processed, and packaged to
//           maintain freshness and international quality standards.
//         </p>
//       </h4>

//       {/* ── White Card Body ── */}
//       <div className="bg-white lg:mt-30 mt-10">
//         <h4 className="font-semibold flex py-10 justify-center ml-10 text-center px-4">
//           We specialize in exporting high-quality natural spices including
//         </h4>

//         {/* ── Product Grid ── */}
//         <div className="flex flex-wrap justify-center lg:gap-15 gap-8 py-5 px-4">
//           {[
//             { src: "src/assets/istockphoto-598149032-612x612.jpg", label: "Cardamom" },
//             { src: "src/assets/istockphoto-183803376-612x612.jpg", label: "Dry Fruits" },
//             { src: "src/assets/images (8).jpg", label: "Cinnamon" },
//             { src: "src/assets/black-milled-pepper-corns-as-background-high-quality-photo_114579-40514.avif", label: "Black Pepper" },
//             { src: "src/assets/images (9).jpg", label: "Turmeric" },
//           ].map(({ src, label }) => (
//             <div key={label} className="flex flex-col items-center">
//               <img
//                 className="lg:w-44 lg:h-44 w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full shadow-lg"
//                 src={src}
//                 alt={label}
//               />
//               <h2 className="mt-4 lg:text-xl text-base font-semibold text-black">{label}</h2>
//             </div>
//           ))}
//         </div>

//         {/* ── Feature Cards Section ── */}
//         <div className="w-full lg:mt-25 mt-12
//                         lg:h-screen h-auto">

//           {/* Card 1 — image left, card right */}
//           <div className="relative flex items-center w-full py-20 bg-gray-200
//                           lg:justify-start justify-center">

//             {/* Desktop: wide image */}
//             <div className="lg:block hidden w-[65%] ml-10">
//               <img
//                 className="w-full h-112.5 object-cover"
//                 src="src/assets/Gemini_Generated_Image_papb72papb72papb.png"
//                 alt="Wholesale Supply"
//               />
//             </div>

//             {/* Mobile: full-width image */}
//             <div className="lg:hidden h-100 w-full px-5">
//               <img
//                 className="w-full h-80 sm:h-72 object-cover"
//                 src="src/assets/Gemini_Generated_Image_papb72papb72papb.png"
//                 alt="Wholesale Supply"
//               />
//             </div>

//             {/* Desktop card — absolutely positioned */}
//             <div className="lg:flex hidden absolute right-40 top-1/2 -translate-y-1/2 w-[25%] h-100 bg-white px-10 py-10 shadow-2xl flex-col items-start">
//               <h2 className="text-[#0B2B26] text-[22px] font-bold leading-tight">Wholesale Supply</h2>
//               <div className="w-full mt-5 mb-5 border-[0.5px]"></div>
//               <p className="text-gray-700 text-[15px] leading-8">
//                 We supply premium products in bulk for wholesalers, retailers,
//                 and global businesses with reliable quality and competitive pricing.
//               </p>
//               <button className="mt-14 bg-green-500 hover:bg-black hover:text-white transition px-8 py-2 text-black">
//                 LEARN MORE
//               </button>
//             </div>

//             {/* Mobile card — stacked below image */}
//             <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] bg-white px-6 py-6 shadow-2xl flex flex-col items-start">
//               <h2 className="text-[#0B2B26] text-[20px] font-bold leading-tight">Wholesale Supply</h2>
//               <div className="w-full mt-4 mb-4 border-[0.5px]"></div>
//               <p className="text-gray-700 text-[14px] leading-7">
//                 We supply premium products in bulk for wholesalers, retailers,
//                 and global businesses with reliable quality and competitive pricing.
//               </p>
//               <button className="mt-6 bg-green-500 hover:bg-black hover:text-white transition px-8 py-2 text-black">
//                 LEARN MORE
//               </button>
//             </div>
//           </div>

//           {/* Card 2 — image right, card left */}
//           <div className="relative flex items-center w-full py-20 bg-gray-200
//                           lg:justify-end justify-center lg:mt-0 sm:mt-52">

//             {/* Desktop: wide image */}
//             <div className="lg:block hidden w-[65%] mr-10">
//               <img
//                 className="w-full h-112.5 object-cover"
//                 src="src/assets/ChatGPT Image May 13, 2026, 08_57_14 PM.png"
//                 alt="Quality Assurance"
//               />
//             </div>

//             {/* Mobile: full-width image */}
//             <div className="lg:hidden w-full px-5">
//               <img
//                 className="w-full h-80 sm:h-72 object-cover"
//                 src="src/assets/ChatGPT Image May 13, 2026, 08_57_14 PM.png"
//                 alt="Quality Assurance"
//               />
//             </div>

//             {/* Desktop card — absolutely positioned */}
//             <div className="lg:flex hidden absolute left-40 top-1/2 -translate-y-1/2 w-[25%] h-100 bg-white px-10 py-10 shadow-2xl flex-col items-start">
//               <h2 className="text-[#0B2B26] text-[22px] font-bold leading-tight">Quality Assurance</h2>
//               <div className="w-full mt-5 mb-5 border-[0.5px]"></div>
//               <p className="text-gray-700 text-[15px] leading-8">
//                 Every product undergoes strict quality checks before export to
//                 ensure purity, freshness, hygiene, and customer satisfaction.
//               </p>
//               <button className="mt-14 bg-green-500 hover:bg-black hover:text-white transition px-8 py-2 text-black">
//                 LEARN MORE
//               </button>
//             </div>

//             {/* Mobile card — stacked below image */}
//             <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] bg-white px-6 py-6 shadow-2xl flex flex-col items-start">
//               <h2 className="text-[#0B2B26] text-[20px] font-bold leading-tight">Quality Assurance</h2>
//               <div className="w-full mt-4 mb-4 border-[0.5px]"></div>
//               <p className="text-gray-700 text-[14px] leading-7">
//                 Every product undergoes strict quality checks before export to
//                 ensure purity, freshness, hygiene, and customer satisfaction.
//               </p>
//               <button className="mt-6 bg-green-500 hover:bg-black hover:text-white transition px-8 py-2 text-black">
//                 LEARN MORE
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

import cardamom from "../assets/istockphoto-598149032-612x612.jpg";
import dryFruits from "../assets/istockphoto-183803376-612x612.jpg";
import cinnamon from "../assets/images (8).jpg";
import blackPepper from "../assets/black-milled-pepper-corns-as-background-high-quality-photo_114579-40514.avif";
import turmeric from "../assets/images (9).jpg";

import card1Img from "../assets/Gemini_Generated_Image_papb72papb72papb.png";
import card2Img from "../assets/ChatGPT Image May 13, 2026, 08_57_14 PM.png";


export default function Services() {
  return (
    <div className="w-full relative overflow-hidden py-16 lg:py-0">
      {/* ── Section Header ── */}
      <div id="services" className="px-5 sm:px-8 lg:px-10">
        <h3
          className="
            text-gray-800
            font-bold
            text-3xl sm:text-4xl lg:text-5xl
            text-center lg:text-start
          "
        >
          Our Services
        </h3>

        <div
          className="
            text-gray-800
            mt-4
            text-center lg:text-start
          "
        >
          <h4 className="text-xl sm:text-2xl">
            Global Export &amp; Import Solutions
          </h4>

          <p
            className="
              lg:w-[80%]
              w-full
              text-[15px] lg:text-[18px]
              mt-3
              leading-7
            "
          >
            All products are carefully sourced, processed, and packaged to
            maintain freshness and international quality standards.
          </p>
        </div>
      </div>

      {/* ── White Card Body ── */}
      <div className="bg-white mt-12 lg:mt-20">
        <h4
          className="
            font-semibold
            flex
            py-10
            justify-center
            text-center
            px-4
            text-lg sm:text-xl
          "
        >
          We specialize in exporting high-quality natural spices including
        </h4>

        {/* ── Product Grid ── */}
        <div
          className="
            flex flex-wrap
            justify-center
            gap-8 lg:gap-14
            py-5
            px-4
          "
        >
          {[
            {
              src: cardamom,
              label: "Cardamom",
            },
            {
              src: dryFruits,
              label: "Dry Fruits",
            },
            {
              src: cinnamon,
              label: "Cinnamon",
            },
            {
              src: blackPepper,
              label: "Black Pepper",
            },
            {
              src: turmeric,
              label: "Turmeric",
            },
          ].map(({ src, label }) => (
            <div key={label} className="flex flex-col items-center">
              <img
                className="
                  w-28 h-28
                  sm:w-36 sm:h-36
                  lg:w-44 lg:h-44
                  object-cover
                  rounded-full
                  shadow-lg
                "
                src={src}
                alt={label}
              />

              <h2 className="mt-4 text-base lg:text-xl font-semibold text-black">
                {label}
              </h2>
            </div>
          ))}
        </div>

        {/* ── Feature Cards Section ── */}
        <div className="w-full mt-14 lg:mt-24 space-y-16 lg:space-y-24">
          {/* ───────────────── Card 1 ───────────────── */}
          <div
            className="
              w-full
              bg-gray-200
              flex
              flex-col lg:flex-row
              items-center
              justify-center
              gap-10
              px-5 sm:px-8 lg:px-10
              py-10 lg:py-20
            "
          >
            {/* Image */}
            <div className="w-full lg:w-[65%]">
              <img
                className="
                  w-full
                  h-72 sm:h-80 lg:h-112.5
                  object-cover
                "
                src={card1Img}
                alt="Wholesale Supply"
              />
            </div>

            {/* Card */}
            <div
              className="
                w-full
                lg:w-[28%]
                bg-white
                px-6 sm:px-8
                py-8
                shadow-2xl
                flex
                flex-col
                items-start
              "
            >
              <h2 className="text-[#0B2B26] text-[22px] font-bold leading-tight">
                Wholesale Supply
              </h2>

              <div className="w-full mt-5 mb-5 border-[0.5px]"></div>

              <p className="text-gray-700 text-[14px] lg:text-[15px] leading-7 lg:leading-8">
                We supply premium products in bulk for wholesalers, retailers,
                and global businesses with reliable quality and competitive
                pricing.
              </p>

              <button className="mt-8 lg:mt-14 bg-green-500 hover:bg-black hover:text-white transition px-8 py-2 text-black">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* ───────────────── Card 2 ───────────────── */}
          <div
            className="
              w-full
              bg-gray-200
              flex
              flex-col lg:flex-row-reverse
              items-center
              justify-center
              gap-10
              px-5 sm:px-8 lg:px-10
              py-10 lg:py-20
            "
          >
            {/* Image */}
            <div className="w-full lg:w-[65%]">
              <img
                className="
                  w-full
                  h-72 sm:h-80 lg:h-112.5
                  object-cover
                "
                src={card2Img}
                alt="Quality Assurance"
              />
            </div>

            {/* Card */}
            <div
              className="
                w-full
                lg:w-[28%]
                bg-white
                px-6 sm:px-8
                py-8
                shadow-2xl
                flex
                flex-col
                items-start
              "
            >
              <h2 className="text-[#0B2B26] text-[22px] font-bold leading-tight">
                Quality Assurance
              </h2>

              <div className="w-full mt-5 mb-5 border-[0.5px]"></div>

              <p className="text-gray-700 text-[14px] lg:text-[15px] leading-7 lg:leading-8">
                Every product undergoes strict quality checks before export to
                ensure purity, freshness, hygiene, and customer satisfaction.
              </p>

              <button className="mt-8 lg:mt-14 bg-green-500 hover:bg-black hover:text-white transition px-8 py-2 text-black">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
