import logo from "../assets/logo.png"
import { MapPin, Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] flex items-center justify-between px-10 py-3 bg-gradient-to-b from-[#f7d774]/80 via-[#d4a017]/65 to-[#b8860b]/75 backdrop-blur-md border border-[#fff1b8]/40 rounded-2xl text-[#2b1a05] shadow-2xl z-50">
            <div>
                <HashLink smooth to="/#home">
                    <img src={logo} alt="logo" className="h-20 object-contain" />
                </HashLink>
            </div>

            <div className="hidden md:block">
                <ul className="flex gap-10 text-lg font-medium items-center">

                    <HashLink smooth to="/#categories">
                    <li className="cursor-pointer px-4 py-2 rounded-xl hover:text-[#fff8dc] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,248,220,0.25)] transition duration-300">
                    Items
                    </li>
                    </HashLink>
                    <HashLink smooth to="/#bestsellers">
                    <li className="cursor-pointer px-4 py-2 rounded-xl hover:text-[#fff8dc] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,248,220,0.25)] transition duration-300">
                    BestSellers
                    </li>
                    </HashLink>
                    <HashLink smooth to="/#about">
                    <li className="cursor-pointer px-4 py-2 rounded-xl hover:text-[#fff8dc] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,248,220,0.25)] transition duration-300">
                    About
                    </li>
                    </HashLink>

                </ul>
            </div>

            <div className="flex items-center gap-4">
                <Menu
                    className="md:hidden cursor-pointer p-2 rounded-xl hover:bg-white/10 hover:text-[#fff8dc] hover:shadow-[0_0_15px_rgba(255,248,220,0.25)] transition duration-300"
                    size={45}
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <Link smooth to="/locations">
                <MapPin size={45} className="cursor-pointer p-2 rounded-xl hover:bg-white/10 hover:text-[#fff8dc] hover:shadow-[0_0_15px_rgba(255,248,220,0.25)] transition duration-300" />
                </Link>
            </div>

            <div
                className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-[#d4a017]/80 backdrop-blur-xl border border-[#f7d774]/30 rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-2xl transition-all duration-500 ease-in-out ${
                    
                    menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10 pointer-events-none"

                }`}
            >
                    <HashLink smooth to="/#categories">
                    <li className="list-none cursor-pointer px-4 py-3 rounded-xl hover:text-[#fff8dc] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,248,220,0.25)] transition duration-300">
                        Items
                    </li>
                    </HashLink>

                    <HashLink smooth to="/#bestsellers">
                    <li className="list-none cursor-pointer px-4 py-3 rounded-xl hover:text-[#fff8dc] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,248,220,0.25)] transition duration-300">
                        BestSellers
                    </li>
                    </HashLink>

                    <HashLink smooth to="/#about">
                    <li className="list-none cursor-pointer px-4 py-3 rounded-xl hover:text-[#fff8dc] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,248,220,0.25)] transition duration-300">
                        About
                    </li>
                    </HashLink>

                    </div>

                
            

        </nav>
    )
}

export default Navbar