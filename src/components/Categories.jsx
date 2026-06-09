import sweets from "../assets/sweets.png";
import namkeen from "../assets/namkeen.png";
import gift from "../assets/gift.png";
import { Link } from "react-router-dom";

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
  ];

  return (

    <section
      id="categories"
      className="bg-[#f8f1df] py-16 md:py-24 px-4 sm:px-6 lg:px-10"
    >

      {/* HEADING */}

      <div className="text-center">

        <p className="text-[#b8860b] tracking-[4px] uppercase mb-4 text-sm md:text-lg">
          Explore Collection
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2b1a05]">
          Crafted For Every Occasion
        </h2>

      </div>

      {/* CATEGORY CARDS */}

      <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {categories.map((category, index) => (

          <Link
            to={category.path}
            key={index}
          >

            <div
              className="
              group
              relative
              h-[320px]
              sm:h-[400px]
              lg:h-[500px]
              rounded-3xl
              overflow-hidden
              cursor-pointer
              shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-2
              "
            >

              {/* IMAGE */}

              <img
                loading="lazy"
                src={category.image}
                alt={category.title}
                className="
                w-full
                h-full
                object-cover
                transition
                duration-700
                group-hover:scale-110
                "
              />

              {/* DARK OVERLAY */}

              <div
                className="
                absolute
                inset-0
                bg-black/35
                group-hover:bg-black/20
                transition
                duration-500
                "
              />

              {/* GOLD BORDER */}

              <div
                className="
                absolute
                inset-0
                border
                border-[#f7d774]/20
                rounded-3xl
                group-hover:border-[#f7d774]/60
                transition
                duration-500
                "
              />

              {/* TEXT */}

              <div className="absolute bottom-6 md:bottom-10 left-5 md:left-8">

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 md:mt-3 text-[#f3e2b3] text-sm sm:text-base lg:text-lg">
                  Discover Collection →
                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );
}

export default Categories;