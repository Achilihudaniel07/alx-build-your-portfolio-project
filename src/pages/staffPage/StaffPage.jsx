import React from 'react'
import './StaffPage.css'
import NavBar from '../../components/navBar/NavBar';
import staffs from './staffs.json'
import { Link } from "react-router-dom";
import CustomButton from '../../components/custombutton/CustomButton';
import Footer from '../../components/footer/Footer';
function StaffPage() {
    return (
        <div className='staff-page'>
            
            <div>
                <NavBar/> 
            </div>    

            <div className='staff-pg'>
                <h1 id='staff-hd'>STAFF</h1>
            </div>

            <div className='staff-header'>
                <h1 id='staff-hd'>STAFF</h1>
            </div>

            <div className='staff-info'>
                <div className='staff-details'>
                    <h1>Our Expert Staff</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat eos nostrum perferendis debitis itaque ipsam corrupti, ut tempore saepe consequatur optio, eum illum officia iusto. Labore vel ratione quidem.</p>
                </div>

                <div className='staff-images'>
                    {
                        staffs.map((staff, index) => (
                        <React.Fragment key={index}>
                            <div className='staff-imagez'>
                                <img src={staff.img} alt={staff.name} />
                                <div className='staff-detailz'>
                                    <h1>{staff.name}</h1>
                                    <p>{staff.about}</p>

                                </div>
                            </div>
                        
                        </React.Fragment>
                        ))
                    }
                </div>

                 
                <div className ="staff-btn">              
                    <Link to='/allstaff' pathname='/allstaff'>
                    <CustomButton content="SEE MORE" />          
                    </Link>

                </div>

            </div>

        <div className='footer'>
            <Footer/>
        </div>

        </div>
    )
}

export default StaffPage