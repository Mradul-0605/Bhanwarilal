import oldshop from "../assets/oldshop.png"

function About() {
  return (

    <section id="about" className="bg-[#f6ead1] py-25 px-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">


        {/* LEFT IMAGE */}
        <div className="relative group">

          <div className="absolute -inset-2 bg-gradient-to-r from-[#f7d774]/30 to-[#d4a017]/20 rounded-[36px] blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

          <img
            src={oldshop}
            alt="Old Bhanwarilal"
            className="relative rounded-[32px] shadow-2xl w-full object-cover border border-[#f7d774]/20"
          />

        </div>




        {/* RIGHT CONTENT */}
        <div>

          <p className="text-[#b8860b] uppercase tracking-[5px] text-lg mb-6">
            Since 1945
          </p>


          <h2 className="text-3xl md:text-5xl font-bold text-[#2b1a05] leading-tight">

            We were crafting sweets
            <span className="text-[#f7d774]"> before you were born.</span>

          </h2>



          <p className="mt-10 text-[#5c4033] text-xl leading-relaxed">

            Long before online deliveries, modern dessert chains,
            and social media food trends,
            the fragrance of pure ghee and handcrafted mithai
            filled the streets of Mhow.

          </p>



          <p className="mt-6 text-[#6e4b2f] text-lg leading-relaxed">

            Bhanwarilal Mithaiwala started as a small traditional sweet shop,
            built on patience, purity, and recipes protected through generations.

          </p>


          <p className="mt-6 text-[#6e4b2f] text-lg leading-relaxed">

            Every Laddu, every Makhanbada, every Kaju Katli
            still carries the same craftsmanship and tradition
            that began decades ago.

          </p>



          <p className="mt-10 text-[#b8860b] text-2xl italic leading-relaxed">

            “Taste changes with time.
            Tradition doesn’t.”

          </p>

        </div>

      </div>

    </section>

  )
}

export default About