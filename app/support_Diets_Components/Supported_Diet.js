'use client'
import {useRouter} from 'next/navigation'


export default function Deit_S() {
  const router = useRouter()
  return (
    <section className="support-section">
      <div className="support-container">
        <h1 className="diet-T">The Type of Diets We Supports</h1>
      </div>

      <div className='support-info'>
        <p>
          Eat This Much supports almost any type of diet you can think of. Our goal is to help you eat the 
          <br/>way you want, and in the right amounts, NOT to tell you the "right" way to eat.
        </p>

        <p>
          We support a handful of preset diet types to configure the settings for you and make it quicker to get 
          <br/>started. Here, we break down some basics about each diet type, but don't let these 
          <br/>limit your imagination.
        </p>

        <p id="gen-sing">
          Not looking to read a wall of text? Just jump right in with the generator.
        </p>
        
        <button id="generat-btn" onClick={() => { 
          router.push('app/page.js');
          }}>The Diet Generator</button>
      </div>

      <div className="deit-types">
        <div className="deit-T-container">
          <h1 className="diet-T">Features of Eat This Much</h1>
        </div>

        <div className="support-info">
          <p>
            The best diet is the one you will stick to. You will almost always lose weight if you eat fewer calories than you burn, and gain weight
            <br/>if you do the opposite. Different eating styles, however, can make it easier to reach your goals. Low carb eating styles such as Keto
            <br/>and Paleo can make it much easier to feel full, and thus eat fewer calories. But if you're good about controlling your portioning, it's
            <br/>less necessary to restrict your food choices, and you may have an easier time sticking to your plan.
          </p>

          <p>
            Everyone is different, so the best thing you can do is experiment and see what works for you. Eat This Much is a tool to make the
            <br/>process easy.
          </p>
        </div>
      </div>
    </section>
  );
}

