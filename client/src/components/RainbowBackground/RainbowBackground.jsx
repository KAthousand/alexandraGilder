import React from 'react';
import "./RainbowBackground.css"

function RainbowBackground(props) {
  const { colors } = props
  return (
    <div className="rainbow-content">
      <div className={colors ? 'top-left' : 'top-left top-left2'}></div>
      <div className={colors ? 'top-center-left': 'top-center-left top-center-left2'}></div>
      <div className={colors ? 'top-center' : 'top-center top-center2'}></div>
      <div className='top-right'></div>
      <div className='center-right'></div>
      <div className='bottom-right'></div>
      <div className='bottom-center-right'></div>
      <div className='bottom-center-left'></div>
      <div className='bottom-left'></div>
      <div className='center-left'></div>
      <div className='center'></div>
      <div className={colors ? 'center-center-right':'center-center-right center-center-right2'}></div>
    </div>
  );
}

export default RainbowBackground;