import React,{ useState } from 'react'
import PropTypes from 'prop-types';


const CounterApp = ({value = 0}) => {
    
    const [ counter, setCounter ] = useState(value);
    

    const handleAdd = (e) => {
        setCounter(counter + 1 );
        
    
    }
    const handleReset = (e) => {
        setCounter(value);
        
    
    }
    const handleSubtract = (e) => {
        setCounter(counter - 1 );
        
    
    }
    
    

    return (
        <>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick= {(e) =>{handleSubtract(e)  }}>-1</button>
        <button onClick= {(e) =>{handleReset(e)  }}>Reset</button>
        <button onClick= {(e) =>{handleAdd(e)  }}>+1</button>
        </>
    )

}

export default CounterApp;

CounterApp.propTypes = {
    value:PropTypes.number.isRequired,
}