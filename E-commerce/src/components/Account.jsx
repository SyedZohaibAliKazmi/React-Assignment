

import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Account () {

  const {user}=  useContext(UserContext)

    return(
        <div id="main" style={{ display: "flex", justifyContent: "center",alignitems: "center",width: "auto",height: "20px",backgroundColor: "black"}}>
        {user.isLogin ? (<p style={{color:'#CCCCCC', marginBottom:"10px"}}>Welcome {user.email}</p>):null}    
        </div>
    )
    
} 

export default Account