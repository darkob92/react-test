import React from 'react';

import './toggle.css';

const toggle = (props) => {
  return (
    <div>
      <button 
        type='button' 
        className='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue toggle' 
        onClick={props.changeColor}
        >
        {props.text}
      </button>
    </div>
  )
}

export default toggle;