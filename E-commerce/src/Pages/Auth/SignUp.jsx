
import { useState } from "react";
import "./SignUp.css"
import { Link, useNavigate } from "react-router-dom";

function Hello() {
   
const navigate = useNavigate()

    const [email,setEmail]= useState("")
    const [password, setPassword] = useState("")
    const handleSignIn = async () => {
        try {
        //   setLoading(true);
          console.log(email);
          console.log(password);
          alert(`Welcome ${email}`)
          
          
        //   const user = await signInWithEmailAndPassword(auth, email, password);
          console.log("user==>");
          navigate("/");
        //   setLoading(false);
        } catch (err) {
        //   setLoading(false);
        }}
    

    return(
        <main>
        <div className="starry-world">
      <h1>Sign Up</h1>
      
        <input type="text" placeholder="username" id="name" required />
        <input type="email" placeholder="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="password" value={password} required onChange={(e)=> setPassword(e.target.value)} />
        <button  onClick={handleSignIn}>Submit</button>
      

      <p>or &nbsp;<Link to ="/Login">Login</Link></p>
    </div>

    </main>
    )
}

export default Hello