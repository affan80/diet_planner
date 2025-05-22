import Image from "next/image";
import planeImage from '../../app/images/plane.srfVEkqf.webp';

export default function Info() {
    return (
        <section className="info-section">
            <div className="info-container">
                <h1 className="heading-1">
                    <span className= "text-black">Put your diet on</span><br />
                    <span className="text-orangered">MealMap</span>
                </h1>  
                <p className="para1">
                    Eat This Much creates personalized meal plans based on your food <br /> 
                    preferences, budget, and schedule. Reach your diet and nutritional <br />
                    goals with our calorie calculator, weekly meal plans, grocery lists and more.
                </p>
            </div>
            <div className="info-img">
                    <Image src={planeImage} alt="logo" width={1000} height={1000} />
            </div> </section>); }
