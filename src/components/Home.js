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
        <section className="hero is-primary hero-brand">
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
