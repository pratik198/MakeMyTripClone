import React from 'react'
import Header from '../Header/Header'
import './Main.scss'
import Navigation from '../Navigation/Navigation'

function Main() {
  return (
    <div className='main-page'>
        <Header/>
        <Navigation/>
    </div>
  )
}

export default Main