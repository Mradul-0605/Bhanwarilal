import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { MapPin, Clock, Phone } from "lucide-react"

function Locations() {

  const stores = [

    {
      name: "Original Mhow Store",

      address:
        "Moti Chowk, Chhota Bazaar, Mhow",

      timing:
        "8:00 AM — 8:30 PM",

      phone:
        "+91 7324273213",

      map:
        "https://maps.google.com/?q=Bhanwarilal+Mithaiwala+Mhow",

      embed:
        "https://maps.google.com/maps?q=Bhanwarilal%20Mithaiwala%20Mhow&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },



    {
      name: "Tirupati Green Outlet",

      address:
        "Khargone - Indore Highway, Kishanganj, Mhow",

      timing:
        "8:30 AM — 10:00 PM",

      phone:
        "+91 7324276163",

      map:
        "https://maps.google.com/?q=Bhanwarilal+Tirupati+Green+Mhow",

      embed:
        "https://maps.google.com/maps?q=Tirupati%20Green%20Mhow&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },



    {
      name: "Indore Outlet",

      address:
        "Opposite Nath Mandir, South Tukoganj, Indore",

      timing:
        "10:00 AM — 10:00 PM",

      phone:
        "+91 9981993213",

      map:
        "https://maps.google.com/?q=Bhanwarilal+Mithaiwala+Indore",

      embed:
        "https://maps.google.com/maps?q=Bhanwarilal%20Mithaiwala%20Indore&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

  ]



  return (

    <>

      <Navbar />



      <section className="min-h-screen bg-[#f8f1df] pt-40 pb-24 px-6 md:px-10">

        {/* HEADING */}
        <div className="text-center">

          <p className="text-[#b8860b] tracking-[4px] uppercase mb-4">

            Visit Us

          </p>



          <h1 className="text-5xl md:text-7xl font-bold text-[#2b1a05]">

            Our Locations

          </h1>



          <p className="mt-8 max-w-3xl mx-auto text-[#5c4033] text-lg leading-relaxed">

            Serving handcrafted sweets and namkeen since 1945,
            Bhanwarilal Mithaiwala continues to spread tradition,
            purity, and unforgettable taste across Mhow & Indore.

          </p>

        </div>



        {/* STORE SECTIONS */}
        <div className="mt-24 flex flex-col gap-20 max-w-7xl mx-auto">

          {stores.map((store, index) => (

            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[40px] shadow-2xl border border-[#d4af37]/10 bg-white"
            >



              {/* LEFT SIDE */}
              <div className="p-10 md:p-14 flex flex-col justify-center">

                <p className="text-[#b8860b] tracking-[3px] uppercase mb-4">

                  Bhanwarilal Mithaiwala

                </p>



                <h2 className="text-4xl md:text-5xl font-bold text-[#2b1a05] leading-tight">

                  {store.name}

                </h2>



                {/* ADDRESS */}
                <div className="mt-10 flex items-start gap-4">

                  <MapPin
                    className="text-[#b8860b] mt-1"
                    size={26}
                  />

                  <p className="text-[#5c4033] text-lg md:text-xl leading-relaxed">

                    {store.address}

                  </p>

                </div>



                {/* TIMINGS */}
                <div className="mt-6 flex items-center gap-4">

                  <Clock
                    className="text-[#b8860b]"
                    size={24}
                  />

                  <p className="text-[#5c4033] text-lg">

                    {store.timing}

                  </p>

                </div>



                {/* PHONE */}
                <div className="mt-6 flex items-center gap-4">

                  <Phone
                    className="text-[#b8860b]"
                    size={24}
                  />

                  <p className="text-[#5c4033] text-lg">

                    {store.phone}

                  </p>

                </div>



                {/* BUTTON */}
                <a
                  href={store.map}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <button className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#f7d774] via-[#d4a017] to-[#b8860b] text-[#2b1a05] font-semibold shadow-xl hover:scale-105 transition duration-300">

                    Open In Maps

                  </button>

                </a>

              </div>



              {/* RIGHT SIDE MAP */}
              <div className="h-[350px] lg:h-full">

                <iframe
                  src={store.embed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>

            </div>

          ))}

        </div>

      </section>



      <Footer />

    </>

  )
}

export default Locations