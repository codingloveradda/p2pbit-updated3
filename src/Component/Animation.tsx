import Image from "next/image";
import logoIMG from "../../public/images/Page-1/Logo.svg";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import bgIMG from "../../public/images/Page-1/animation/BG.png";
import bgtwoIMG from "../../public/images/Page-1/animation/test.jpg";
import OuterIMG from '../../public/images/Page-1/animation/outer.png';
import innerIMG from "../../public/images/Page-1/animation/inner.png"
import { url } from "inspector";


const Animation = () => {
    return (
        <div className=" z-[100] br600:h-[450px] br1024:h-[520px] br1220:h-[600px] br1660:h-[auto] grid br1024:grid-cols-2 br320:grid-cols-1 items-center  bg-black bg-p2pbit"
        style={{ background: `url(${bgIMG.src})`, backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPosition: "-325px -320px" }}>

            <div className="overflow-hidden br320:hidden br1024:block" >
                <div className="relative  h-[900px]" >
                    <div className="absolute br1660:top-[-19.5%] br1660:left-[-35%] br1440:top-[-19.5%] br1440:left-[-32%]">
                        <Image src={OuterIMG} className="w-[1150px]  outerIMG opacity-[30%]" alt="" />
                    </div>
                    <div className="absolute br1660:top-[-4.5%] br1660:left-[-19.1%]">
                        <Image src={innerIMG} className="innerIMG w-[850px] opacity-[30%]" alt="" />
                    </div>
                    <div className="h-[900px]">
                        <Image src={logoIMG} className="absolute z-[10001] br1024:top-[38%] br1024:left-[28%] br1220:top-[38%] br1220:left-[27%] br1440:top-[38%] br1440:left-[20%] 
                         br320:h-[180px] br320:w-[180px] br1024:w-[80px] br1024:h-[80px] br1220:w-[100px] br1220:h-[100px] br1440:w-[120px] br1440:h-[120px] br1660:w-[120px] br1660:h-[120px]" alt="" />
                    </div>
                </div>
            </div>


            <div className="br1024:text-start br320:text-center br320:mx-5 br1024:mx-[0] pl-[15px]">
                <h3 className="text-3xl font-bold p_bit  br320:my-[20px] br768:my-[40px]">What is P2PBIT</h3>
                <h1 className="future font-black">FUTURE</h1>
                <div className="br768:mt-24">
                    <p className="text-[#C7D0DB] br1024:w-[500px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore
                    </p>
                    <p className="br320:my-3 br768:my-6 text-[#C7D0DB] br1024:w-[500px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
                        Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam
                        in arcu cursus euismod.
                        .</p>
                </div>
                <div className="w-[150px]">
                    <Link href="#" className="btn_hover br320:my-4 br600:my-8 text-lg pb-1  font-semibold flex items-center">White Paper <span className="pl-3 arrow_hover">
                        <BsArrowRight /></span></Link>
                </div>
            </div>
        </div>
    )
}


export default Animation;