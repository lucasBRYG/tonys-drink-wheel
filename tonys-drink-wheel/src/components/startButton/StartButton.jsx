import React from 'react';

import './StartButton.css';

const StartButton = ({ onStart }) => {
  return (
    <button onClick={onStart} className='startButton'>Spin</button>
  )
}

export default StartButton