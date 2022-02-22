import React, { useEffect, useState } from 'react';

import './DrinkCard.css';

const DrinkCard = ({ drinkWheel, drinkSelection }) => {

  const [drink, setDrink] = useState();

  useEffect(() => {

    setDrink()

    setTimeout(() => {
      setDrink(drinkWheel[drinkSelection-1]?.drink);
      
    }, 5000);

    console.log(drink);
  }, [drinkSelection]);

  return (
    <div className='drinkCard'>
      {drink ? (
      <>
        <h3>Type: <i>{drink?.type}</i></h3>
        <h3>Calories: <i>{drink?.nutrition?.calories}</i></h3>
        <div className='drinkCardDiv'>
          <h3>Ingredients:</h3>
          <ul>
            {drink.nutrition?.ingredients?.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className='drinkCardDiv'>
          <h3>Allergies:</h3>
          <ul>
            {drink.nutrition?.allergies?.map((allergy, i) => {
              <li key={i}>{allergy}</li>
            })}
          </ul>
        </div>
      </>
      ) : (<></>)} 
    </div>
  )
}

export default DrinkCard