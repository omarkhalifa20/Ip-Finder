import About from "@/Components/About/About";
import FindSec from "@/Components/Find/FindSec";
import Main from "@/Components/MainComp/Main";
import Navbar from "@/Components/NavBar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Main />
   <About/>
   <FindSec/>
   </>
  );
}
