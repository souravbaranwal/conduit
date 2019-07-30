import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: "",
      password: "",
      error: ""
    };
  }
  static contextType = UserContext;
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    const { email, password } = this.state;
    const data = { email, password };
    fetch("https://conduit.productionready.io/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: data })
    })
      .then(res => res.json())
      .then(user => {
        if (user.user) {
          localStorage.setItem("token", user.user.token);
          this.setState({
            user: user
          });
          this.context.updateUser(user);
          this.props.history.push("/");
        } else {
          const errorObj = user.errors;
          for (let key in errorObj) {
            this.setState({ error: `${key} ${errorObj[key]}` });
          }
        }
      })
      .catch(err => console.log(err, "inerr"));
  };

  render() {
    return (
      <>
        <div className="container has-text-centered column is-half is-offset-one-quarter">
          <h2>Sign in</h2>
          <Link className="is-primary" to="/signup">
            Need an account?
          </Link>

          <div className="field">
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
          <p>{this.state.error}</p>
          <div className="field">
            <p className="control">
              <button onClick={this.handleClick} className="button is-success">
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
