import React from 'react'
import * as ReactDOM from 'react-dom';
export default function Counter() {
    const [Counter, setCounter]=React.useState(0);
  return (
    <div>
        <h2>Counter:{Counter}</h2>
        <button className='btn' onClick={()=>setCounter(Counter + 1)}>Increment</button>
        <button className='btn' onClick={()=>setCounter(Counter - 1)}>Decrement</button>

      
    </div>
  );
}
ReactDOM.render(<Counter /> , document.getElementById("root"));
