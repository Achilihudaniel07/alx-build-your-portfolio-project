import React from 'react'
import './AboutPage.css'
import { Link } from "react-router-dom";
import NavBar from '../../components/navBar/NavBar';
import aboutP from "../../assets/images/aboutP.png";
import ch1 from "../../assets/images/ch1.png";
import ch2 from "../../assets/images/ch2.png";
import ch3 from "../../assets/images/ch3.png";
import CustomButton from '../../components/custombutton/CustomButton';
import Footer from '../../components/footer/Footer';

function AboutPage() {
    return (
        <div className='about-us-page'>

            <div>
                <NavBar/> 
            </div>
            
            <div className='aboutus-pg'>
                <h1>ABOUT PAGE</h1>
            </div>
            
            <div className='aboutus-header'>
                <h1 id='about-hd'>ABOUT US</h1>
            </div>

            <div className="aboutus-info">

                <div className='aboutus-details'>
                    <h1>About Our Company </h1> 

                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam doloribus magni minima ab inventore repellat at blanditiis. Tempore nesciunt iusto eius ex, delectus corporis ipsa possimus accusamus sed laudantium? 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus illum aliquid ex, blanditiis, nesciunt tempora iure eligendi sint placeat praesentium nemo voluptas. Quaerat magni, praesentium consequatur odio eaque dolore earum!
                    </p>

                    
                    <div className ="aboutus-btn">
                        
                        <Link to='/contactus' pathname='/contactus'>
                        <CustomButton content="READ MORE" />
                        
                        </Link>
                    </div>

                </div>

                <div className="aboutus-pic"> 
                <img src={aboutP} alt="" style={{width:'400px'}}/>
                </div> 
                
            </div>

            <div className='why-choose-us'>
                <div className='why-choose-us-info'>
                    <h1> Why Choose Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae maiores quia debitis saepe aut voluptatibus nihil, minus reprehenderit, maxime laborum, velit mollitia officiis totam laudantium voluptates reiciendis quis? Provident.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate tempore delectus, aliquid officia, provident, debitis non inventore eius nihil corrupti itaque ex soluta eaque cumque earum alias veritatis nisi assumenda.
                    </p>

                    <div className='cl-aw-tr'>
                        <div className='c-a-t'>
                            <div className='client-sat'>
                                <img src={ch1} alt="" />
                                <h4>CLIENT SATISFACTION</h4>
                            </div>
                                <h3>CLIENT SATISFACTION</h3>
                        </div>

                        <div className='c-a-t'>
                            <div className='award'>
                                <img src={ch2} alt="" />
                                <h4>AWARD</h4>
                            </div>
                                <h3>AWARD</h3>
                        </div>

                        <div className='c-a-t'>
                            <div className='trustable'>
                                <img src={ch3} alt="" />
                                <h4>TRUSTABLE</h4>
                            </div>
                                <h3>TRUSTABLE</h3>
                        </div>


                    </div>
                </div>
            </div>

            <div className='footer'>
                <Footer/>
            </div>
           
        </div>
    )
}

export default AboutPage