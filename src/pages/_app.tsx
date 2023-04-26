import '@/styles/globals.css'
import '@/styles/Main.css';
import type { AppProps } from 'next/app';
import Footer from '@/Component/Footer';
import Navbar from '@/Component/Header/Navbar';
// import Blackmap from "../Component/Blackmap";
import Navbartwo from "../Component/Header/Navbartwo";
import Navbarl from "../Component/Header/Navbarl";
import Home from './Homemain';
import Rough from '@/Component/Rough';
import Swap_settings from '@/Component/Swap_settings';
import Index from "./index";
import Graph from '@/Component/Graph';
import Animation from '@/Component/Animation';

// import Home from './Home';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    {/* <Navbar /> */}
    {/* <Navbartwo /> */}
    <Navbarl/>
    <Component {...pageProps} />
    {/* <Index/> */}
    <Footer />
    {/* <Blackmap/> */}
    {/* <Rough/> */}
    {/* <Home/> */}
    {/* <Swap_settings/> */}
    {/* <Graph/> */}
    {/* <Animation /> */}


  </>

}


