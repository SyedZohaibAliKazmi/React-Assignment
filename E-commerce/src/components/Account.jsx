import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown,faUser } from "@fortawesome/free-solid-svg-icons"
import "./Account.css"
import { useNavigate } from "react-router-dom";


function Account() {

    const navigate = useNavigate()

  const { user } =  useContext(UserContext);

 function transferProfile() {

  navigate("/profile")
  
 }


  return (
    <div
      id="main">
      {user.isLogin ? (<div id="Login-Text"><p>Welcome<span >"{user.username}"</span>
        </p>
        <h3>  <FontAwesomeIcon icon={faUser} /></h3>
        <button onClick={transferProfile}> <FontAwesomeIcon icon={faChevronDown}/></button>
        </div>
        
      ) : (
        <p style={{ color: "#CCCCCC" }}>Create your Account</p>
      )}
    </div>
  );
}

export default Account;
