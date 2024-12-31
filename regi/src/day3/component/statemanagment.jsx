import React from "react";

class Statemanagment extends React.Component {
  state = {
    first: true,
    second: 5.4,
    third: "hello",
    color1:"purple",
  };
  render() {
    const { first, second, third } = this.state;
    return (
      <div>
        <button className="button" disabled={first}>
          my button
        </button>
        <p style={{color:{color1}}}>
          value of Float variable <strong>{second} </strong>
        </p>
        <p>
          value of String variable <strong>{third}</strong>
        </p>
        {/* <style>
          {`
            .button{
            color:blue;
           
            }
            p{
            color:green;
            }
            `}
        </style> */}
      </div>
    );
  }
}

export default Statemanagment;
