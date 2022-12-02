import { useState } from "react";

const Counter = () => {
    // hooks (funciones)
    //getter, setters
    // const [getter, setter] = useState(initialValue)
    const [Counter, setCounter] = useState(0);
    const [name, setName] = useState("");

    const add= () => {
        setCounter(Counter + 1);
    };
    const substract = () => {
        setCounter (Counter - 1);
    };

    return ( 
        <>
            {/* Eventos Sinteticos --> Virtual DOM */}
            <h3>Contador: {Counter} </h3>
            <button onClick={add}>+</button>
            <button onClick={substract}>-</button>
        </>
    );
};
 
export default Counter;