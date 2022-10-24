import React, { useState } from 'react';
import HOC from "./HOC"


function ClickCounter(props) {
    console.log("countt", props.counter)
    return (
          <button onClick={props.handler}>
         <h2> Increase Click Count {props.name} {props.counter} </h2>
          </button>   
    );
  }
  
  export default HOC(ClickCounter);
  