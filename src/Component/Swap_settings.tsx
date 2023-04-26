import React from 'react';
import Link from 'next/link';
import { HiOutlineInformationCircle } from "react-icons/hi2";


const Swap_settings = () => {
    return (
        <div className='swap_setting_hover w-[350px] '>
            <div className='setting_head'>
                <h1>Settings</h1>
            </div>
            <div className='Slippage_info'>
                <div >
                    <div className='flex items-center'>
                        <h1>Slippage Tolerance</h1> <span className='ml-2'> <HiOutlineInformationCircle /> </span>
                    </div>
                    <div className=' flex items-center '>
                        <div className='mr-[15px]'>
                            <Link href="/" className="btn_swap br320:py-[8px] br480:py-[12px] br320:px-[30px] font-semibold">Auto</Link>
                        </div>
                        <div className='my-[12px] py-[12px] pl-[27px] pr-[90px] swap_persentage'>
                            <input type="text" className='w-[50px] swap_hover_input' placeholder='00.10' /><span>%</span>

                        </div>
                    </div>
                </div>
                <div >
                    <div className='flex items-center'>
                        <h1>Slippage Tolerance</h1> <span className='ml-2'> <HiOutlineInformationCircle /> </span>
                    </div>
                    <div className=' flex items-center '>
                        <div className='my-[12px] py-[12px] px-[30px] swap_persentage'>
                            <input type="text" className='w-[50px]  swap_hover_input' placeholder='30' />
                        </div>
                        <div className='ml-[15px]'>
                            <h1 className="font-semibold">Minutes</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='interface_setting'>
                <h1>Interface Settings</h1>
                <div className='flex justify-between toggle_one h-[50px]'>
                    <div className='flex items-end'>
                        <h1>Auto Router API </h1><span className='ml-2'> <HiOutlineInformationCircle /> </span>
                    </div>
                    <div className=''>
                        <input type="checkbox" id="switch1" /><label htmlFor={"switch1"}>Toggle</label>
                    </div>

                </div>
                <div className='flex justify-between toggle_two h-[50px]'>
                    <div className='flex items-end'>
                        <h1>Expert Mode </h1><span className='ml-2'> <HiOutlineInformationCircle /> </span>
                    </div>
                    <div className='mb-[18px]'>
                        <input type="checkbox" id="switch2" /><label htmlFor={"switch2"}>Toggle</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Swap_settings;