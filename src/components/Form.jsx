// export default function Form() {
//   return (
//     <div>
//       <div className="w-full bg-gray-100 flex items-center justify-center px-6 py-20">
//         <div className="w-full max-w-5xl bg-white shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
//           {/* Left Side */}
//           <div className="bg-green-700 text-white p-10 flex flex-col justify-center">
//             <h1 className="text-4xl font-bold leading-tight">
//               Send Your Inquiry
//             </h1>

//             <p className="mt-4 text-base text-gray-200 leading-7">
//               Contact Al-Qubtan for product inquiries, bulk orders, and
//               international export details.
//             </p>

//             <div className="mt-8 space-y-4">
//               <div>
//                 <h3 className="font-semibold text-lg">Phone</h3>
//                 <p className="text-gray-200">+91 9207097813, 7510434657</p>
//               </div>

//               <div>
//                 <h3 className="font-semibold text-lg">Email</h3>
//                 <p className="text-gray-200">alqubtanexportingcompany@gmail.com</p>
//               </div>

//               <div>
//                 <h3 className="font-semibold text-lg">Location</h3>
//                 <p className="text-gray-200">Banglore, Kasaragod, Kannur</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side Form */}
//           <div className="p-10">
//             <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>

//             <form className="mt-6 space-y-4">
//               {/* Name */}
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-green-600"
//               />

//               {/* Email */}
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-green-600"
//               />

//               {/* Phone */}
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-green-600"
//               />

//               {/* Message */}
//               <textarea
//                 rows="4"
//                 placeholder="Write your inquiry..."
//                 className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-green-600 resize-none"
//               ></textarea>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg text-lg font-semibold"
//               >
//                 Send Inquiry
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Form() {
  return (
    <div className="w-full bg-gray-100 flex items-center justify-center px-5 sm:px-6 py-16 lg:py-20">
      <div
        className="
          w-full
          max-w-6xl
          bg-white
          shadow-2xl
          grid
          grid-cols-1
          md:grid-cols-2
          overflow-hidden
        "
      >
        {/* Left Side */}
        <div
          className="
            bg-green-700
            text-white
            p-8 sm:p-10
            flex
            flex-col
            justify-center
          "
        >
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Send Your Inquiry
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-200 leading-7">
            Contact Al-Qubtan for product inquiries, bulk orders, and
            international export details.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>

              <p className="text-gray-200 text-sm sm:text-base">
                +91 9207097813, 7510434657
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Email</h3>

              <p className="text-gray-200 text-sm sm:text-base wrap-break-words">
                alqubtanexportingcompany@gmail.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Location</h3>

              <p className="text-gray-200 text-sm sm:text-base">
                Bangalore, Kasaragod, Kannur
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Contact Us
          </h2>

          <form className="mt-6 space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="
                w-full
                border border-gray-300
                px-4 py-3
                rounded-lg
                outline-none
                focus:border-green-600
              "
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="
                w-full
                border border-gray-300
                px-4 py-3
                rounded-lg
                outline-none
                focus:border-green-600
              "
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number"
              className="
                w-full
                border border-gray-300
                px-4 py-3
                rounded-lg
                outline-none
                focus:border-green-600
              "
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Write your inquiry..."
              className="
                w-full
                border border-gray-300
                px-4 py-3
                rounded-lg
                outline-none
                focus:border-green-600
                resize-none
              "
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full
                bg-green-600
                hover:bg-green-700
                transition
                text-white
                py-3
                rounded-lg
                text-lg
                font-semibold
              "
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}