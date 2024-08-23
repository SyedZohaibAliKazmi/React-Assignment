import hero from './image/hero.png'
import black from './image/hero-black.png'
import './Hero.css'

function Hero() {
    return(
        <div className='hero-sec'>
            
            <div className='text'>
                <div className='heading'>     
                <h1>Get up to 30% Off <br/>
                New Arrivals...</h1>
                <button id='btn'>SHOP NOW</button>
                </div>
                <div className='picture'>
                    <img id='image' src={hero} alt="" />
                </div>
            </div>
        
        </div>
    )
    
}

export default Hero