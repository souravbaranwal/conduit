import React, { Component } from "react";
import Articles from "./Articles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* <div className="banner hero">
          <h1>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
        <div className="articles">
          <Articles/>
        </div> */}
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">conduit</h1>
              <h2 className="subtitle">A place to share your knowledge.</h2>
            </div>
          </div>
        </section>
        <div className="articles container">
          <Articles />
        </div>
      </>
    );
  }
}

export default Home;
