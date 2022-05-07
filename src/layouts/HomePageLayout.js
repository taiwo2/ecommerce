import React from 'react'
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header'

const HomePagelayout = (props) => {
  return (
    <div  className='fullHeight'>
      <Header {...props}/>
      {props.children}
      <Footer />
    </div>
  )
}

export default HomePagelayout;
