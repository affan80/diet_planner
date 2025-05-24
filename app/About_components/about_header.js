"usr client"
import Image from "next/image"
import Link from "next/link"
import logo from "../images/logopBB2RZ6y.png";


export default function About_H(){
  return(
   
<section className='w-full'>
            <header className="header-section">
                    <div className="nav-container">
                        <nav className="navbar">
                            <div className="logo">
                               <Image src={logo} alt="logo" width={100} height={100} />
                            </div>
                            <ul className="nav-links">
                                <li><a href="#How it works">How It Works</a></li>
                                <li><a href="#Browse food">Browse Food</a></li>
                                <li><a href="#Supppoeted Diets">Suppported Diets</a></li>
                                <li><a href="#For Profestional">For Profestionals</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
        </section>
  );
}
