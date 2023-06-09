// yarn add prop-types
//ejecutarlo yarn dev



import PropTypes from 'prop-types';
import { useState } from 'react';


export const CounterApp = ({
   value
}) => {

  const [counter,setCounter ] = useState(value);   // useState() valor inicial

  const  handleAdd = (event) =>  {
    //console.log(event);
    setCounter(counter+1)
  }

  const  handleReset = (event) =>  {
    //console.log(event);
    setCounter(0)
  }

  const  handleSubstract = (event) =>  {
    //console.log(event);
    setCounter(counter-1)
  }


  return (
    <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>
       {/* <code>{ JSON.stringify(newMessage)  }</code>*/}
       
    
    <button onClick={  handleAdd//</>(event) => handleAdd(event)  
    }> +1 </button>
    <button onClick={ handleSubstract } >-1</button>
    <button onClick={  handleReset } >Reset</button>
       
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
   
}

// los defaultProps entran antes que los propTypes 

CounterApp.defaultProps = {
    value: 0
    
}