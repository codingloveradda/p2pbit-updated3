import Image from 'next/image'
import Logo from '../../../public/images/CommonImages/Logo.svg';
import Link from 'next/link';
import { TfiMenu } from "react-icons/tfi";


export default function Navbar() {


    return (
        <>
            {/* Navbar */}
            <div className="nav-wrapper">
                <nav className="h-[80px] hamburger flex justify-between items-center br320:px-5 br768:px-8 br1024:px-20">
                    <div className="logo w-[35px] h-[35px]">
                        <Link href="/Home">
                            <Image
                                src={Logo}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="text-xl text-white">
                        <input type="checkbox" id="check" />
                        <label htmlFor="check" className="br320:block checkbtn br768:hidden">
                            <TfiMenu />
                        </label>
                        <ul className="nav-items nav_ul font-medium br768:flex br768:gap-[20px] br1024:gap-[40px] br1220:gap-[80px]">
                            <li className='mb-3'><Link href="../../pages/Swap">Swap</Link></li>
                            <li className='mb-3'><Link href="/White">White Paper</Link></li>
                            <li className='mb-3'><Link href="/Token">Token Metrics</Link></li>
                            <li className='mb-3'><Link href="/Journey">Milestone</Link></li>
                            <li className='mb-3'><Link href="#">Community</Link></li>
                            <li><Link href="/Form">Contact Us</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}