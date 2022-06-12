import { FiSearch } from "react-icons/fi"
import { RiMenu4Line } from "react-icons/ri"
import NavItem from "./NavItem.js"

export default function Navbar() {
    return (
        <nav className="font-opensans">
            <div className="px-5 lg:px-0 h-16 lg:max-w-maxwidth lg:mx-auto flex items-center justify-between">
                <section>
                    <h1 className="font-notoserif text-dark-green font-bold text-lg" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                        <a href="#Home">furni.shop</a>
                    </h1>
                </section>
                {/* flex */}
                <menu className="items-center space-x-12 flex">
                    <section data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
                        <NavItem page="#Home" itemTitle='Home' />
                    </section>
                    <section data-aos="fade-left" data-aos-once="true" data-aos-duration="1400">
                        <NavItem page="#About" itemTitle='About' />
                    </section>
                    <section data-aos="fade-left" data-aos-once="true" data-aos-duration="1800">
                        <NavItem page="#Features" itemTitle='Features' />
                    </section>
                    <section data-aos="fade-left" data-aos-once="true" data-aos-duration="2200">
                        <NavItem page="#Contact" itemTitle='Contact' />
                    </section>
                </menu>

                <section className="flex items-center lg:space-x-10 space-x-7">
                    <a href="/#" data-aos="fade-left" data-aos-once="true" data-aos-duration="2000"><FiSearch /></a>
                    {/* <section className="flex items-center border border-dark-green rounded-full pl-5 pr-4 py-2 space-x-2">
                        <input type="text" name="search" placeholder="Search something..." className="focus:outline-none text-sm w-60" />
                        <a href="/#" className="text-dark-green"><FiSearch /></a>
                    </section> */}
                    <button className="hover:text-dark-green cursor-pointer" data-aos="fade-left" data-aos-once="true" data-aos-duration="2200">
                        <RiMenu4Line />
                    </button>
                </section>
            </div>
        </nav>
    )
}
