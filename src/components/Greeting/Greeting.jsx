import React, { useEffect, useState } from "react";

const Greeting = (props) => {
    const [ name, setName ] = useState(props.name);
    useEffect(() => {
        setTimeout(() => {
            setName("Gregorio");
        }, 3000);
    })
    return <h1>Hola <span>{name}</span></h1>
};

export default Greeting;