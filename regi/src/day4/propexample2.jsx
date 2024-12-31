import React from "react";

class Mylist extends React.Component {
  render() {
    // Access item from props
    const { item } = this.props;

    return (
      <ul>
        {item.map((i) => (
          <li key={i}>{i}</li> // Correctly return list items
        ))}
      </ul>
    );
  }
}

export default Mylist;
