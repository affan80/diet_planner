"use client"
import {useRouter} from "next/navigation" 
export default function About(){
  const router = useRouter()
  return(
    <section className = "about-section">
      <div className = "about-container">
        <h1>How We Automate Your Meal Planning</h1>
        <p>
          Eat This Much helps you with the two 
          most important things <br /> to make your healthy diet a success:
        </p>

        <ol>
          <li>1. Turn meal planning into an effortless and magical experience ✨</li> 
          <li>2. Provide an endless supply of delicious recipes specific to your needs 🍲</li>
        </ol> 
      <button onClick = {() =>{ router.push("/signup");
        }} id = "start-btn">
          Start a free Account
        </button>        
      
      </div>
    </section>
  );
}
