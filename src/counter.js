import { useState } from "react";

function Counter() {
    // UseState is a react hook that takes a [variable, setterFunction] and a default state 
    const [number, setNumber] = useState(1)

    // Handles the button being clicked
    function handleClick() {
      setNumber(prev => {
        return prev+=1
      })
    }

    return (
        <>
         <h1>{number}</h1>
         {/* OnClick do this function handleClick */}
        <button onClick={handleClick}>+</button>
        </>
    )
}

export default Counter;