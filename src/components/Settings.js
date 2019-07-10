import React, { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="columns is-centered" style={{ marginTop: "50px" }}>
          <div className="column is-half">
            <h2 className="title">Your Settings</h2>
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="URL of picture" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Username" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <textarea class="textarea" placeholder="Short bio about you" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input" type="email" placeholder="Email" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="password"
                  placeholder="New Password"
                />
              </div>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success">Update Settings</button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Settings;
