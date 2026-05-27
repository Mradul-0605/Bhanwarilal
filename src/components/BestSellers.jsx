import laddu from "../assets/laddu.png"
import makhanbada from "../assets/makhanbada.png"
import ghevar from "../assets/ghevar.png"
import feine from "../assets/feine.png"
import sangam from "../assets/sangam.png"
import kaju from "../assets/kaju.png"
import gujiya from "../assets/sweets.png"
import chena from "../assets/chena.png"

function BestSellers() {

  const products = [
    {
      name: "Laddu",
      image: laddu,
    },

    {
      name: "Makhan Bada",
      image: makhanbada,
    },

    {
      name: "Ghevar",
      image: ghevar,
    },

    {
      name: "Feine",
      image: feine,
    },

    {
      name: "Sangam Barfi",
      image: sangam,
    },

    {
      name: "Kaju Katli",
      image: kaju,
    },

    {
      name: "Gujiya",
      image: gujiya,
    },

    {
      name: "Chena Toast",
      image: chena,
    },
  ]


  return (

    <section id="bestsellers" className="bg-[#fff8ec] py-24 px-10">

      {/* HEADING */}
      <div className="text-center">

        <p className="text-[#b8860b] tracking-[4px] uppercase mb-4 text-lg">
          Best Sellers
        </p>

        <h2 className="text-5xl font-bold text-[#2b1a05]">

          Loved Across Generations

        </h2>

      </div>



      {/* PRODUCT GRID */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">

        {products.map((product, index) => (

          <div
            key={index}
            className="group relative h-[300px] rounded-[32px] overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition duration-700"
            >

            {/* PRODUCT IMAGE */}
            <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />


            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>


            {/* GOLD BORDER GLOW */}
            <div className="absolute inset-0 rounded-[32px] border border-[#f7d774]/20 group-hover:border-[#f7d774]/50 transition duration-500"></div>


            {/* PRODUCT TEXT */}
            <div className="absolute bottom-8 left-6 z-10">

                <p className="text-[#f7d774] uppercase tracking-[3px] text-sm mb-2">
                Signature Delight
                </p>

                <h3 className="text-3xl font-bold text-white">

                {product.name}

                </h3>

            </div>

            </div>

        ))}

      </div>

    </section>

  )
}

export default BestSellers