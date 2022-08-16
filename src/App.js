import { useState } from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState()

  function handleClick() {
    // This is js. Inspect page and see user input in terminal
    console.log(input)
  }
  return (
    <>
    {/* This is JSX, see how comments are different */}
    <h1 className='header'>To Do List</h1>
    <div className='input-container'>
      {/* e "event" sent to funtion setInput then stored in input variable */}
      <input className="user-input" onChange={(e) => setInput(e)}></input>  
      <button className="button" onClick={handleClick}>Add</button>
    </div>
    </>
  );
}

export default App;
