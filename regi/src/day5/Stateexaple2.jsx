import React, { useState } from "react";

const Stateexaple2 = () => {
  const [name, setname] = useState("rku");
  const [age, setage] = useState("19");
  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      ></input>

      <h1>{age}</h1>
      <input
        type="number"
        value={age}
        onClick={(e) => {
          setage(e.target.value);
        }}
      />
    </div>
  );
};

export default Stateexaple2;
