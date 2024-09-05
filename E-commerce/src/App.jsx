import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0);

  return (
  <div>
   <Navbar/>
    <h1>Zohaib Ali</h1>
    
  </div>
  )
}

export default App;
