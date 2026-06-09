import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GiftBoxes() {

  const [gifts, setGifts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetch("http://localhost:5000/giftboxes")
      .then((res) => res.json())
      .then((data) => {
        setGifts(data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8f1df] pt-40 pb-24 px-8">

        <div className="text-center">

          <p className="text-[#b8860b] tracking-[4px] uppercase mb-4">
            Luxury Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#2b1a05]">
            Royal Gifting
          </h1>

          <div className="max-w-xl mx-auto mt-10">
            <input
              type="text"
              placeholder="🔍 Search gift boxes..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
              w-full
              px-5
              py-4
              rounded-2xl
              border
              border-yellow-200
              bg-white/90
              backdrop-blur-md
              shadow-lg
              focus:outline-none
              focus:ring-2
              focus:ring-yellow-400
              "
            />
          </div>

        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {gifts
            .filter((gift) =>
              gift.name
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            
            .map((gift) => (

            <div
              key={gift.id}
              className="group relative h-[380px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >

              <img
                loading="lazy"
                src={gift.image}
                alt={gift.name}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition duration-500"></div>

              <div className="absolute inset-0 border border-[#f7d774]/20 rounded-3xl group-hover:border-[#f7d774]/60 transition duration-500"></div>
              {gift.description && (
                <div className="absolute top-4 right-4 max-w-[240px] bg-gradient-to-br from-[#fff8dc] to-[#fef3c7] border border-[#f7d774] rounded-2xl shadow-[0_10px_30px_rgba(184,134,11,0.25)] px-4 py-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20">
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span>✨</span>
                    <span className="text-[#b8860b] font-semibold text-sm">
                      {gift.description}
                    </span>
                  </div>
                </div>
              )}

              <div className="absolute bottom-8 left-6">

                <h2 className="text-3xl font-bold text-white">
                  {gift.name}
                </h2>

                <div className="mt-2">

                  {gift.mode === "discount" ? (
                    <>
                      <p className="text-red-200 line-through">
                        ₹{gift.original_price}
                      </p>

                      <p className="text-white text-xl font-bold">
                        ₹{gift.current_price}
                      </p>

                      <p className="text-green-300 font-semibold">
                        {Math.round(
                          ((gift.original_price -
                            gift.current_price) /
                            gift.original_price) *
                            100
                        )}
                        % OFF
                      </p>
                    </>
                  ) : (
                    <p className="text-white text-xl font-bold">
                      ₹{gift.current_price}
                    </p>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

        {gifts.filter((gift) =>
          gift.name
            .toLowerCase()
            .includes(search.toLowerCase())
        ).length === 0 && (

          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold text-gray-500">
              No gift boxes found 😔
            </h2>
          </div>

        )}

      </section>

      <Footer />
    </>
  );
}

export default GiftBoxes;