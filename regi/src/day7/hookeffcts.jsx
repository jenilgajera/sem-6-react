import React, { useState } from "react";

// Simulating an API call with a promise
function Fetchuserdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "vaibhav goriya", id: 1 });
    }, 5000);
  });
}

// Rendering array data as an unordered list
function UnorderedArray({ data }) {
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

let data = ["vaibhav", "goriya", "radhesh joshi"];

function ApiSimulation() {
  const [name, setname] = React.useState("loading.....");
  const [id, setid] = React.useState("loading.....");
  const [x, setX] = useState(300);
  const [mm, setmm] = useState(0);
  const [ss, setss] = useState(0);
  React.useEffect(() => {
    Fetchuserdata().then((data) => {
      setname(data.name);
      setid(data.id);
    });
    setInterval(() => {
        setX(x - 1);
        if (x === 0) setX(300);
        setmm(Math.trunc(x / 60));
        setss(x % 60);
    }, 1000);
  }, []);

  return (
    <div>
      {/* <div>
        <h1>id: {id}</h1>
        <h2>username: {name}</h2>
      </div>

    
      {/* Rendering the array as an unordered list */}
      {mm} : {ss}
      <UnorderedArray data={data} />
    </div>
  );
}

export default ApiSimulation;
