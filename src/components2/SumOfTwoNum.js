import React from 'react'
import * as ReactDOM from 'react-dom';
export default function SumOfTwoNum() {
    const[number1, setnumber1]=React.useState();
    const[number2, setnumber2]=React.useState();
    const[total, setTotal]=React.useState(0);
    function CalculateTotal(){
        setTotal(number1 + number2);
    }
  return (
    <div>
        <h2>Adding two number</h2>
        <input placeholder="first number" type="number" value={number1} onChange={(e)=>setnumber1(+e.target.value)} />
        <input placeholder="second number" type="number" value={number2} onChange={(e)=>setnumber2(+e.target.value)} />
        <button onClick={CalculateTotal}>Add two number</button>
        <p>total: {total||""}</p>

      
    </div>
  )
}
ReactDOM.render(<SumOfTwoNum /> , document.getElementById("root"));
