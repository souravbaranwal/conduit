import React, { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      bio: "",
      image: ""
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };
  handleClick = () => {
    const { email, username, password, image, bio } = this.state;

    const data = { email, username, password, image, bio };
    const token = localStorage.getItem("token");

    fetch("https://conduit.productionready.io/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${token}`
      },
      body: JSON.stringify({ user: data })
    })
      .then(res => res.json())
      .then(user => {
        console.log(user);
        this.setState({ user });

        this.props.history.push("/");
      });
  };

  handleLogout = () => {
    localStorage.removeItem("token");

    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <div className="columns is-centered" style={{ marginTop: "50px" }}>
          <div className="column is-half">
            <h2 className="title">Your Settings</h2>
            <div className="field">
              <div className="control">
                <input
                  onChange={this.handleChange}
                  name="image"
                  className="input"
                  type="text"
                  placeholder="URL of picture"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  onChange={this.handleChange}
                  name="username"
                  className="input"
                  type="text"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea
                  onChange={this.handleChange}
                  name="bio"
                  className="textarea"
                  placeholder="Short bio about you"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  onChange={this.handleChange}
                  name="email"
                  className="input"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  onChange={this.handleChange}
                  name="password"
                  className="input"
                  type="password"
                  placeholder="New Password"
                />
              </div>
            </div>
            <div className="field">
              <p className="control">
                <button
                  onClick={this.handleClick}
                  className="button is-success"
                >
                  Update Settings
                </button>
              </p>
              <p className="control" style={{ marginTop: "10px" }}>
                <button
                  onClick={this.handleLogout}
                  className="button is-success"
                >
                  Logout
                </button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Settings;
