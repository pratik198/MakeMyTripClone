import React from 'react'
import './FlightInput.scss'

function FlightInput() {
  return (
    <div className='flight-input-section'>
       <div className='flight-input'>
           <div className='first-sec'>
               <ul>
                   <li>One Way</li>
                   <li>Round Trip</li>
                   <li>Multi City</li>
               </ul>
           </div>
       </div>
    </div>
  )
}

export default FlightInput
