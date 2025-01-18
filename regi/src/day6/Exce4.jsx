import React, { useState } from 'react'

const Exce4 = () => {
    const[char,setchar]=useState("");
  return (
    <>
    <div>Exce4</div>
    <input type="text" value={char} onChange={(e)=>setchar(e.target.value)}/>
    <span>The lenght of Characters is :{char.length}</span>
    </> 
    
  )
}



export default Exce4




