import React, { useState } from "react";
import './Counter.css' 

const Counter = (props) => {
    const [counter, setCounter] = useState(props.counter);

    const increase = () => {
        setCounter(counter + props.countValue);
    };

    const decrease = () => {
        setCounter(counter - props.countValue);
    };

    const restart = () => {
        setCounter(0);
    };

    return <article>
        <h3>Counter <span>x{props.countValue}</span>: </h3>
        <h1>{counter}</h1>
        <button onClick={() => decrease()}>-</button>
        <button onClick={() => increase()}>+</button>
        <button onClick={() => restart()}>Restart</button>
    </article>
};

export default Counter;