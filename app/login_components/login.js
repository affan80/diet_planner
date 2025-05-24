import Link from 'next/link'

export default function Login(){
  return(
    <section className = "login-section">
      <div className = "container">
        <div className = "login-info">
           <h1>Login</h1>
          <p>
            Don't have an acco?
            <Link  href = "/signup"><span>Register</span></Link>
          </p>
        </div>
      
        <div className = "input-container">
          <h2 className = "info">Email or Username</h2>
          <input type = "email" placeholder = "username or Email" />
          <h2 className= "password">password</h2>
          <input type = "password" placeholder = "Enter password"/>
        </div>
        
        <div className = "button-container">
            <button>Log In</button>
            
        </div>
      </div>
    </section>
  );
}
