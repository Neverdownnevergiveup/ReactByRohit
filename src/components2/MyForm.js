import React, { useState } from 'react';
// import  ReactDOM  from 'react-dom/client';

function MyForm(value) {
    const [mycar, setmycar] = useState("volvo");
    const handleChange = (event)=>{
        setmycar(event.target,value)
    }
  return (
    <form className='form'>
        <select value ={mycar} onChange={handleChange}>
            <option value="ford">ford</option>
            <option value="volvo">volvo</option>
            <option value="fiat">fiat</option>
        </select>
    </form>
  );
};
export default MyForm;

