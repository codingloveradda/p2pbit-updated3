import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import Logo from '../../../public/images/CommonImages/Logo.svg';



const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <header>
      <nav className={`nav`}>
        <div className="br320:pl-5 br768:pl-8 br1220:pl-[80px]">
          <Link href={"/Homemain"}>
            <Image src={Logo} className="logo w-[35px] h-[35px]" alt="Logo" />
          </Link>
        </div>



        <div className="br768:hidden pr-5">
          <button className="text-white text-2xl " onClick={() => setNavActive(!navActive)}>
            {navActive ? (<div className=''><TfiClose /></div>) : (<div className=''><TfiMenu /></div>)}
          </button>
        </div>

        <div className={`${navActive ? "active" : ""} nav__menu-list`}>

          <ul className="items-center justify-between br768:flex br768:gap-[20px] br1024:gap-[40px] br1220:gap-[80px] br768:pr-[32px] br1220:pr-[80px] ">
            <li className="br320:text-sm br768:text-base font-medium my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
              <Link href="/Swap" onClick={() => setNavActive(false)}>
                Swap
              </Link>
            </li>
            <li className="br320:text-sm br768:text-base font-medium my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
              <Link href="/Token" onClick={() => setNavActive(false)}>
                Token Metrics
              </Link>
            </li>
            <li className="br320:text-sm br768:text-base font-medium my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
              <Link href="/White" onClick={() => setNavActive(false)}>
                White Paper
              </Link>
            </li>
            <li className="br320:text-sm br768:text-base font-medium my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
              <Link href="/Journey" onClick={() => setNavActive(false)}>
                Milestone
              </Link>
            </li>
            <li className="br320:text-sm br768:text-base font-medium my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
              <Link href="https://p2p.help/" onClick={() => setNavActive(false)}>
                Community
              </Link>
            </li>
            <li className="br320:text-sm br768:text-base font-medium my-3 br320:mx-3 br768:mx-0 text-center br320:p-1 br768:p-0 br320:bg-[#1f74f2] br768:bg-inherit rounded-[5px]">
              <Link href="/Form" onClick={() => setNavActive(false)}>
                Contact Us
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
