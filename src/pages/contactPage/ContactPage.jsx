import React from 'react'
import './ContactPage.css'
import NavBar from '../../components/navBar/NavBar';
import CustomButton from '../../components/custombutton/CustomButton'
import email from '../../assets/images/email.png'
import phone from '../../assets/images/phone.png'
import address from '../../assets/images/address.png'
import Footer from '../../components/footer/Footer';







function ContactPage() {
   
    // const [data, setData] = useState({});

    function contactDetails(event) {
        // const { name, value } = event.target
        // const newData = { ...data }
        // newData[name] = value;
        // setData(newData);
        // console.log(newData)
    }

    return (

        <div className='contact-page' id='contact-pg'>

            <div>
                <NavBar />
            </div>

            <div className='contact-us-pg'>
                <h2>Contact Us Page</h2>
            </div>

            <div className='contact-us-header'>
                <h1>CONTACT US</h1>
            </div>

            <div className='know-us-better'>
                <h1>Would you like to know us better ?</h1>
            </div>

            <div className='phone-email-address'>
                <div className='phone-id'>
                    <img src={phone} alt="phone" />
                    <div className='ph-em-ad'>
                        <h2>Phone</h2>
                        <p>+234 9037231624 or <br /> +234 8115636432</p>
                    </div>
                </div>

                <div className='email-id'>
                    <img src={email} alt="email" />
                    <div className='ph-em-ad'>
                        <h2>Email Id</h2>
                        <p>  
                            <a href="joedangoldtech@gmail.com ">joedangoldtech@gmail.com </a>
                        </p>
                   </div>
  
                </div>                      

                <div className='address-id'>
                    <img src={address} alt="address"/>
                    <div className='ph-em-ad' id='address-cp'>
                        <h2>Address</h2>
                        <p> Federal Capital Territory,
                            <br /> Abuja, Nigeria.</p> 
                    </div>
                </div>

            </div>

            <div className="contact-container">
                <div className='contact-details'>

                    <form action="" className='contact-page-form'> 
                        <div className='get-in-touch'>
                            <h1>Get in touch with us</h1>
                            <p>For more enquiry about our services - please fill up the form below and we will contact you shortly</p>
                        </div>

                        <div className='name-phone-email-mes'>
                            <div className='name'>
                                <input className='fme-input' type='text' name='fullName' placeholder='Name'/> 
                            </div>

                            <div className='phone'>
                                <input className='fme-input' type='phone' name='phone' placeholder='Phone'/>
                            </div>

                            <div className='email-address'>
                                <input className='fme-input' onChange={contactDetails}  name='email' type='email' placeholder='Email ' />
                            </div>
                        
                            <div className='message'>
                                <textarea  id="message-input" onChange={contactDetails} name="message" cols="30" rows="10" placeholder='Message....'></textarea>
                            </div>

                        </div>


                        <div className='cn-send-message'>
                            <CustomButton  type={'submit'} content='SEND' />
                        </div>

                    </form>  

                    <div className='map'>        
                        <div class="gmap_canvas">        
                            <div class="mapouter">
                                <div class="gmap_canvass">
                                    <iframe title='iframez' width="600" height="500" id="gmap_canvasss" src="https://maps.google.com/maps?q=itf%20house%20abuja%20nigeria&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                    </iframe>
                                </div>   
                            </div>   
                        </div>

                    </div>   

                </div>

            </div>

            <div className='moving-truck'>
                <div className='truck1'> 
             
                </div>

                <div className='truck2'>
                  
                </div>

            </div>  

            <div className='cnt-footer'>
                <Footer />
            </div>

        </div>

    )
}

export default ContactPage