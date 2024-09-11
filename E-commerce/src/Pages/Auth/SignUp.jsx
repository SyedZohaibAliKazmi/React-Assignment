
import { useState } from "react";
import "./SignUp.css"
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../utilis/firebase"

function Hello() {
   
    const navigate = useNavigate()
    const [email,setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [isSubmitting , setisSubmitting ]=useState("")


    const handleSignIn = async () => {
        try {
          setisSubmitting(true)
         const user = await createUserWithEmailAndPassword(auth,email,password)
          console.log(  "user:", user)
          alert(`Welcome ${email}`)
          navigate("/");
        } catch (err) {
          alert (err.message)

        navigate("/Login")

        }}
    

    return(
        <main>
        <div className="starry-world">
      <h1>Sign Up</h1>
      
        <input type="text" placeholder="username" id="name" required />
        <input type="email" placeholder="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="password" value={password} required onChange={(e)=> setPassword(e.target.value)} />
        <button  onClick={handleSignIn} disabled={isSubmitting}>Submit</button>
      

      <p>or &nbsp;<Link to ="/Login">Login</Link></p>
    </div>

    </main>
    )
}

export default Hello