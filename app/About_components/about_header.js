"use client";
import Image from "next/image"
import Link from "next/link"
import logo from "../images/logopBB2RZ6y.png";
import { useRouter } from 'next/navigation';


export default function About_H(){
  const router = useRouter()
  return(
      <section className='w-full'>
            <header className="header-section">
                    <div className="nav-container">
                        <nav className="navbar">
                            <div className="logo">
                               <Image src={logo} alt="logo" width={100} height={100} />
                            </div>
                            <ul className="nav-links">
                                <li> <Link href="/About_page"><span>How It Works</span></Link></li>
                                <li><Link href="/Browse_Food"><span>Browse Food</span></Link></li>
                                <li><Link href="/Supported_Diet_page">Suppported Diets</Link></li>
                                <li><a href="#For Profestional">For Profestionals</a></li>
                                <li>
                                    <button onClick={() => {
                                        router.push('/signup');
                                    }} className="w-32 h-auto bg-[#ff4500] text-white rounded-full">Sign Up</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
        </section>
  );
}
