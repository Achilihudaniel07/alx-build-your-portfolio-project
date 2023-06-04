import React from 'react'
import './PrivacyPolicyPage.css'

import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';




function PrivacyPolicyPage() {

  return (
    <div className='privacy-page'>
        <div>
          <NavBar/> 
        </div>
    
      <div className='privacy-pg'>
        <h2>Privacy Policy Page</h2>
      </div>

      <div className='privacy-header'>
        <h1>PRIVACY POILICY</h1>
      </div>


      <div className='privacy-details'>
        <p>
          This JOE-DAN GOLD CONSTRUCTION COMPANY privacy policy collects, uses, consults or otherwise processes a customer's Personal Data. For the purposes of this policy.
        </p>

        <p>
          We are committed to protecting the privacy of our users and customers. This Privacy Policy is especially directed at:
        </p>

        <ul>
          <li>visitors and subscribers of this website platform;</li>
          <li>natural persons contacting us through the contact or other forms available on the website platform;</li>
          <li> subscribers to our newsletter(s);</li>
          <li>customers interested in to use our services;</li>
        </ul>

        <p>
          This Privacy Policy is intended to inform you how we gather, define, and use information that could identify you, such as your name, email address, address, other contact details, online identifiers or other information that you provide to us when using our websites or when relying on our services. Please take a moment to read this Privacy Policy carefully.
        </p> 

        <p>
          Your personal data is created, stored and transmitted in a variety of paper and electronic formats, including databases at JOE-DAN GOLD CONSTRUCTION COMPANY. It is the company's policy to limit access to and the use of your personal data by our staff, faculty and authorized affiliates who have a legitimate interest in it for the purpose of carrying out their professional and contractual duties.
        </p>

        <p>
          Your personal data relating to your enquires will be used, shared and otherwise processed by staff,  and other qualified personnels.
        </p>

      </div>

      <div className='footer'>
        <Footer/>
      </div>

    </div>
  )
}
  
export default PrivacyPolicyPage;