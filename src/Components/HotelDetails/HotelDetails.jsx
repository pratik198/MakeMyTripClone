import React from 'react'
import './HotelDetails.scss'
import { useState,useEffect } from 'react'

function HotelDetails(props) {


    useEffect(()=>{
        console.log(props.details);
    },[])

  return (
    <div>
      hotel details
    </div>
  )
}

export default HotelDetails
