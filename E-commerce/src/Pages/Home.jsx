import hero from '../components/image/hero.png';
import { useNavigate } from 'react-router-dom';
// import Category from './Category';

import './Home.css'
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate ('/Category')
  }

  return(
    <div className='hero-sec'>
            
            <div className='text'>
                <div className='heading'>     
                <h1>Get up to 30% Off <br/>
                New Arrivals...</h1>
                <button id='btn' onClick={handleClick} >SHOP NOW</button>
                
                </div>
                <div className='picture'>
                    <img id='image' src={hero} alt="" />
                </div>
            </div>
            <Footer/>
        
        </div>
        
  )
  
}
export default Home