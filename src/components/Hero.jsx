import hero from "../assets/hero.jpeg"
import vdo from "../assets/vdo.mp4"

function Hero() {
  return (

    <section id="home" className="relative w-full overflow-hidden">


      {/* MOBILE VIDEO ONLY */}
      <div className="md:hidden w-full h-screen overflow-hidden">

        <video
          src={vdo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

      </div>



      {/* TABLET HERO */}
      <div className="hidden md:flex lg:hidden flex-col items-center justify-center min-h-screen py-24 px-6 relative overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src={hero}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />


        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>



        {/* CONTENT */}
        <div className="relative z-10 w-full flex flex-col items-center text-center">

          {/* VIDEO */}
          <div className="w-full max-w-[750px] rounded-[32px] overflow-hidden border border-[#f7d774]/30 shadow-2xl">

            <video
              src={vdo}
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />

          </div>



          {/* TEXT */}
          <div className="mt-12 max-w-3xl">

            <p className="text-[#f7d774] tracking-[4px] uppercase mb-4 text-lg">
              Since 1945
            </p>


            <h1 className="text-5xl font-bold text-white leading-tight">

              Serving handcrafted sweets with love

            </h1>


            <p className="text-[#f3e2b3] text-xl mt-6 leading-relaxed">

              Dedicated towards Taste and purity.

            </p>

          </div>

        </div>

      </div>



      {/* DESKTOP HERO */}
      <div className="hidden lg:block h-screen">

        {/* HERO IMAGE */}
        <img
          src={hero}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />


        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/45"></div>



        {/* HERO CONTENT */}
        <div className="absolute inset-0 z-10 w-full px-16 flex items-center justify-between">

          {/* LEFT VIDEO */}
          <div className="mt-32 w-[320px] rounded-3xl overflow-hidden border border-[#f7d774]/30 shadow-2xl backdrop-blur-md bg-white/10">

            <video
              src={vdo}
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />

          </div>



          {/* RIGHT TEXT */}
          <div className="max-w-3xl text-right">

            <p className="text-[#f7d774] text-xl tracking-[4px] uppercase mb-6">
              Since 1945
            </p>


            <h1 className="text-7xl font-bold text-white leading-tight">

              Serving handcrafted sweets with love

            </h1>


            <p className="text-2xl text-[#f3e2b3] mt-8 leading-relaxed">

              Dedicated towards Taste and purity.

            </p>



            {/* BUTTONS */}
            <div className="mt-10 flex justify-end gap-6">
                <a href="#categories">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-b from-[#f7d774] via-[#d4a017] to-[#b8860b] text-[#2b1a05] font-semibold shadow-xl hover:scale-105 transition duration-300">

                Explore Collection

              </button></a>

                <a href="#about">
              <button className="px-8 py-4 rounded-2xl border border-[#f7d774]/40 bg-white/10 backdrop-blur-md text-white hover:bg-[#f7d774]/20 transition duration-300">

                Our Story

              </button></a>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Hero