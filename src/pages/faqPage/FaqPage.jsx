import React from 'react'
import './FaqPage.css'
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import faqs from './faqs.json'

function FaqPage() {
  return (
  
    <div className='faq-page'>
      <div>
        <NavBar/>
      </div>

      <div className='faq-pg'>
        <h2>Frequently Asked Questions Page</h2>
      </div>

      <div className='faq-header'>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      </div>

      <div className='faq-details'>
        {
          faqs.map((faq, index) => (
            <React.Fragment key={index}>
              <div className='faq-box'>
                <h2 className='question-name'>{faq.question}</h2>
                <p className="answers-detail">{faq.answers}</p>
                
              </div>
          
            </React.Fragment>
          ))
        }
      </div>

      <div className='footer'>
        <Footer/>
      </div>

    </div>
  )
}


export default FaqPage