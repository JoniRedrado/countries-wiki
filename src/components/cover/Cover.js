import React from 'react'
import map from '../../media/map.jpg'
import './Cover.css'


const Cover = () => {
  return (
    <div className='cover-container'>
      <img className='cover-img' src={map} alt="Map" />
      <h1>Welcome to Countries Wiki!</h1>
      <p>You can search by country name and continent.</p>
    </div>
  )
}

export default Cover