import React, { useState } from "react";

function App() {

  const [name,setName]=useState("");

  function handleChange(event){
    setName(event.target.value);
    console.log(event.target.value);
  }

  const[nameUpdated,setNameUpdated]=useState("");
  
  function handleClick(event){
    setNameUpdated(name)
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {nameUpdated}</h1>
      <form onClick={handleClick}>
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="What's your name?"
      value={name} />
      <button >Submit</button>
      </form>
    </div>
  );
}

export default App;
