'use client';
import { useRouter } from 'next/navigation';

export default function Diet_S() {
  const router = useRouter();
  return (
    <section className="support-section">
      <div className="support-container">
        <h1 className="diet-T">The Type of Diets We Support</h1>
      </div>

      <div className="support-info">
        <p>
          Eat This Much supports almost any type of diet you can think of. Our goal is to help you eat the 
          <br />way you want, and in the right amounts, NOT to tell you the "right" way to eat.
        </p>

        <p>
          We support a handful of preset diet types to configure the settings for you and make it quicker to get 
          <br />started. Here, we break down some basics about each diet type, but don't let these 
          <br />limit your imagination.
        </p>

        <p id="gen-sing">
          Not looking to read a wall of text? Just jump right in with the generator.
        </p>
        
        <button id="generat-btn" onClick={() => { 
          router.push('/Browse_Food');
        }}>The Diet Generator</button>
      </div>

      <div className="diet-types">
        <div className="diet-T-container">
          <h1 className="diet-T">Features of Eat This Much</h1>
        </div>

        <div className="support-info">
          <p>
            The best diet is the one you will stick to. You will almost always lose weight if you eat fewer calories than you burn, and gain weight
            <br />if you do the opposite. Different eating styles, however, can make it easier to reach your goals. Low carb eating styles such as Keto
            <br />and Paleo can make it much easier to feel full, and thus eat fewer calories. But if you're good about controlling your portioning, it's
            <br />less necessary to restrict your food choices, and you may have an easier time sticking to your plan.
          </p>

          <p>
            Everyone is different, so the best thing you can do is experiment and see what works for you. Eat This Much is a tool to make the
            <br />process easy.
          </p>
        </div>
      </div>

      <div className="GTL-btn">
        <button id="learn-btn" onClick={() => { 
          router.push('/Browse_Food');
        }}>Learn More</button>

        <button id="getstart-btn" onClick={() => { 
          router.push('/Browse_Food');
        }}>Start A Free Account</button>
      </div>

      <div className="browse-D">
        <h1>Browse Diet Plans</h1>
        
        <div className='diet-grid'>
          <div className="browse-DT">
            <h2>Keto</h2>
            <p>
              Low-carb, high-fat diet focusing on ketosis for 
              <br />energy and weight management
            </p>

          </div>

          <div className="browse-DT">
             <h2>Vegan</h2>
              <p>
                Excludes all animal products, emphasizing 
                <br />plant-based foods for health and ethics
              </p>
          </div>

          <div className="browse-DT">
            <h2>Vegetarian</h2>
            <p>
              Plant-based diet including dairy and eggs,
              <br />avoiding meat for health and ethics
            </p>

            
          </div>
          
          <div className="browse-DT">
            <h2>Paleo</h2>
            <p>
              Emulates ancient diet with whole foods, 
              <br />free of processed items and grains
            </p>
          </div>

          <div className="browse-DT">
            <h2>Mediterranean</h2>
            <p>
              Rich in fruits, vegetables, fish, and olive oil for a balanced,
              <br />heart-healthy diet
            </p>
          </div>

          <div className="browse-DT">
             <h2>Low Carb</h2>
            <p>
              Reduces carbohydrate intake, focusing on proteins and 
              <br />fats for energy
            </p>
          </div>

          <div className="browse-DT">
            <h2>Low Fat</h2>
            <p>
              Limits fat consumption, emphasizing lean proteins,
              <br />grains, and vegetables
            </p>   
          </div>

          <div className="browse-DT">
             <h2>High Protein</h2>
            <p>
              Prioritizes protein intake for muscle growth and repair,
              <br />with balanced nutrients
            </p>
          </div>
      
          <div className="browse-DT">
            <h2>Gluten Free</h2>
            <p>
              Avoids gluten, suitable for celiac or gluten sensitivity,
              <br />focusing on alternative grains
            </p>
          </div>

          <div className="browse-DT">
              <h2>Other</h2>
              <p>
                See how to follow other popular plans like Whole30,
                <br />Low FODMAP, Pescetarian, and more
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}

