import Image from "next/image";
import Link from "next/link";

import sayhelloBgIMG from "../../public/images/page_3/sayhelloBG.png";
import { BsArrowRight } from "react-icons/bs";
import BGImage from "../../public/images/CommonImages/p2pbg.jpg";
import BGImageCrop from "../../public/images/CommonImages/p2pbgCroped.jpg";
import logoIMG from "../../public/images/Page-1/Logo.svg";
import StarNetworkIMG from "../../public/images/Page-1/StarNetwork.png";
import DollerIMG from "../../public/images/Page-1/Doller.svg";
import InfinityIMG from "../../public/images/Page-1/Infinity.svg";
import Navbarl from "../Component/Header/Navbarl";
import Footer from "@/Component/Footer";
import BGliveIMG from "../../public/images/Page-1/bgsec1.jpg"
import musk from "../../public/images/Page-1/Mask.png";
import Graph from "@/Component/Graph";
import Animation from "@/Component/Animation";

const Homemain = () => {
    return (
        <div className="posit">
            <div className='br768:h-[550px] br480:h-[350px] br320:h-[300px] br1024:h-[830px] relative flex justify-center items-end'
                style={{ backgroundImage: `url(${BGImageCrop.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", }}>
                <div className="absolute br1660:top-[38%] br1660:left-[42.5%] br1440:top-[25%] br1220:top-[28%] br1220:left-[40.5%] br1024:top-[29%] br1024:left-[38.5%] br768:top-[29%] br768:left-[40%] 
                                    br600:top-[29%] br600:left-[41%] br480:top-[29%] br480:left-[40%] br360:top-[29%] br360:left-[40%] br320:top-[29%] br320:left-[35%] ">
                    <Image src={logoIMG} className="br1660:w-[300px] br1660:h-[300px] br1440:w-[300px] br1440:h-[300px] br1220:w-[260px] br1220:h-[260px] br1024:w-[260px] 
                            br1024:h-[260px] br768:w-[180px] br768:h-[180px] br600:w-[120px] br600:h-[120px] br480:w-[120px] br480:h-[120px] br320:w-[100px] br320:h-[100px]" alt="Logo" />
                </div>
                <div className="mb-8">
                    <h1 className="page_heading br320:text-[8px] br480:text-[10px] br600:text-[12px] br768:text-[16px] br1024:text-[24px]">THE FUTURE OF VIRTUAL CURRENCY</h1>
                </div>
            </div>
            {/* br600:px-[40px] pt-5 br320:h-[auto] br1220:h-[500px] br1220:px-[100px] br320:px-[20px] */}
            <div className="bg-live_status">
                <div className=" relative "
                    style={{ backgroundImage: `url(${BGliveIMG.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", }}>
                    <div className="w-[100%] BG-Black br600:px-[40px] pt-5 br320:h-[auto] br1220:h-[500px] br1220:px-[100px] br320:px-[20px]">
                        <div className="">
                            <div className="py-5 br768:px-[50px] br1024:px-[100px] br768:mt-8 br1024:mt-16 br1220:mt-24 live_status flex br768:justify-between br768:flex-row br320:flex-col">
                                <div className="text-center br768:border-none br320:border-b br1440:px-12 br1220:px-4 br1660:px-16 text-white">
                                    <h1 className="br320:text-sm br1220:text-base br1440:text-xl py-4 font-semibold">P2P BIT</h1>
                                    <p className="pb-1">Primary Token</p>
                                </div>
                                <div className="text-center br768:border-none br320:border-b br1440:px-12 br1220:px-4 br1660:px-16">
                                    <h1 className="br320:text-sm br1220:text-base br1440:text-xl py-4 font-semibold">$0.984</h1>
                                    <p className="pb-1">Current Price</p>
                                </div>
                                <div className="text-center br768:border-none br320:border-b br1440:px-12 br1220:px-4 br1660:px-16">
                                    <h1 className="br320:text-sm br1220:text-base br1440:text-xl py-4 font-semibold">100 000 00</h1>
                                    <p className="pb-1">Total Supply</p>
                                </div>
                                <div className="text-center br768:border-none br320:border-b br1440:px-12 br1220:px-4 br1660:px-16">
                                    <h1 className="br320:text-sm br1220:text-base br1440:text-xl py-4 font-semibold">39 619 383</h1>
                                    <p className="pb-1">Circulating Supply</p>
                                </div>
                                <div className="text-center br1440:px-12 br1220:px-4 br1660:px-16">
                                    <h1 className="br320:text-sm br1220:text-base br1440:text-xl py-4 font-semibold">$39 003 327</h1>
                                    <p>Market Cap</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-col">
                                <p className="br320:mt-8 br1024:mt-16 br1220:mt-24 br768:w-[500px] br320:text-justify br768:text-center text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                <div className="w-[150px] br320:self-start br768:self-center ">
                                    <Link href="#" className="br320:my-4 br600:my-8 ml-1 text-lg pb-1 hover:border-b hover:duration-700 font-semibold flex items-center btn_hover">View More
                                        <span className="ml-4 arrow_hover">
                                            <BsArrowRight />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Animation />

            {/* Live Status */}
            <div className="py-8 br320:px-[40px] br1024:px-[100px] br1440:px-[250px] doller_infinity" style={{ backgroundImage: `url(${sayhelloBgIMG.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>

                <div>
                    <Graph />
                </div>

                <div className="br320:py-5 br768:py-8">
                    <h1 className="text-center br320:text-[24px] br768:text-[36px] market_perfor">P2P BIT Market Performance</h1>

                    <div className="text-center br320:mt-12 br768:mt-24">
                        <h3 className="br320:text-[24px] br768:text-[36px] font-bold p_bit_2 ">P2PBIT Price</h3>
                        <h1 className="future-2 font-black br768:block br320:hidden" >PRESENT VALUE</h1>
                    </div>

                </div>
                <div className="flex br320:items-center br1024:justify-around br1024:mt-24 br320:flex-col br1024:flex-row ">
                    <div className="br320:w-[280px] br768:w-[400px] h-[200px] live_price br1024:mb-0 br320:mb-8 neumorphism-1">
                        <div className="border-r pr-5 w-[60px] ">
                            <Image src={InfinityIMG} className="h-[66px]" alt="Infinity Image" />

                        </div>
                        <div className="">
                            <p className="text-4xl font-bold">40.945</p>
                            <p className="text-xl text-green-400 font-bold">8.93% ↗</p>
                        </div>
                    </div>
                    <div className="br320:w-[280px] br768:w-[400px] h-[200px] br320:mt-5 br768:mt-0 live_price neumorphism-1">
                        <div className="border-r pr-5 w-[60px]">
                            <Image src={DollerIMG} alt="Logo" />

                        </div>
                        <div className="">
                            <p className="text-4xl font-bold">64.678</p>
                            <p className="text-xl text-green-400 font-bold">8.93% ↗</p>
                        </div>
                    </div>
                </div>

                <div className="br320:mt-8 br1024:mt-24 text-center">
                    <p className="text-center mb-12">Easily purchase P2PBIT token with your credit/debit card.. Iaculis urna id
                        volutpat lacus laoreet.</p>
                    <div className="br320:mt-6 br1024:my-12">
                        <Link href="/" className="btn_swap br320:py-[8px] br480:py-[14px] br320:px-[50px] font-semibold">Swap</Link>
                    </div>
                </div>
            </div>

            {/* p2p help Community */}
            <div className=" br320:h-[auto] grid br1024:grid-cols-2 br320:grid-cols-1 items-center" >
                <div className="logo_image flex justify-center items-center">
                    <Image src={StarNetworkIMG} alt="ffffff" />
                </div>
                <div className="br768:mx-[50px] br1024:mx-[40px] br320:mx-5 br320:text-center br1024:text-start">
                    <div>
                        <h3 className="br320:text-2xl br768:text-3xl font-bold p_bit  br320:my-[20px] br768:my-[40px]">P2P Help Community</h3>
                        <h1 className="future font-black">JOIN</h1>
                    </div>
                    <div className="br320:mt-6 br1024:mt-24">
                        <p className="text-[#C7D0DB] br320:w-[auto] br1024:w-[460px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore</p>
                        <p className="my-6 text-[#C7D0DB] br320:w-[auto] br1024:w-[460px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
                            Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam
                            in arcu cursus euismod.
                        </p>
                    </div>
                    <div className="w-[150px]">
                        <Link href="#" className="btn_hover br320:my-4 br600:my-8 text-lg pb-1 font-semibold flex items-center">White Paper <span className="arrow_hover ml-3">
                            <BsArrowRight /></span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homemain
