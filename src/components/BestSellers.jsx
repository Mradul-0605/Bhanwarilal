import { useEffect, useState } from "react";

function BestSellers() {

  const [products, setProducts] =
    useState([]);

  useEffect(() => {

    fetch(
      "http://localhost:5000/sweets"
    )
      .then((res) => res.json())
      .then((data) => {

        const bestSellerNames = [
          "laddu",
          "makhan bada",
          "ghevar",
          "feine",
          "sangam barfi",
          "kaju katli",
          "gujiya",
          "chena toast"
        ];

        const filtered =
          data.filter((item) =>
            bestSellerNames.includes(
              item.name
            )
          );

        setProducts(filtered);

      });

  }, []);

  return (

    <section
      id="bestsellers"
      className="
      bg-[#fff8ec]
      py-16 md:py-24
      px-4 sm:px-6 lg:px-10
      "
    >

      <div className="text-center">

        <p
          className="
          text-[#b8860b]
          tracking-[4px]
          uppercase
          mb-3
          text-sm md:text-lg
          "
        >
          Best Sellers
        </p>

        <h2
          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-bold
          text-[#2b1a05]
          "
        >
          Loved Across Generations
        </h2>

      </div>

      <div
        className="
        mt-12 md:mt-16
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-4 md:gap-8
        "
      >

        {products.map((product) => (

          <div
            key={product.id}
            className="
            group
            relative
            h-[220px]
            sm:h-[280px]
            md:h-[320px]
            rounded-[28px]
            overflow-hidden
            shadow-xl
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            "
          >

            <img
              loading="lazy"
              src={product.image}
              alt={product.name}
              className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition
              duration-700
              group-hover:scale-110
              "
            />

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/20
              to-transparent
              "
            />

            <div
              className="
              absolute
              inset-0
              rounded-[28px]
              border
              border-[#f7d774]/20
              group-hover:border-[#f7d774]/50
              transition
              duration-500
              "
            />

            <div
              className="
              absolute
              bottom-4 md:bottom-8
              left-4 md:left-6
              z-10
              "
            >

              <p
                className="
                text-[#f7d774]
                uppercase
                tracking-[2px]
                text-[10px]
                md:text-sm
                mb-1 md:mb-2
                "
              >
                Signature Delight
              </p>

              <h3
                className="
                text-lg
                sm:text-2xl
                md:text-3xl
                font-bold
                text-white
                "
              >
                {product.name}
              </h3>

            </div>

            {product.description && (
                <div className="absolute top-4 right-4 max-w-[240px] bg-gradient-to-br from-[#fff8dc] to-[#fef3c7] border border-[#f7d774] rounded-2xl shadow-[0_10px_30px_rgba(184,134,11,0.25)] px-4 py-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20">
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span>✨</span>
                    <span className="text-[#b8860b] font-semibold text-sm">
                      {product.description}
                    </span>
                  </div>
                </div>
              )}

          </div>

        ))}
      
      </div>

    </section>

  );
}

export default BestSellers;