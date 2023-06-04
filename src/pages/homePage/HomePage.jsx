import React from 'react'
import './HomePage.css'
import { Link } from "react-router-dom";
import NavBar from '../../components/navBar/NavBar';
import CustomButton from '../../components/custombutton/CustomButton';
import constserv from "../../assets/images/constserv.png";
import electserv from "../../assets/images/electserv.png";
import reconst from "../../assets/images/reconst.png";
import Footer from '../../components/footer/Footer';


function HomePage() {
  return (   
    <div className="home-page">
     
      <div>
        <NavBar/> 
      </div>
    
      <div className="home-info">
        <div className='home-details'>
          <h1>We Are Builders </h1> 

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam doloribus magni minima ab inventore repellat at blanditiis. Tempore nesciunt iusto eius ex, delectus corporis ipsa possimus accusamus sed laudantium? </p>

          
          <div className ="home-btn">
            
            <Link to='/contactus' pathname='/contactus'>
               <CustomButton content="CONTACT US" />          
            </Link>

          </div>

        </div>
        


        <div className='services-done'>
          <div className='construction-services'>
            <img src={constserv} alt="" />
            <h4>CONSTRUCTION SERVICES</h4>
          </div>

          <div className='reconstruction'>
            <img src={electserv} alt="" />
            <h4>RECONSTRUCTION</h4>
          </div>

          <div className='electrical-services'>
            <img src={reconst} alt="" />
            <h4>ELECTRICAL SERVICES</h4>
          </div>

      </div>

      </div>
      <div className='footer-hp'>
        <Footer/>
      </div>

    </div>

  )
}

export default HomePage