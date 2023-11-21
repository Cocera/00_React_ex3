import React, { useState } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(props.counter);

    const increase = () => {
        setCounter(counter +1);
    };

    const decrease = () => {
        setCounter(counter -1);
    };

    return <main>
        <h2>The counter is here</h2>
        <h1>Counter: {counter}</h1>
        <button onClick={() => increase()}>+</button>
        <button onClick={() => decrease()}>-</button>
    </main>
};

export default Counter;