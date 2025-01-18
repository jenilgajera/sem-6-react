import React, { useState } from "react";

const Exce3 = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
      {isVisible && <p>{text}</p>}
    </div>
  );
};

export default Exce3;
