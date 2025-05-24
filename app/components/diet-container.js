"use client"; 
import Image from 'next/image';
import { useState } from 'react';
import ketogenicDiet from '../../app/images/ketogenic-diet.png';
import paleoDiet from '../../app/images/paleo-diet.png';
import vegan from '../../app/images/vegetables.png';
import vegetarain from '../../app/images/diet-food.png';
import Mediterranean from '../../app/images/balanced-diet.png';

export default function DietContainer(){
    const [calories, setCalories] = useState(5);
    const [meals, setMeal] = useState(5);

    return (
        <section>
            <div className="diet-container" >
                <div className='H1'>
                    <h1 className="heading-1">
                        Create your meal plan right here in seconds
                    </h1>
                </div>
                <div className="diet-options">
                    <div className="calories">
                        <h1>Preferred Diet</h1>
                    </div>

                    <div className="diet-btns">
                        <button className="diet-button">
                            <Image src={ketogenicDiet} alt="keto-diet" width={50} height={50} />
                            <span>Keto Diet</span>
                        </button>

                        <button className="diet-button">
                            <Image src={paleoDiet} alt="diet" width={50} height={50} />
                            <span>Paleo Diet</span>
                        </button>

                        <button className="diet-button">
                            <Image src={vegan} alt="diet" width={50} height={50} />
                            <span>Vegan</span>
                        </button>

                        <button className="diet-button">
                            <Image src={vegetarain} alt="diet" width={50} height={50} />
                            <span>Vegetarain</span>
                        </button>

                        <button className="diet-button">
                            <Image src={Mediterranean} alt="diet" width={50} height={50} />
                            <span>Mediterranean</span>
                        </button>
                    </div>
                    <div className='calories-input-container'>
                        <span>I want to eat</span>
                        <input type='text' />
                        <span>calories</span>
                    </div>
                    
                    <div className='meal-input-container'>
                        <span>in</span>
                        <input type='number' />
                        <span>meals</span>
                    </div>
                    
                    <div className= "cal-list">
                        <ul>
                          <li>At least Carbs</li>
                        </ul>
                    j 
                    </div>

                    <div className='nutri-value'>
                        <button id="generate-btn">Generate</button>
                    </div>
                </div>
                
                <div className='discription-container'>
                    <div className='discription'>
                        <h1>Ready for more?</h1>
                        <span>With a free account, you can customize your preferences, track your intake, create recipes, and much more.</span>
                    </div>
                    <button id='register-btn'>Register</button>
                </div>
            </div>
        </section>
    );
}
