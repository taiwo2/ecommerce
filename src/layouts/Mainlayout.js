import React from 'react'
import Footer from '../component/Footer/Footer'
import Header from '../component/Header/Header'

const Mainlayout = (props) => {
  return (
    <div>
      <Header {...props}/>
      <div className='main'>
      {props.children}
      
      </div>
      <Footer />
    </div>
  )
}

export default Mainlayout
