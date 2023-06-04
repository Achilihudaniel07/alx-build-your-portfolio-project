import React from 'react'

import allstaffs from './allstaffs.json'
import Footer from '../../components/footer/Footer'


function AllStaffPage() {
  return (
    <div>

        <div className='staff-header' style={{marginBottom:'20px'}}>
            <h1 id='staff-hd'>ALL OUR STAFF</h1>
        </div>

        <div className='staff-images'>
            {
                allstaffs.map((allstaff, index) => (
                    <React.Fragment key={index}>
                        <div className='staff-imagez'>
                            <img src={allstaff.img} alt={allstaff.name} />
                            <div className='staff-detailz'>
                                <h1>{allstaff.name}</h1>
                                <p>{allstaff.about}</p>

                            </div>
                        </div>
                    
                    </React.Fragment>
                ))
            }
        </div>

        <div className='all-staff-footer' style={{marginTop:'20px'}}>
            <Footer/>
        </div>

    </div>
  )
}

export default AllStaffPage