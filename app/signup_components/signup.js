import Image from 'next/image';
import Carrot from '../../app/images/carrot.png';
import Create_AC from '../../app/images/user.png';
import Link from "next/link";


export default function span() {
    return (
        // const router = useRouter();
        <section className="signup-form">
            <div className="signup-info">
                <div className="signup-info-header">
                    <h1 id="R-tag"> <Image src={Carrot} alt='Meal Map' width={24} height={24} /> Register</h1>
                    <span>Already have an account? <Link  href="/login">Login</Link></span>
                </div>

                <div className="signup-input-container">
                    <div className='input-signup'>
                    <p>Username</p>
                    <input type="text" placeholder="Enter your username" />
                    </div>

                    <div className='input-signup'>
                    <p>Email</p>
                    <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className='input-signup'>
                    <p>Password</p>
                    <input type="password" placeholder="Enter your password" />
                    </div>

                    <div className='input-signup'>
                    <p>Confirm Password</p>
                    <input type="password" placeholder="Confirm your password" />
                    </div>

                </div>

                <div className="signup-btn-container">
                    <button id="signup-btn"> <Image src={Create_AC} width={20} height={20} id='CAC' /> create Account</button>
                </div>

            </div>
        </section>
    );
}
