import React, { Component } from "react";
import Articles from './Articles';
import Nav from "./Nav";

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
        <div className="articles">
          <Articles/>
        </div>
      </>
    );
  }
}

export default Home;
