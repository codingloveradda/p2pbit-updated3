import sayhelloBgIMG from "../../public/images/page_3/sayhelloBG.png";
import Link from 'next/link'
import { useState } from 'react'

import Navbartwo from "../Component/Header/Navbartwo";
import Footer from "@/Component/Footer";




const Form = () => {

    const [InputData, setInputData] = useState({
        Name: "",
        Email: "",
        subject: "",
        textMsg: ""
    })

    const InputEvent = (e: { target: { name: any; value: any } }) => {
        console.log(e.target.name);
        console.log(e.target.value);

        const { name, value } = e.target;
        setInputData((preval) => {
            return {
                ...preval, [name]: value
            }
        })
    }


    return (

        <div className="formdata grid br320:pt-[30px] br768:pt-[90px] br1220:pt-[130px] br1024:grid-cols-2 br320:grid-cols-1 br320:px-5 br768:px-8 br1024:px-20" style={{ backgroundImage: `url(${sayhelloBgIMG.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
            <div className="br320:my-8 br768:my-[80px] br1220:my-[250px] br320:ml-20px br768:ml-[20px]">
                <p className="text-5xl font-extrabold mb-5">Say hello.</p>
                <p className="br600:w-[393px] text-base br600:h-[159px] text-justify">It is very important for us to keep in touch with
                    you, so we are always ready to answer any question that interest you.</p>
            </div>
            <div className="flex br320:justify-center br1024:justify-start br320:mb-8 br1024:mb-0">
                <div className="form_section bg-black br320:w-[100%] br320:h-[100%] br768:w-[768px]  br1024:h-[649px]">
                    <form className="flex flex-col mx-auto w-[90%]">
                        <input
                            type="text"
                            name="Name"
                            value={InputData.Name}
                            onChange={InputEvent}
                            placeholder="Name"
                            className="br320:py-1 br768:py-3 mt-16 bg-black border-b border-[rgba(199,208,219,0.4)]"
                        />

                        <input type="email"
                            placeholder="Email"
                            name='Email'
                            onChange={InputEvent}
                            value={InputData.Email}
                            className="br320:mt-5 br1024:mt-8 br320:py-1 br768:py-3 border-b bg-black border-[rgba(199,208,219,0.4)]"
                        />

                        <input type="text"
                            placeholder="Message subject"
                            name='subject'
                            onChange={InputEvent}
                            value={InputData.subject}
                            className="br320:mt-5 br1024:mt-8 br320:py-1 br768:py-3 border-b bg-black border-[rgba(199,208,219,0.4)]"
                        />

                        <textarea className="mt-9 border-b bg-black border-[rgba(199,208,219,0.4)]" rows={4} cols={50}
                            onChange={InputEvent}
                            name='textMsg'
                            value={InputData.textMsg}
                            placeholder="Leave your message...">
                        </textarea>
                        <Link href="/"
                            className="btn-send br320:my-8 br600:my-12 br1024:mb-0 br1024:mt-24  br320:py-2 br768:py-[14px]">Send</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;