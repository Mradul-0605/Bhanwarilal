import sweets from "../assets/sweets.png"
import namkeen from "../assets/namkeen.png"
import gift from "../assets/gift.png"
import { Link } from "react-router-dom"

function Categories() {

  const categories = [
    {
      title: "Sweets",
      image: sweets,
      path: "/sweets",
    },

    {
      title: "Namkeen",
      image: namkeen,
      path: "/namkeen",
    },

    {
      title: "Royal Gifting",
      image: gift,
      path: "/giftboxes",
    },
  ]


  return (

    <section id="categories" className="bg-[#f8f1df] py-24 px-10">

      {/* SECTION HEADING */}
      <div className="text-center">

        <p className="text-[#b8860b] tracking-[4px] uppercase mb-4 text-lg">
          Explore Collection
        </p>

        <h2 className="text-5xl font-bold text-[#2b1a05]">

          Crafted For Every Occasion

        </h2>

      </div>



      {/* CATEGORY CARDS */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {categories.map((category, index) => (

            <Link
            to={category.path}
            key={index}
            >
          <div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl">

            {/* IMAGE */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />


            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition duration-500"></div>


            {/* GLOW EFFECT */}
            <div className="absolute inset-0 border border-[#f7d774]/20 rounded-3xl group-hover:border-[#f7d774]/60 transition duration-500"></div>


            {/* TEXT */}
            <div className="absolute bottom-10 left-8">

              <h3 className="text-4xl font-bold text-white">

                {category.title}

              </h3>

              <p className="mt-3 text-[#f3e2b3] text-lg">

                Discover Collection →

              </p>

            </div>

          </div>
          </Link>

        ))}

      </div>

    </section>

  )
}

export default Categories