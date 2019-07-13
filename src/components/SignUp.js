import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };
  
  handleClick = () => {
    const { username, email, password } = this.state;
    const data = { username, email, password };
    fetch('https://conduit.productionready.io/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: data })
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem('token', user.user.token)
      this.setState({
        user: user
      });
      this.props.history.push("/signin");

    })
  }

  render() {
    return (
      <>
        <div className="has-text-centered column is-half is-offset-one-quarter">
          <h2>Sign up</h2>
          <Link className="is-primary" to="/signin">
            Have an account?
          </Link>

          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                onChange={this.handleChange}
                name="username"
                className="input"
                type="text"
                placeholder="Username"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
            <p className="control has-icons-left has-icons-right">
              <input
                onChange={this.handleChange}
                name="email"
                className="input"
                type="email"
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                onChange={this.handleChange}
                name="password"
                className="input"
                type="password"
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button onClick = {this.handleClick} className="button is-success">Signup</button>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
