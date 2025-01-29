import Image from "next/image";
import Herosec from "./components/Herosec";
import Features from "./components/Features";
import { DiCelluloid } from "react-icons/di";
import Products from "./components/Products1";
import Popular_products from "./components/Popular_products";
import Signup from "./components/Signup";
import Getin_touch from "./components/Getin_touch";
import Topnav from "./components/Topnav";
import Products1 from "./components/Products1";

export default function Home() {
  return (
   
      
  <div>
    <Topnav/>
  <Herosec/>

  <Features/>

  <Products1 />

  <Popular_products />


  {/* <Signup />

  <Getin_touch /> */}


</div>

  );
}
