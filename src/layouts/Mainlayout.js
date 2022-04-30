import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Mainlayout = (props) => {
  return (
    <div>
      <Header {...props}/>
      <div className='main'>
      {props.children}
      <Footer />
      </div>
    </div>
  )
}

export default Mainlayout
