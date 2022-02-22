import React, { useState } from 'react'



const WheelSpoke = ({ name, icon }) => {
  return (
    <div className='wheelSpoke'>
        <img src={process.env.PUBLIC_URL + `icons/${icon}.png`}/>
        <p>{name}</p>
    </div>
  )
}

export default WheelSpoke