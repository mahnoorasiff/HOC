import React, { useState } from 'react';

const HOC= (OGComp)=> {
   const UpdatedHOC =()=>{
    const [count, setCount] = useState(0);      

        const incrementCount =()=>{
            setCount(count+1)
        }
    return (
    <OGComp  counter={count} handler={incrementCount}/>  
    );
  }
return UpdatedHOC

}

  export default HOC;
  