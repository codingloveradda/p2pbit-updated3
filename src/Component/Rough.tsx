import React from 'react';
import logoIMG from "../../public/images/CommonImages/Logo.svg";
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";
import Image from 'next/image';
import musk from "../../public/images/Page-1/Mask.png";





const Rough = () => {
    return (
        <div>

            {/* <div className="br600:h-[450px] br1024:h-[600px] grid br1024:grid-cols-2 br320:grid-cols-1 items-center bg-p2pbit overflow-hidden ">
                <div className=" relative br600:h-[450px] br1024:h-[600px] overflow-hidden animate" style={{background:`url(${anyIMG.src})`,backgroundRepeat:"no-repeat",backgroundSize: "cover", backgroundPosition: "center center",}}>
                    <div className=''>
                        <Image src={logoIMG} className="absolute top-[30%] left-[15%] br320:h-[180px] br320:w-[180px] br1024:w-[220px] br1024:h-[220px]" alt="Logo" />
                    </div>
                </div>


                <div className="br1024:text-start br320:text-center br320:mx-5 br1024:mx-[0]">
                    <h3 className="text-3xl font-bold p_bit  br320:my-[20px] br768:my-[40px]">What is P2PBIT</h3>
                    <h1 className="future font-black">FUTURE</h1>
                    <div className="br768:mt-24">
                        <p className="text-[#C7D0DB] br1024:w-[500px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore</p>
                        <p className="br320:my-3 br768:my-6 text-[#C7D0DB] br1024:w-[500px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
                            Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam
                            in arcu cursus euismod.
                            .</p>
                    </div>
                    <div className="w-[150px]">
                        <Link href="#" className="br320:my-4 br600:my-8 text-lg pb-1 hover:border-b hover:duration-700 font-semibold flex items-center">White Paper <span className="ml-3">
                            <BsArrowRight /></span></Link>
                    </div>
                </div>
            </div> */}


            <div className="br600:h-[450px] br1024:h-[600px] grid br1024:grid-cols-2 br320:grid-cols-1 items-center bg-p2pbit overflow-hidden "
            style={{background:`url(${musk.src})`,backgroundRepeat:"no-repeat",backgroundSize: "cover", backgroundPosition: "center center",}}>
                <div className=" relative br600:h-[450px] br1024:h-[600px] overflow-hidden animate">
                    <div className=''>
                        <Image src={logoIMG} className="absolute top-[38%] left-[21%] br320:h-[180px] br320:w-[180px] br1440:w-[120px] br1440:h-[120px] br1660:w-[140px] br1660:h-[140px]" alt="Logo" />
                    </div>
                </div>  


                <div className="br1024:text-start br320:text-center br320:mx-5 br1024:mx-[0]">
                    <h3 className="text-3xl font-bold p_bit  br320:my-[20px] br768:my-[40px]">What is P2PBIT</h3>
                    <h1 className="future font-black">FUTURE</h1>
                    <div className="br768:mt-24">
                        <p className="text-[#C7D0DB] br1024:w-[500px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore</p>
                        <p className="br320:my-3 br768:my-6 text-[#C7D0DB] br1024:w-[500px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
                            Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam
                            in arcu cursus euismod.
                            .</p>
                    </div>
                    <div className="w-[150px]">
                        <Link href="#" className="br320:my-4 br600:my-8 text-lg pb-1 hover:border-b hover:duration-700 font-semibold flex items-center">White Paper <span className="ml-3">
                            <BsArrowRight /></span></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Rough;