import React from 'react';
import "./RainbowBackground.css"

function RainbowBackground(props) {
  return (
    <div className="rainbow-content">
      <div className='top-left'></div>
      <div className='top-center-left'></div>
      <div className='top-center'></div>
      <div className='top-right'></div>
      <div className='center-right'></div>
      <div className='bottom-right'></div>
      <div className='bottom-center-right'></div>
      <div className='bottom-center-left'></div>
      <div className='bottom-left'></div>
      <div className='center-left'></div>
      <div className='center'></div>
      <div className='center-center-right'></div>
    </div>
  );
}

export default RainbowBackground;