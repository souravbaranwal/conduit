import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="banner">
          <h1>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </>
    );
  }
}

export default Home;
