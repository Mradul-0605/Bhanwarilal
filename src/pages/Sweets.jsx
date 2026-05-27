import modak from "../Bhanwrilal/Sweets/modak.png"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Sweets() {

  const sweets = [
    {
      name: "Kaju Katli",
      image: modak,
    },
    {
      name: "Laddu",
      image: modak,
    },
    {
      name: "Ghevar",
      image: modak,
    },
    {
      name: "Gujiya",
      image: modak,
    },
    {
      name: "Sangam Barfi",
      image: modak,
    },
    {
      name: "Milk Cake",
      image: modak,
    },
    {
      name: "Rasgulla",
      image: modak,
    },
    {
      name: "Rasmalai",
      image: modak,
    },
  ]


  return (

    <>

      <Navbar />



      <section className="min-h-screen bg-[#f8f1df] pt-40 pb-24 px-8">

        {/* HEADING */}
        <div className="text-center">

          <p className="text-[#b8860b] tracking-[4px] uppercase mb-4">
            Traditional Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#2b1a05]">

            Our Sweets

          </h1>

        </div>



        {/* SWEETS GRID */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {sweets.map((sweet, index) => (

            <div
              key={index}
              className="group relative h-[380px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >

              {/* IMAGE */}
              <img
                src={sweet.image}
                alt={sweet.name}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />


              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition duration-500"></div>


              {/* GOLD BORDER */}
              <div className="absolute inset-0 border border-[#f7d774]/20 rounded-3xl group-hover:border-[#f7d774]/60 transition duration-500"></div>



              {/* TEXT */}
              <div className="absolute bottom-8 left-6">

                <h2 className="text-3xl font-bold text-white">

                  {sweet.name}

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

export default Sweets