import React from "react";

class Statemanagment1 extends React.Component {
  state = {
    first: true,
    second: 5.4,
    third: "hello",
    color1: "purple",
    onclick:"alert krupss",
  };
  constructor() {// hear use componentdidmount then use alert method and then use onlick variable value alos 
    super();
    setTimeout(() => {
      this.setState({
        first: true,
        second: 5.4,
        third: "hello",
        color1: "green",
        onclick:"alert vaibhav"
      });
    }, 3000);
  }
  render() {
    const { first, second, third, color1, onclick } = this.state;
    return (
      <div>
        <button className="button" onClick={()=>{
            alert({onclick});
        }}>
          my button
        </button>
        <p style={{ color: color1}}>

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

export default Statemanagment1;
