import React, { useEffect, useState } from 'react';

import './Selector.css';

const Selector = ({ drinkSelection, drinkWheel }) => {

  const [drinkDisplay, setDrinkDisplay] = useState('')

  useEffect(() => {

    setDrinkDisplay('')

    setTimeout(() => {

      drinkSelection ? setDrinkDisplay(drinkWheel[drinkSelection-1].drink.name) : setDrinkDisplay('')
      
      console.log("<SELECTOR/>>>>>>>>>>>>>>>>>>>> drinkDisplay | ", drinkDisplay);
      
    }, 5000);
  }, [drinkSelection]);

  return (
    <>
      <div className='selector-drink__container'>
        <h1 className='selector-drink'>{drinkDisplay}</h1>
      </div>
      <div className='pointer'></div>
    </>
  )
}

export default Selector