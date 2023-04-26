import Image from 'next/image';
import footerLogo from '../../public/images/CommonImages/Logo.svg';
import footerbg from '../../public/images/footer/main.png';

const Footer = () => {


    return (
        <>

            {/* Copyright Section */}
            <div className="Copy-right" style={{ backgroundImage: `url(${footerbg.src})`}}>
                <div className="logo w-[80px] h-[80px] mb-12">
                    <Image src={footerLogo} alt="Logo"/>
                </div>
                <h1 className="text-2xl text-white font-bold mb-6">P2PBIT Token</h1>
                <p className="text-[#C7D0DB] br320:text-center br320:mx-2">© 2013-2023 | The Dogecoin Foundation & Dogecoin Project.
                    All rights reserved.</p>
            </div>

            {/* Footer */}
            <div className="Footer">
                <ul className="bg-black h-[100px] footer_items flex justify-center items-center text-[#C7D0DB]">
                    <li><a className="br320:text-xs br480:text-base">Terms of Use</a></li>
                    <li><a className="br320:text-xs br480:text-base border-l border-r br320:px-2 br320:mx-1 br600:px-4 br600:mx-3">Privacy Policy</a></li>
                    <li><a className="br320:text-xs br480:text-base">Use of Cookies</a></li>
                </ul>
            </div>

        </>
    );
}

export default Footer;