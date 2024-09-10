
import { Link } from "react-router-dom"

function Login() {

    return(
        <main>
        <div className="starry-world">
        <h1>Login</h1>
  
        
          <input type="email" placeholder="email" id="email" />
          <input type="password" placeholder="password" id="password" />
          <button type="submit">Submit</button>

  
        <p>or &nbsp;<Link to="/SignUp">SignUp</Link></p>
      </div>

      </main>
    )
    
}

export default Login