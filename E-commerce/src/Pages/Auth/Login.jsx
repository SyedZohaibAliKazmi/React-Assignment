
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../utilis/firebase"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from "../../components/button"

function Login() {
    
  const navigate = useNavigate()
  const [email , setEmail] = useState("")
  const [loading , setloading] = useState("")
  const [password , setPassword] = useState("")
  const [isSubmitting ,setIsSubmitting] = useState("")

   async function handlelogin() {

    try {
      setIsSubmitting(true)
      setloading(true)  
     const user = await signInWithEmailAndPassword(auth,email,password)
    Swal.fire({
      title: 'Login Successful',
      text: `Welcome Back ${user.user.email}`,
      icon: 'success',
      confirmButtonText: 'Continue'
    })
      navigate("/")
      setloading(false)
      
    } catch (error) {
     Swal.fire({
      title: 'Error',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Try Again'
     })
     setloading(false)
      // navigate ("/signup")
    }
    
    
   }


    return(
        <main>
        <div className="starry-world">
        <h1>Login</h1>
  
        
          <input type="email" placeholder="email" value={email} required onChange={(e)=> setEmail(e.target.value)}  />
          <input type="password" placeholder="password" value={password} required onChange={(e)=> setPassword(e.target.value)}  />
          {/* <button onClick={handlelogin} disabled={isSubmitting} >Submit</button> */}
          <Button onClick={handlelogin} disabled={isSubmitting} isloading={loading} text={"Submit"} />

  
        <p>or &nbsp;<Link to="/SignUp">SignUp</Link></p>
      </div>

      </main>
    )
    
}

export default Login