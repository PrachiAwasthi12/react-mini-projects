import React from 'react'
import { useState,useEffect } from 'react'
const Counter = () => {
    //let count = 0; //normal variable
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState(`Count is ${count}`);
    function increment(){         //normal function
        //++count
        // setCount(count + 1);
        setCount((prevCount) => prevCount + 1);
        console.log("count=",count);
    }
    const decrement = () => {   //arrow function
        //--count
        //setCount(count - 1);
        setCount((prevCount) => prevCount - 1);
        console.log("count=",count);
    }
    useEffect(() => {
       setMessage(`Count is ${count}`);  //if array is empty then it will run only once when the component is mounted. If we pass a variable in the array then it will run whenever that variable changes.
    }, [count]);
  return (
    <div><h1>Counter</h1>
    <div className='counter'>
        <button  className='btn' onClick={increment}>+</button>
        <div className='count'>{count}</div>
        <button className='btn' onClick={decrement}>-</button>
    </div>
    <h2>{message}
    </h2></div>
  )
}
//npm is node package manager which is used to install or uninstall the packages in react.
export default Counter
