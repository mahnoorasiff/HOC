import React, { useState } from 'react';
import HOC from "./HOC"


function HoverCounter(props) {
  return (
    
        <div >
            <button onMouseOver={props.handler}>
          <h4>Increase Hover Count {props.name} {props.counter} </h4>
          </button>
        </div>
    
  );
}

export default HOC(HoverCounter);
