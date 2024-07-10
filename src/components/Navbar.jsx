import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [navSelect, setNavSelect] = useState(1)


    return (
        <>
            <div className="bg-[#222831] shadow-2xl fixed top-0 left-0 w-full">
                <div className=' md:flex md:justify-between md:items-center border-b-2 py-4 px-6 md:px-20 lg:px-52 text-white transition-all font-Pop font-light '>
                    <div className="text-2xl font-medium ">
                        RSumpay
                    </div>
                    <div className="absolute top-4 right-4 md:hidden " onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <IoMdClose className="text-3xl " /> : <IoMdMenu className="text-3xl " />}

                    </div>
                    <ul className={`${menuOpen ? 'static' : 'hidden transition-all'} first-letter: md:flex gap-5 mt-5 md:mt-0  lg:pr`} >
                        <ScrollLink to="welcome-section" smooth={true} duration={500} offset={-200} onClick={() => setNavSelect(1)}>
                            <li className={`text-center p-1  border-b border-slate-400 md:border-b-0 cursor-pointer  ${navSelect === 1 ? 'text-[#00ADB5]' : ''} `}>Welcome</li>
                        </ScrollLink>

                        <ScrollLink to="skills-section" smooth={true} duration={500} offset={-200} onClick={() => setNavSelect(2)}>
                            <li className={`text-center p-1  border-b border-slate-400 md:border-b-0 cursor-pointer  ${navSelect === 2 ? 'text-[#00ADB5]' : ''} `}>Skills</li>
                        </ScrollLink>

                        <ScrollLink to="portfolio-section" smooth={true} duration={500} offset={-100} onClick={() => setNavSelect(3)}>
                            <li className={`text-center p-1  border-b border-slate-400 md:border-b-0 cursor-pointer  ${navSelect === 3 ? 'text-[#00ADB5]' : ''} `}>Portfolio</li>
                        </ScrollLink>
                        <ScrollLink to="contact-section" smooth={true} duration={500} offset={-100} onClick={() => setNavSelect(4)}>
                            <li className={`text-center p-1   md:border-b-0 cursor-pointer  ${navSelect === 4 ? 'text-[#00ADB5]' : ''} `}>Contacts</li>
                        </ScrollLink>
                    </ul>
                </div>
            </div>

        </>
    )
}










{/* <div className="w-full bg-[#222831] p-5 fixed top-0 left-0 min-h-20 shadow-2xl">
                <ul className={`absolute md:static md:flex md:gap-20 lg:gap-x-40 text-white md:justify-center items-baseline bg-[#222831] left-0 w-full md:pl-0 pl-9 top-20 ${menuOpen ? 'top-20' : 'top-[-490px]'} shadow-2xl transition-all`}>
                    <Link to='/'><li className="md:my-0 my-3">Welcome</li></Link>
                    <Link to={'/skills'}><li className="md:my-0 my-3">Skills</li></Link>
                    <Link ><li className="text-3xl hidden md:block">RSumpay</li></Link>
                    <Link to='/portfolio'><li className="md:my-0 my-3">Portfolio</li></Link>
                    <Link to='/contacts'><li className="md:my-0 my-3">Contacts</li></Link>
                </ul>
                <div className="absolute top-6 right-5 block md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <IoMdClose className="text-3xl text-white" /> : <IoMdMenu className="text-3xl text-white" />}
                </div>
            </div> */}