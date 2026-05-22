// export default function WithUs() {
//   return (
//     <div className="w-full h-170
//                     lg:absolute lg:translate-y-490
//                     relative translate-y-500">

//       {/* Background Image */}
//       <img
//         className="absolute inset-0 opacity-20
//                    lg:w-200 lg:ml-55 lg:-mt-15 lg:object-cover lg:rotate-90 rotate-90 lg:h-full
//                    w-200 mt-15"
//         src="src/assets/WhatsApp Image 2026-05-14 at 6.11.41 PM.jpeg"
//         alt="background"
//       />

//       {/* Green Overlay */}
//       <div className="absolute inset-0 bg-green-600/60"></div>

//       {/* Content */}
//       <div className="relative z-10 h-full text-white px-4">
//         <div className="w-full h-full flex lg:px-10 lg:py-16 px-4 py-10">
//           <div className="h-full w-full relative">

//             {/* ── Heading ── */}
//             <div className="flex flex-col justify-center text-center items-center
//                             lg:mt-15 mt-8">
//               <h1 className="font-bold text-white lg:text-[33px] text-[26px]">
//                 Founders Of Al-Qubtan
//               </h1>

//               <p className="text-black mt-3 leading-8
//                             lg:text-lg lg:w-100
//                             text-[15px] w-full max-w-sm">
//                 Started with a dream of building a successful import and export
//                 business, two young founders are driven by ambition, learning,
//                 and the vision to create something meaningful for the future
//                 through hard work and dedication.
//               </p>

//               <button className="mt-5 bg-white text-black px-8 py-2 hover:bg-black hover:text-white transition rounded-sm">
//                 About Us
//               </button>
//             </div>

//             {/* ── Founder Cards ── */}

//             {/* Desktop layout — absolute positioned side by side (original) */}
//             <div className="lg:block hidden">
//               {/* Founder 1 */}
//               <div className="inset-0 absolute -mt-5 top-1 left-0">
//                 <div className="mb-5 relative w-90 overflow-hidden">
//                   <img
//                     src="src/assets/WhatsApp Image 2026-05-16 at 12.48.21 PM.jpeg"
//                     alt="Mohammed Nihal"
//                     className="flex w-90 object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 w-full h-28 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>
//                   <div className="absolute bottom-5 left-5 z-10">
//                     <h2 className="text-2xl font-bold text-white">Mohammed Nihal</h2>
//                     <p className="text-sm text-gray-300">Founder</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Founder 2 */}
//               <div className="inset-0 absolute -mt-5 ml-200 top-1 left-0">
//                 <div className="mb-5 relative w-90 overflow-hidden">
//                   <img
//                     src="src/assets/WhatsApp Image 2026-05-16 at 12.48.55 PM.jpeg"
//                     alt="Shamil Mohammed"
//                     className="flex w-90 object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 w-full h-28 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>
//                   <div className="absolute bottom-5 left-5 z-10">
//                     <h2 className="text-2xl font-bold text-white">Shamil Mohammed</h2>
//                     <p className="text-sm text-gray-300">Co-Founder</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile / Tablet layout — stacked row below heading */}
//             <div className="lg:hidden flex justify-center gap-4 mt-8 flex-wrap">

//               {/* Founder 1 */}
//               <div className="relative overflow-hidden rounded-sm shadow-xl
//                               w-[44%] sm:w-52">
//                 <img
//                   src="src/assets/WhatsApp Image 2026-05-16 at 12.48.21 PM.jpeg"
//                   alt="Mohammed Nihal"
//                   className="w-full h-56 sm:h-64 object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 z-10">
//                   <h2 className="text-lg font-bold text-white leading-tight">Mohammed Nihal</h2>
//                   <p className="text-xs text-gray-300">Founder</p>
//                 </div>
//               </div>

//               {/* Founder 2 */}
//               <div className="relative overflow-hidden rounded-sm shadow-xl
//                               w-[44%] sm:w-52">
//                 <img
//                   src="src/assets/WhatsApp Image 2026-05-16 at 12.48.55 PM.jpeg"
//                   alt="Shamil Mohammed"
//                   className="w-full h-56 sm:h-64 object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 z-10"> 
//                   <h2 className="text-lg font-bold text-white leading-tight">Shamil Mohammed</h2>
//                   <p className="text-xs text-gray-300">Co-Founder</p>
//                 </div>
//               </div>

//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import founderImg1 from "../assets/WhatsApp Image 2026-05-16 at 12.48.21 PM.jpeg";
import founderImg2 from "../assets/WhatsApp Image 2026-05-16 at 12.48.55 PM.jpeg";
import bgImg from "../assets/WhatsApp Image 2026-05-14 at 6.11.41 PM.jpeg";


export default function WithUs() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          className="
            w-full
            h-full
            object-cover
            opacity-20
            rotate-90
            scale-150
            lg:scale-100
          "
          src={bgImg}
          alt="background"
        />

        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green-600/60"></div>
      </div>

      {/* Content */}
      <div
        className="
          relative z-10
          w-full
          px-5 sm:px-8 lg:px-10
          py-16 lg:py-24
        "
      >
        {/* Heading */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-white text-[26px] lg:text-[33px]">
            Founders Of Al-Qubtan
          </h1>

          <p
            className="
              text-black
              mt-4
              leading-7 lg:leading-8
              text-[15px] lg:text-lg
              w-full
              max-w-2xl
            "
          >
            Started with a dream of building a successful import and export
            business, two young founders are driven by ambition, learning, and
            the vision to create something meaningful for the future through
            hard work and dedication.
          </p>

          <button className="mt-6 bg-white text-black px-8 py-2 hover:bg-black hover:text-white transition rounded-sm">
            About Us
          </button>
        </div>

        {/* Founder Cards */}
        <div
          className="
            mt-14
            flex
            flex-wrap
            justify-center
            gap-6 lg:gap-10
          "
        >
          {/* Founder 1 */}
          <div
            className="
              relative
              overflow-hidden
              rounded-sm
              shadow-xl
              w-full
              max-w-[320px]
            "
          >
            <img
              src={founderImg1}
              alt="Mohammed Nihal"
              className="
                w-full
                h-100
                sm:h-112.5
                object-cover
              "
            />

            <div className="absolute bottom-0 left-0 w-full h-28 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>

            <div className="absolute bottom-5 left-5 z-10">
              <h2 className="text-2xl font-bold text-white">
                Mohammed Nihal
              </h2>

              <p className="text-sm text-gray-300">Founder</p>
            </div>
          </div>

          {/* Founder 2 */}
          <div
            className="
              relative
              overflow-hidden
              rounded-sm
              shadow-xl
              w-full
              max-w-[320px]
            "
          >
            <img
              src={founderImg2}
              alt="Shamil Mohammed"
              className="
                w-full
                h-100
                sm:h-112.5
                object-cover
              "
            />

            <div className="absolute bottom-0 left-0 w-full h-28 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>

            <div className="absolute bottom-5 left-5 z-10">
              <h2 className="text-2xl font-bold text-white">
                Shamil Mohammed
              </h2>

              <p className="text-sm text-gray-300">Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}