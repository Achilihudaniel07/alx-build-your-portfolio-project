import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import CustomButton from '../../components/custombutton/CustomButton'

function Footer() {
  return (
    <div className='footer'>
        <footer className='resize-max'>        
            <div className="main-content">

                <div className="logo box">
                    
                    <div className='content'>
                        <Link to='/' >
                            <img id='logo' src={logo} alt="logo" />
                        </Link>
                    </div>

                </div>

                <div className="qu-sm box">

                    <div className="quick-links box">
                        <h2>QUICK LINKS</h2>
                        <div className="content">
                            <ul>
                                <Link to='/'>
                                    <li>Home</li>
                                </Link>

                                <Link to='/about' >
                                    <li>About</li>
                                </Link>
                                
                                <Link to='/projects'>
                                    <li>Projects</li>
                                </Link>

                                <Link to='/staff' >  
                                    <li>Staff</li>
                                </Link>
                                
                                <Link to='/contactus'> 
                                    <li>Contact Us</li>
                                </Link>                         

                            </ul>
                        </div>
                    </div>

                    <div className='social-media box'>
                        <h2>SOCIAL MEDIA</h2>
                        <div className='content'>
                            <div className='fb'>
                                <li>Facebook</li>
                            </div>
                            <div className='tw'>
                                <li>Twitter</li>
                            </div>

                            <div className='ig'>
                                <li>Instagram</li>
                            </div>

                            <div className='ln'>
                                <li>LinkedIn</li>
                            </div>

                            <div className='Yt'>
                                <li>Youtube</li>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="contact-us box" id='cub'>
                    <h2>SIGN UP TO OUR NEWSLETTER</h2> 
                    <div className='content'>
                        <div className='ft-name'>
                            <input className='ft-input' type='text' name='Fullname' placeholder='Enter Your Full Name'/>
                        </div>

                        <div className='ft-email'>
                            <input className='ft-input' type='email' name='email' placeholder='Enter Your Email'/>
                        </div>

                        <div className ="send-message-btn">              
                            <Link to='/contactus' pathname='/contactus'>
                            <CustomButton content="Sign Up" />          
                            </Link>
                        </div>

                    </div>               
                </div>

            </div>


            <div className="fotter-bottom">
                <center>
                    <div className="footer-left-bottom">
                        <p>Copyright © 2021-2022 JOEDAN GOLD TECHNOLOGIES UNLIMITED. All Rights Reserved.</p>
                    </div>

                    <div className='footer-right-bottom'>
                        <ul>

                            <Link to='/privacypolicy' className='contentt'>  
                                <li>Privacy Policy</li>
                            </Link>
                             && 
                            <Link to='/termsandconditions' className='contentt'>  
                                <li>Terms and Condition</li>
                            </Link>
                            
                        </ul>
                    </div>    
                </center>
            </div>
        </footer>
    </div>
  )
}

export default Footer