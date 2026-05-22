// export default function AboutUs() {
//   return (
//     <div className="h-screen justify-center flex mt-30 w-full absolute">
//       <div
//         className="justify-center flex bg-white w-[95%]
//                       lg:flex-row lg:gap-30 lg:-mt-20 lg:h-[80%]
//                       flex-col gap-0 mt-0 h-auto"
//       >
//         {/* ── Text Column ── */}
//         <div
//           className="
//           lg:flex lg:border-b-2 mt-35 lg:mt-15 lg:ml-10 lg:w-[50%] lg:flex-col
//           flex flex-col border-b-2 mx-5 w-auto
//         "
//         >
//           <h2 className="text-green-600 font-bold text-3xl lg:text-3xl">
//             Welcome to Al-Qubtan
//           </h2>
//           <p
//             className="
//             lg:w-150 lg:text-base
//             w-full text-sm mt-3
//           "
//           >
//             At Al-Qubtan, we specialize in exporting premium-quality spices and
//             agricultural products worldwide. With a strong commitment to quality
//             and reliability, we supply carefully selected products including
//             cardamom, black pepper, cloves, cinnamon, and turmeric sourced from
//             trusted farms across India.
//           </p>

//           <h3 className="font-semibold mt-5 text-green-600 lg:text-2xl text-xl">
//             Who We Are
//           </h3>
//           <p
//             className="
//             lg:w-150 lg:text-base
//             w-full text-sm mt-3
//           "
//           >
//             Al-Qubtan is a trusted import and export company dedicated to
//             providing fresh, natural, and high-quality products to wholesalers,
//             distributors, and businesses worldwide. We believe that quality
//             products and long-term relationships are the foundation of
//             successful global trade.
//           </p>
//         </div>

//         {/* ── Image Grid Column ── */}
//         <div
//           className="
//           lg:w-[50%] lg:h-full lg:grid lg:grid-cols-2 lg:gap-6 lg:p-6 lg:place-items-center
//           w-full grid grid-cols-2 mt-10 lg:mt-0 gap-4 p-4 place-items-center bg-green-600
//           sm:grid-cols-4
//         "
//         >
//           <img
//             className="lg:w-35 lg:h-35 w-20 h-20 sm:w-24 sm:h-24 object-contain"
//             src="src/assets/seed.png"
//             alt="seed"
//           />
//           <img
//             className="lg:w-30 lg:h-30 w-20 h-20 sm:w-24 sm:h-24 object-contain"
//             src="src/assets/almond.png"
//             alt="almond"
//           />
//           <img
//             className="lg:w-35 lg:h-35 w-20 h-20 sm:w-24 sm:h-24 object-contain"
//             src="src/assets/cashew.png"
//             alt="cashew"
//           />
//           <img
//             className="lg:w-35 lg:h-35 w-20 h-20 sm:w-24 sm:h-24 object-contain"
//             src="src/assets/spices.png"
//             alt="spices"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


import cashew from "../assets/cashew.png";
import seed from "../assets/seed.png";
import almond from "../assets/almond.png";
import spices from "../assets/spices.png";

export default function AboutUs() {
  return (
    <div className="w-full flex justify-center py-16 lg:py-24 overflow-hidden">
      <div
        className="
          w-[95%]
          bg-white
          flex flex-col lg:flex-row
          lg:min-h-[80vh]
          rounded-sm
        "
      >
        {/* ── Text Column ── */}
        <div
        id="about"
          className="
            flex flex-col
            lg:border-b-0
            px-5 sm:px-8 lg:px-10
            py-10 lg:py-16
            lg:w-1/2
            border-gray-300
            border-2        "
        >
          <h2 className="text-green-600 font-bold text-2xl sm:text-3xl leading-tight">
            Welcome to Al-Qubtan
          </h2>

          <p
            className="
              w-full
              text-sm sm:text-base
              mt-4
              leading-7
              text-gray-700
              max-w-2xl
            "
          >
            At Al-Qubtan, we specialize in exporting premium-quality spices and
            agricultural products worldwide. With a strong commitment to quality
            and reliability, we supply carefully selected products including
            cardamom, black pepper, cloves, cinnamon, and turmeric sourced from
            trusted farms across India.
          </p>

          <h3 className="font-semibold mt-8 text-green-600 text-xl lg:text-2xl">
            Who We Are
          </h3>

          <p
            className="
              w-full
              text-sm sm:text-base
              mt-4
              leading-7
              text-gray-700
              max-w-2xl
            "
          >
            Al-Qubtan is a trusted import and export company dedicated to
            providing fresh, natural, and high-quality products to wholesalers,
            distributors, and businesses worldwide. We believe that quality
            products and long-term relationships are the foundation of
            successful global trade.
          </p>
        </div>

        {/* ── Image Grid Column ── */}
        <div
          className="
            w-full lg:w-1/2
            bg-green-600
            grid
            grid-cols-2
            sm:grid-cols-2
            gap-6
            place-items-center
            px-6 py-10
            lg:p-10
          "
        >
          <img
            className="
              w-20 h-20
              sm:w-24 sm:h-24
              md:w-28 md:h-28
              lg:w-36 lg:h-36
              object-contain
            "
            src={seed}
            alt="seed"
          />

          <img
            className="
              w-20 h-20
              sm:w-24 sm:h-24
              md:w-28 md:h-28
              lg:w-32 lg:h-32
              object-contain
            "
            src={almond}
            alt="almond"
          />

          <img
            className="
              w-20 h-20
              sm:w-24 sm:h-24
              md:w-28 md:h-28
              lg:w-36 lg:h-36
              object-contain
            "
            src={cashew}
            alt="cashew"
          />

          <img
            className="
              w-20 h-20
              sm:w-24 sm:h-24
              md:w-28 md:h-28
              lg:w-36 lg:h-36
              object-contain
            "
            src={spices}
            alt="spices"
          />
        </div>
      </div>
    </div>
  );
}