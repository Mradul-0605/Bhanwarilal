import logo from "../assets/logo.png"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

import {
  MapPin,
  Phone,
  Mail
} from "lucide-react"

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa"

function Footer() {
  return (

    <footer className="bg-[#120b05] border-t border-[#f7d774]/10 py-20 px-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">


        {/* BRAND */}
        <div>

            <a href="#home">
          <img
            src={logo}
            alt="Logo"
            className="h-30 object-contain"
          />
          </a>

          <p className="mt-6 text-[#cbb892] leading-relaxed">

            Serving handcrafted sweets, namkeen,
            and traditions since 1945.

          </p>

        </div>



        {/* QUICK LINKS */}
        <div>

          <h3 className="text-[#f7d774] text-2xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-[#e7d5b0]">

            <HashLink smooth to="/#home">
            <li className="hover:text-[#fff8dc] transition duration-300 cursor-pointer">
              Home
            </li>
            </HashLink>
            <HashLink smooth to="/#bestsellers">
            <li className="hover:text-[#fff8dc] transition duration-300 cursor-pointer">
              Best Sellers
            </li>
            </HashLink>

            <HashLink smooth to="/#about">
            <li className="hover:text-[#fff8dc] transition duration-300 cursor-pointer">
              About
            </li>
            </HashLink>

            <Link to="/locations">
            <li className="hover:text-[#fff8dc] transition duration-300 cursor-pointer">
              Locations
            </li>
            </Link>

          </ul>

        </div>



        {/* HERITAGE */}
        <div>

        <h3 className="text-[#f7d774] text-2xl font-semibold mb-6">
            Heritage
        </h3>

        <div className="space-y-5 text-[#e7d5b0]">

            <div className="flex items-center gap-4">
            <MapPin size={20} />
            <p>Mhow, Madhya Pradesh</p>
            </div>

            <div className="flex items-center gap-4">
            <span className="text-[#f7d774] text-xl">✦</span>
            <p>Serving Since 1945</p>
            </div>

            <div className="flex items-center gap-4">
            <span className="text-[#f7d774] text-xl">✦</span>
            <p>Handcrafted Traditional Mithai</p>
            </div>

        </div>

        </div>

        {/* SOCIAL */}
        <div>

          <h3 className="text-[#f7d774] text-2xl font-semibold mb-6">
            Follow Us
          </h3>



          <div className="flex items-center gap-5">


            {/* INSTAGRAM */}
            <a href="https://www.instagram.com/bhanwarilal_mithaiwala/?hl=en" target="_blank">

            <div className="p-4 rounded-2xl bg-white/5 border border-[#f7d774]/10 hover:bg-[#f7d774]/10 hover:border-[#f7d774]/40 hover:shadow-[0_0_20px_rgba(247,215,116,0.25)] transition duration-300 cursor-pointer">

              <FaInstagram className="text-[#fff8dc] text-2xl" />

            </div></a>



            {/* FACEBOOK */}
            <a href="https://www.facebook.com/p/Bhanwarilal-Mithaiwala-100063670669413/" target="_blank">
            <div className="p-4 rounded-2xl bg-white/5 border border-[#f7d774]/10 hover:bg-[#f7d774]/10 hover:border-[#f7d774]/40 hover:shadow-[0_0_20px_rgba(247,215,116,0.25)] transition duration-300 cursor-pointer">

            <FaFacebookF className="text-[#fff8dc] text-2xl" />

            </div></a>



            {/* YOUTUBE */}
            <a href="https://www.youtube.com/watch?v=wU2LJX3qLd4" target="_blank">
            <div className="p-4 rounded-2xl bg-white/5 border border-[#f7d774]/10 hover:bg-[#f7d774]/10 hover:border-[#f7d774]/40 hover:shadow-[0_0_20px_rgba(247,215,116,0.25)] transition duration-300 cursor-pointer">

              <FaYoutube className="text-[#fff8dc] text-2xl" />

            </div></a>

          </div>

        </div>

      </div>



      {/* BOTTOM */}
      <div className="mt-20 pt-8 border-t border-[#f7d774]/10 text-center">

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-[#a88f65]">

          <p>
            © 2026 Bhanwarilal Mithaiwala.
            Crafted with tradition and taste.
          </p>



          <div className="relative group cursor-pointer">

            <span className="text-[#f7d774] hover:text-[#fff8dc] transition duration-300">

              Site by Mradul Somani

            </span>



            {/* HOVER CARD */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 bg-[#1f140a] border border-[#f7d774]/20 rounded-2xl p-4 w-[260px] shadow-2xl">

              <p className="text-[#fff8dc] text-sm">
                📞 +91 79870 24340
              </p>

              <p className="text-[#fff8dc] text-sm mt-2">
                ✉️ mradulsomani2006@gmail.com
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>

  )
}

export default Footer