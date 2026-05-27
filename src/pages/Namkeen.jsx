import parmal from "../Bhanwrilal/Namkeen/parmal.png"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Namkeen() {

  const namkeen = [
    {
      name: "Sev",
      image: parmal,
    },
    {
      name: "Mixture",
      image: parmal,
    },
    {
      name: "Aloo Bhujia",
      image: parmal,
    },
    {
      name: "Khatta Meetha",
      image: parmal,
    },
    {
      name: "Masala Peanuts",
      image: parmal,
    },
    {
      name: "Corn Mix",
      image: parmal,
    },
    {
      name: "Chakli",
      image: parmal,
    },
    {
      name: "Mathri",
      image: parmal,
    },
  ]


  return (

    <>

      <Navbar />



      <section className="min-h-screen bg-[#f8f1df] pt-40 pb-24 px-8">

        {/* HEADING */}
        <div className="text-center">

          <p className="text-[#b8860b] tracking-[4px] uppercase mb-4">
            Traditional Snacks
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#2b1a05]">

            Our Namkeen

          </h1>

        </div>



        {/* GRID */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {namkeen.map((item, index) => (

            <div
              key={index}
              className="group relative h-[380px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />


              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition duration-500"></div>


              {/* BORDER */}
              <div className="absolute inset-0 border border-[#f7d774]/20 rounded-3xl group-hover:border-[#f7d774]/60 transition duration-500"></div>



              {/* TEXT */}
              <div className="absolute bottom-8 left-6">

                <h2 className="text-3xl font-bold text-white">

                  {item.name}

                </h2>

              </div>

            </div>

          ))}

        </div>

      </section>



      <Footer />

    </>

  )
}

export default Namkeen