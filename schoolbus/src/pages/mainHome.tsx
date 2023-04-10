import React from 'react'
import MainHome from "../Client/Components/Home/homePage"
import Header from './header'
import Footer from './footer'

function mainHome() {
  return (
    <div>
      <Header/>
        <MainHome/>
        <Footer/>
      
    </div>
  )
}

export default mainHome
