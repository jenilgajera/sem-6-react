import React from "react";

class Mybutton extends React.Component {
  render() {
    // Destructure props
    const { prop1, xyz } = this.props;
    return (
      <button disabled={prop1}>{xyz}
      </button>
    );
  }
}

export default Mybutton;
