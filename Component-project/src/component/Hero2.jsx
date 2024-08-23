import image1 from './image/1.jpg'
import image2 from './image/2.webp'
import image3 from './image/3.jpg'
import image4 from './image/4.jpg'
import star from './image/star.png'
import './Hero2.css'

function Hero2() {

     return(
        <div className='back'>
            <div id='hero2-sec'>
        <h1>Best Selling Products </h1>
            </div>

            <div id='Images'>
                <div id='cart'>
                    <img id='mainIMG' src={image1} alt="" />
                    <h3>Casual Crew Neck Shirt</h3>
                    <p><span>$ 99.</span>99</p>
                    <img id='star' src={star} alt="" />
                </div>

                <div id='cart'>
                    <img id='mainIMG' src={image2} alt="" />
                    <h3>Polyester Stitched 2 Piece</h3>
                    <p><span>$ 49.</span>99</p>
                    <img id='star' src={star} alt="" />
                </div>

                <div id='cart'>
                    <img id='mainIMG' src={image3} alt="" />
                    <h3>Men Polo Slim T-Shirt</h3>
                    <p><span>$ 39.</span>99</p>
                    <img id='star' src={star} alt="" />
                </div>

                <div id='cart'>
                    <img id='mainIMG' src={image4} alt="" />
                    <h3>Men Cotton shirt</h3>
                    <p><span>$ 69.</span>99</p>
                    <img id='star' src={star} alt="" />
                </div>

            </div>
    </div>
     )
   
    
}

export default Hero2