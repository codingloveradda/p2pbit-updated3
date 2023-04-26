import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../../public/images/CommonImages/Logo.svg';
import { TfiMenu, TfiClose } from "react-icons/tfi";

function NavBar() {
    const [navbar, setNavbar] = useState(false);

    

    return (

        <div>
            {/* fixed top-0 left-0 right-0 z-10 */}
            <nav className="w-full  nav_wrapper">
                <div className="justify-between items-center br768:flex ">
                    <div className="flex justify-between  h-[70px] items-center br320:pl-5 br768:pl-8 br1024:pl-[80px]">
                        {/* LOGO */}
                        <div >
                            <Link href="/Home" >
                                <Image src={Logo} className="logo w-[35px] h-[35px]" alt="Logo" />
                            </Link>
                        </div>
                        {/* HAMBURGER BUTTON FOR MOBILE */}
                        <div className="br768:hidden pr-5">
                            <button className="text-white text-2xl " onClick={() => setNavbar(!navbar)}>
                                {navbar ? (<div className=''><TfiClose /></div>) : (<div className=''><TfiMenu /></div>)}   
                            </button>
                        </div>
                    </div>
                    <div className={`br768:block justify-self-center  
                        ${navbar ? 'tr ease-in-out duration-[0.6s] br320:fixed br320:right-[0%] br768:static z-[200] w-[70%] br320:h-[100vh] br768:h-[auto] br320:bg-black' 
                            : " w-[70%] br320:h-[100vh] br768:h-[auto] ease-in-out duration-[0.6s] br320:fixed br320:right-[-70%] br768:static z-[200]"}`
                            }>

                        <ul className="items-center justify-between br768:flex br768:gap-[20px] br1024:gap-[40px] br1220:gap-[80px] br768:pr-[32px] br1024:pr-[80px] ">
                                <li className="br320:text-sm br768:text-lg font-semibold my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
                                    <Link href="/Swap" onClick={() => setNavbar(!navbar)}>
                                        Swap
                                    </Link>
                                </li>
                                <li className="br320:text-sm br768:text-lg font-semibold my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
                                    <Link href="/Token" onClick={() => setNavbar(!navbar)}>
                                        Token Metrics
                                    </Link>
                                </li>
                                <li className="br320:text-sm br768:text-lg font-semibold my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
                                    <Link href="/White" onClick={() => setNavbar(!navbar)}>
                                        White Paper
                                    </Link>
                                </li>
                                <li className="br320:text-sm br768:text-lg font-semibold my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
                                    <Link href="/Journey" onClick={() => setNavbar(!navbar)}>
                                        Milestone
                                    </Link>
                                </li>
                                <li className="br320:text-sm br768:text-lg font-semibold my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
                                    <Link href="/Community" onClick={() => setNavbar(!navbar)}>
                                        Community
                                    </Link>
                                </li>
                                <li className="br320:text-sm br768:text-lg font-semibold my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
                                    <Link href="Form" onClick={() => setNavbar(!navbar)}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>  

                            {/* <ul className="items-center justify-between br768:flex br768:gap-[20px] br1024:gap-[40px] br1220:gap-[80px] br768:pr-[32px] br1024:pr-[80px]">
                                <li className="text-lg font-semibold my-2 br320:mx-5 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-gradient-to-r from-blue-500 to-cyan-500  br768:bg-gradient-to-r from-black to-black  rounded-2xl">
                                    <Link href="/Swap" onClick={() => setNavbar(!navbar)}>
                                        Swap
                                    </Link>
                                </li>
                                <li className="text-lg font-semibold my-2 br320:mx-5 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-gradient-to-r from-blue-500 to-cyan-500  br768:bg-gradient-to-r from-black to-black  rounded-2xl">
                                    <Link href="/Token" onClick={() => setNavbar(!navbar)}>
                                        Token Metrics
                                    </Link>
                                </li>
                                <li className="text-lg font-semibold my-2 br320:mx-5 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-gradient-to-r from-blue-500 to-cyan-500  br768:bg-gradient-to-r from-black to-black  rounded-2xl">
                                    <Link href="/White" onClick={() => setNavbar(!navbar)}>
                                        White Paper
                                    </Link>
                                </li>
                                <li className="text-lg font-semibold my-2 br320:mx-5 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-gradient-to-r from-blue-500 to-cyan-500  br768:bg-gradient-to-r from-black to-black  rounded-2xl">
                                    <Link href="Journey" onClick={() => setNavbar(!navbar)}>
                                        Milestone
                                    </Link>
                                </li>
                                <li className="text-lg font-semibold my-2 br320:mx-5 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-gradient-to-r from-blue-500 to-cyan-500  br768:bg-gradient-to-r from-black to-black  rounded-2xl">
                                    <Link href="/Page404" onClick={() => setNavbar(!navbar)}>
                                        Community
                                    </Link>
                                </li>
                                <li className="text-lg font-semibold my-2 br320:mx-5 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-gradient-to-r from-blue-500 to-cyan-500  br768:bg-gradient-to-r from-black to-black  rounded-2xl">
                                    <Link href="Form" onClick={() => setNavbar(!navbar)}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul> */}

                        {/* <ul className="items-center justify-between br768:flex br768:gap-[10px] br1024:gap-[40px] br1220:gap-[80px] br768:pr-[32px] br1024:pr-[80px]">
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:768:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="/Swap" onClick={() => setNavbar(!navbar)}>
                                    Swap
                                </Link>
                            </li>
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:768:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="/Token" onClick={() => setNavbar(!navbar)}>
                                    Token Metrics
                                </Link>
                            </li>
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:768:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="/White" onClick={() => setNavbar(!navbar)}>
                                    White Paper
                                </Link>
                            </li>
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:768:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="Journey" onClick={() => setNavbar(!navbar)}>
                                    Milestone
                                </Link>
                            </li>
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:768:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="/Page404" onClick={() => setNavbar(!navbar)}>
                                    Community
                                </Link>
                            </li>
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:768:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="Form" onClick={() => setNavbar(!navbar)}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul> */}

                        {/* <ul className="items-center justify-between br768:flex br768:gap-[10px] br1024:gap-[40px] br1220:gap-[80px] br768:pr-[32px] br1024:pr-[80px]">
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="/Swap" onClick={() => setNavbar(!navbar)}>
                                    Swap
                                </Link>
                            </li>
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="/Token" onClick={() => setNavbar(!navbar)}>
                                    Token Metrics
                                </Link>
                            </li>
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="/White" onClick={() => setNavbar(!navbar)}>
                                    White Paper
                                </Link>
                            </li>
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="Journey" onClick={() => setNavbar(!navbar)}>
                                    Milestone
                                </Link>
                            </li>
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="/Page404" onClick={() => setNavbar(!navbar)}>
                                    Community
                                </Link>
                            </li>
                            <li className="text-lg font-semibold text-center br320:p-1 br768:p-0 br320:bg-[#656666] br320:mx-2 br:mx-0 my-1 br320:text-black br768:text-[inherit] br768:bg-inherit border-b border-black ">
                                <Link href="Form" onClick={() => setNavbar(!navbar)}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul> */}

                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;
