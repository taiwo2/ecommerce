import React from 'react'
import './button.scss'
const Button = ({children, ...otherprops}) => {
  return (
    <button className='btn' {...otherprops}>
      {children}
    </button>
  )
}

export default Button
