
import Button from './Button'
import logo from './image/logo.png'
import { Link, useNavigate } from "react-router-dom";
import './Nav.css'
import { signOut } from 'firebase/auth';
import { auth } from "../utilis/firebase"
import { useContext, useState } from 'react';
import{UserContext } from '../context/UserContext'
function Navbar() {
//  const [isSubmitting,setisSubmitting]= useState("")

// const {user}=useContext(UserContext)
// console.log("user:", user)


    const navigate = useNavigate()

    function handlebutton() {
    

        navigate("/signup")
        
    }

    async function handlelogout() {
    
  await signOut(auth)
        
    }


    return(
        
        <div id='main1'>
            <img src={logo} alt="" />
            <ul>
                <li><Link to ="Home">Home</Link></li>
                <li><Link to ="Category">Category</Link></li>
                <li><Link to ="About">About</Link></li>
                <li><Link to ="Contact">Contact</Link></li>
                {/* <li><Link>User</Link></li> */}
                
                <Button text = {"Logout"} onClick={handlelogout} /> 
               <Button text= {"Account"} onClick={handlebutton}/>
            </ul>
        </div>
    )
    
}

export default Navbar