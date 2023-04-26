import Link from "next/link";
import { useState } from "react";
import { FaCog } from "react-icons/fa";
import { TbArrowsDownUp, TbDotsVertical } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import Swap_settings from "@/Component/Swap_settings";
import { CgLoadbarSound } from "react-icons/cg";



const Swap = () => {

    const [swap, setSwap] = useState(
        {
            Currency: "",
            Method: "",
        }
    )

    const swapHandler = (e: { target: { name: any; value: any } }) => {
        console.log(e.target.name);
        console.log(e.target.value);

        const { name, value } = e.target;
        setSwap((pre) => {
            return {
                ...pre, [name]: value
            }
        })
    }

    return (
        <div className="Page_6 br600:mx-[40px] br1220:mx-[80px] br320:pb-8 br600:pb-24">
            <div className="br320:pt-6 br480:pt-8 br320:pb-2 br600:pt-10 br768:pb-3 br768:pt-12 flex justify-between items-end swap">
                <p className="body_heading br600:ml-0 br320:ml-3">Swap</p>
                <div className="flex items-center justify-center connect_wallet br600:mr-0 br320:mr-3">
                    <div className="br320:mr-1 br768:mr-6 relative analytic_hover">
                        <span><TbDotsVertical /></span>

                        <div className="absolute top-[50px] right-[-0px] w-[280px] analytic flex items-end  rounded-[15px] py-[20px] px-[30px]">
                            <span className="text-4xl"><CgLoadbarSound /></span>
                            <p>View more analytics</p>
                        </div>
                    </div>
                    <div className="flex">
                        <p>Connect Wallet</p>
                        <span className="pl-3 pt-1 arrow_hover"><BsArrowRight /></span>
                    </div>
                </div>
            </div>

            <div className="swap_botton br320:mt-12 br480:mt-16 br600:mt-20 br768:mt-24 text-center">
                <a href="#" className="swap_other">Swap to Other </a>
                <a href="#" className="Matic_P2P">Swap to Matic P2P </a>
            </div>
            {/* <!--Swap meter--> */}
            <div className="flex justify-center">
                <div className="br320:h-[333px] br480:h-[383px] br600:h-[433px] w-[765px] text-center mt-24 swap_meter relative">
                    <div className="gear_hover">
                        <input type="checkbox" className="hidden" id="gear_set" />
                        <label htmlFor="gear_set">
                            <span className="absolute top-5 right-5 text-2xl swap_setting"><FaCog /></span>
                        </label>
                        <div className="absolute top-[60px] right-5 gear_setting z-[100]">
                            <Swap_settings />
                        </div>
                    </div>
                    <span className="absolute br320:top-[35.5%] br480:top-[35%] br600:top-[37%] br768:top-[38%] br320:right-[48%] br480:right-[47.5%] swap_setting exchange">
                        <TbArrowsDownUp />
                    </span>
                    <div className="flex justify-center flex-col items-center">
                        <div className="flex justify-center m">
                            <div>
                                <input type="text"
                                    placeholder="00000"
                                    className="currency_input"
                                    name="Currency"
                                    value={swap.Currency}
                                    onChange={swapHandler}
                                />
                            </div>
                            <div className="Select_currency pt-2">
                                <select className="select_input br320:text-[14px] br480:text-[16px] " >
                                    <option selected>Select Currency</option>
                                    <option>India</option>
                                    <option>Nepal</option>
                                    <option>US doller</option>
                                    <option>Euro</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <div>
                                <input type="text"
                                    placeholder="00000"
                                    className="currency_input"
                                    name="Method"
                                    value={swap.Method}
                                    onChange={swapHandler}
                                />
                            </div>
                            <div className="Select_currency">
                                <select className="select_input br320:text-[14px] br480:text-[16px]">
                                    <option value="" selected>P2PBIT Method</option>
                                    <option>India</option>
                                    <option>Nepal</option>
                                    <option>US doller</option>
                                    <option>Euro</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <Link href="/" className="btn_swap br320:py-[8px] br480:py-[14px] br320:px-[50px] font-semibold">Swap</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Swap
