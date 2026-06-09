import { useEffect, useState } from "react";
import oldshop from "../assets/oldshop.png";

function About() {

  const [stats, setStats] = useState({
    sweets: 0,
    namkeen: 0,
    giftboxes: 0
  });

  useEffect(() => {

    Promise.all([
      fetch("http://localhost:5000/sweets").then(res => res.json()),
      fetch("http://localhost:5000/namkeen").then(res => res.json()),
      fetch("http://localhost:5000/giftboxes").then(res => res.json())
    ]).then(([sweets, namkeen, giftboxes]) => {

      setStats({
        sweets: sweets.length,
        namkeen: namkeen.length,
        giftboxes: giftboxes.length
      });

    });

  }, []);

  const total =
    stats.sweets +
    stats.namkeen +
    stats.giftboxes;

  return (

    <section
      id="about"
      className="
      bg-[#f6ead1]
      py-16 md:py-24 lg:py-28
      px-4 sm:px-6 lg:px-10
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-10 lg:gap-20
        items-center
        "
      >

        {/* LEFT */}

        <div>

          <div className="relative group">

            <div
              className="
              absolute
              -inset-2
              bg-gradient-to-r
              from-[#f7d774]/30
              to-[#d4a017]/20
              rounded-[36px]
              blur-xl
              opacity-70
              group-hover:opacity-100
              transition
              duration-700
              "
            />

            <img
              loading="lazy"
              src={oldshop}
              alt="Old Bhanwarilal"
              className="
              relative
              rounded-[24px]
              lg:rounded-[32px]
              shadow-2xl
              w-full
              object-cover
              border
              border-[#f7d774]/20
              "
            />

          </div>

          {/* STATS */}

          <div
            className="
            mt-6
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            "
          >

            <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#b8860b]">
                {total}
              </h3>
              <p className="text-sm text-gray-600">
                Products
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#b8860b]">
                {stats.sweets}
              </h3>
              <p className="text-sm text-gray-600">
                Sweets
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#b8860b]">
                {stats.namkeen}
              </h3>
              <p className="text-sm text-gray-600">
                Namkeen
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#b8860b]">
                {stats.giftboxes}
              </h3>
              <p className="text-sm text-gray-600">
                Gift Boxes
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <p
            className="
            text-[#b8860b]
            uppercase
            tracking-[4px]
            text-sm md:text-lg
            mb-4 md:mb-6
            "
          >
            Since 1945
          </p>

          <h2
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-[#2b1a05]
            leading-tight
            "
          >
            We were crafting sweets
            <span className="text-[#f7d774]">
              {" "}before you were born.
            </span>
          </h2>

          <p
            className="
            mt-6 md:mt-10
            text-[#5c4033]
            text-base sm:text-lg lg:text-xl
            leading-relaxed
            "
          >
            Long before online deliveries, modern dessert chains,
            and social media food trends, the fragrance of pure
            ghee and handcrafted mithai filled the streets of Mhow.
          </p>

          <p
            className="
            mt-4 md:mt-6
            text-[#6e4b2f]
            text-base lg:text-lg
            leading-relaxed
            "
          >
            Bhanwarilal Mithaiwala started as a small traditional
            sweet shop, built on patience, purity, and recipes
            protected through generations.
          </p>

          <p
            className="
            mt-4 md:mt-6
            text-[#6e4b2f]
            text-base lg:text-lg
            leading-relaxed
            "
          >
            Every Laddu, every Makhanbada, every Kaju Katli still
            carries the same craftsmanship and tradition that
            began decades ago.
          </p>

          <p
            className="
            mt-8 md:mt-10
            text-[#b8860b]
            text-lg sm:text-xl lg:text-2xl
            italic
            leading-relaxed
            "
          >
            “Taste changes with time. Tradition doesn’t.”
          </p>

        </div>

      </div>

    </section>

  );

}

export default About;