import React, { useState } from 'react';

import Selector from './components/selector/Selector';
import Wheel from './components/wheel/Wheel';
import StartButton from './components/startButton/StartButton';
import DrinkCard from './components/drinkCard/DrinkCard';

import drinkBook from './assets/drinkBook/drinkBook.json';

import './App.css';

function App() {

  const [drinkWheel, setDrinkWheel] = useState(drinkBook.map(drink => ({ drink })));

  const [winner, setWinner] = useState()

  const shuffleArray = (arr) => {
    let shuff = arr
    for(let i = shuff.length-1; i>=0; i--) {
        let j = Math.floor(Math.random() * ((shuff.length-1) + 1));
        let k = shuff[i];
        shuff[i] = shuff[j];
        shuff[j] = k;
    }

    return shuff;
}

const spinWheel = () => {

  console.log("<<<<SPIN>>>>\n<<<<SPIN>>>>\n");

  let rand =  Math.floor(Math.random()*8 + 1)

  setWinner(rand);

  console.log("<APP/>>>>>>>>>>>>>>>>>>>", rand);
  console.log("<APP/>>>>>>>>>>>>>>>>>>>>", winner);
  console.log("<APP/>>>>>>>>>>>>>>>>>>>>", drinkWheel);

}

  return (
    <div className="App">
      <div className='game-container'>
        <Selector drinkSelection={winner} drinkWheel={drinkWheel} />
        <Wheel drinkSelection={winner} drinkWheel={drinkWheel}/>
        <StartButton onStart={spinWheel}/>

        <DrinkCard drinkSelection={winner} drinkWheel={drinkWheel} />
      </div>
    </div>
  );
}

export default App;