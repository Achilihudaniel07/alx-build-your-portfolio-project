import React from 'react'
import './ClientPage.css'
import client from "../../assets/images/client.png";

function ClientPage() {
    return (   
        <div className='client-info'>

            <div className='client-details'>
                <h1>Clients Words</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sit itaque aperiam cupiditate voluptate libero distinctio quisquam! Dolore molestiae consectetur rem, ad, eaque explicabo eius quae recusandae officia, nulla voluptatum.</p>
                                      
                <div className='client-box'>
                    <div className='client-imgz'>
                    </div>

                    <div className='client-remarkz'>
                        <img src={client} alt="" />
                        <h1>Achilihu Uzoma Christopher</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis. Impedit excepturi enim molestias quis aut dolorum quibusdam eveniet et tempore. Nostrum doloremque doloribus vitae voluptatum impedit, ipsam placeat ad.</p>
                    </div>
                    

                    <div className='client-imgz'>
                    </div>

                    <div className='client-remarkz'>
                        <img src={client} alt="" />
                        <h1>Achilihu Ijeoma Angela</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis. Impedit excepturi enim molestias quis aut dolorum quibusdam eveniet et tempore. Nostrum doloremque doloribus vitae voluptatum impedit, ipsam placeat ad.</p>
                    </div>
                    

                    <div className='client-imgz'>
                    </div>

                    <div className='client-remarkz'>
                        <img src={client} alt="" />
                        <h1>Achilihu Chinyere Beryl</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis. Impedit excepturi enim molestias quis aut dolorum quibusdam eveniet et tempore. Nostrum doloremque doloribus vitae voluptatum impedit, ipsam placeat ad.</p>
                    </div>
                    

                    <div className='client-imgz'>
                    </div>

                    <div className='client-remarkz'>
                        <img src={client} alt="" />
                        <h1>Achilihu Chidinma Victoria</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis. Impedit excepturi enim molestias quis aut dolorum quibusdam eveniet et tempore. Nostrum doloremque doloribus vitae voluptatum impedit, ipsam placeat ad.</p>
                    </div>
                    

                    <div className='client-imgz'>
                    </div>

                    <div className='client-remarkz'>
                        <img src={client} alt="" />
                        <h1>Achilihu Uchenna Daniel</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis. Impedit excepturi enim molestias quis aut dolorum quibusdam eveniet et tempore. Nostrum doloremque doloribus vitae voluptatum impedit, ipsam placeat ad.</p>
                    </div>

                </div>

            </div>

        </div>
    ) 
}

export default ClientPage