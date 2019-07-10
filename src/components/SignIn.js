import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
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
    const { email, password } = this.state;
    const data = { email, password };
    fetch('https://conduit.productionready.io/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: data })
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem('token', user.token)
      this.setState({
        user: user
      })
    })
  }

  render() {
    return (
      <>
        <div className="has-text-centered column is-half is-offset-one-quarter">
          <h2>Sign in</h2>
          <Link className="is-primary" to="/signup">
            Need an account?
          </Link>

          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                onChange={this.handleChange}
                name="email"
                class="input"
                type="email"
                placeholder="Email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                onChange={this.handleChange}
                name="password"
                class="input"
                type="password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button onClick={this.handleClick} class="button is-success">
                Login
              </button>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
