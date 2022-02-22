import React, { useEffect, useState } from 'react'

import WheelSpoke from './wheelSpoke/WheelSpoke'

import './Wheel.css'

const Wheel = ({ drinkSelection, drinkWheel }) => {

  const [wheelClass, setWheelClass] = useState('wheel')

  useEffect(() => {

    setWheelClass('wheel')

    console.log("<WHEEL/>>>>>>>>>>>>>>>>>>>> drinkSelection | drinkWheel| ", drinkSelection, drinkWheel);

    setWheelClass(`wheel spin${drinkSelection}`);

    console.log("<WHEEL/>>>>>>>>>>>>>>>>>>>> wheelClass | ", wheelClass);


  });

  return (
    <div className={wheelClass}>

      <ul>
        {drinkWheel.map((drink, i) => (
          <li key={i} className='wheel-li'>
            <WheelSpoke key={i} name={`${drink.drink.name}`} icon={`${drink.drink.icon}`} />
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Wheel
