import React from 'react'
import shopMen from '../../assets/mencloth.png';
import shopWomen from '../../assets/womenClothing.jpg'
import './directory.scss'
const Directory = () => {
  return (
    <div className='directory'>
      <div className='wrap'>
        <div className='item'
          style={{
            backgroundImage: `url(${shopMen})`
          }}
        >
          <a>shop man</a>
        </div>
        <div className='item'
        style={{
          backgroundImage: `url(${shopWomen})`
        }}
        >
          <a>shop Woman</a>
        </div>

      </div>
    </div>
  )
}

export default Directory;