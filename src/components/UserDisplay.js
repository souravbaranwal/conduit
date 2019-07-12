import React, { Component } from "react";
import "./userDisplay.scss";

class UserDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className=" userDisplay" style={{ marginTop: "50px" }}>
          <div className="has-text-centered">
            <img
              className="userImage"
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="profileImage"
            />

            <h3>User Name Here</h3>

            <button className="button is-primary is-pulled-right">
              Edit Profile Settings
            </button>
          </div>
        </div>
        <div className="column ">
          <div className="tabs">
            <ul>
              <li className="is-active">
                <a href="/#">My Articles</a>
              </li>

              <li>
                <a href="/#">Favorited Articles</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default UserDisplay;
