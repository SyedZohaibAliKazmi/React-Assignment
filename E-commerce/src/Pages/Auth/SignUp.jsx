
import { useState } from "react";
import Swal from "sweetalert2";
import "./SignUp.css"
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth,db} from "../../utilis/firebase"
import Button from "../../components/Button";
// import { auth, db } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";

function Hello() {
   
    const navigate = useNavigate()
    const [email,setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [loading, setloading] = useState("")
    const [isSubmitting , setisSubmitting ]=useState("")
    const [username, setUsername] = useState("");


    const handleSignIn = async () => {
        try {
          setisSubmitting(true)
          setloading(true)
         const user = await createUserWithEmailAndPassword(auth,email,password)

         Swal.fire({
          title: "Congragulation",
          text:  `${user.user.email}Successfully signIn`,
          icon: "success",
          confirmButtonText: "Ok",
         })
         const docRef = doc(db, "users", user.user.uid);
         const documentAdded = setDoc(docRef, {
           username,
           email,
           uid: user.user.uid,
         });
         console.log("user==>", "document add hogya he", user.user.uid);
          navigate("/");
          setloading(false)

        } catch (err) {
          setisSubmitting(true)
          Swal.fire({
            title: "Failed!",
            text: `${err.message}`,
            icon: "error",
            confirmButtonText: "Try Again",
          });
        // navigate("/Login")
        setloading(false)


        }}
    

    return(
        <main>
        <div className="starry-world">
      <h1>Sign Up</h1>
      
        <input type="text" placeholder="username" value={username} required onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="password" value={password} required onChange={(e)=> setPassword(e.target.value)} />
        {/* <button  onClick={handleSignIn} disabled={isSubmitting}>Submit</button> */}
        <Button  onClick={handleSignIn} disabled={isSubmitting} isloading={loading} text={"Submit"}/>
      

      <p>or &nbsp;<Link to ="/Login">Login</Link></p>
    </div>

    </main>
    )
}

export default Hello