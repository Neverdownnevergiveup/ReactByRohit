import React, {useState} from 'react';


export default function Disable() {
    const [name, setName]=useState("");

  return (
    <>
    <h3>Disable button if text area is blank</h3>
    <input onChange={(e)=>setName(e.target.value)}/>
    <button disabled={!name}>Submit</button>
      
    </>
  )
}
