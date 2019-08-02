import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";

const LoggedInNav = props => {
  return (
    <div className="container">
      <div className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/">
            <p>Conduit</p>
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink
                exact
                activeClassName="active "
                className="button is-primary"
                to="/"
              >
                <span>Home</span>
              </NavLink>
              <NavLink
                activeClassName="active "
                className="button is-primary"
                to="/createpost"
              >
                New Post
              </NavLink>
              <NavLink
                activeClassName="active "
                className="button is-primary"
                to="/settings"
              >
                Settings
              </NavLink>
              <NavLink
                activeClassName="active "
                className="button is-primary"
                to="/user"
              >
                {props.user ? props.user.username : null}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoggedOutNav = () => (
  <div className="container">
    <div className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <p>Conduit</p>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <NavLink
              exact
              activeClassName="active "
              className="button is-primary"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="active "
              className="button is-primary"
              to="/signin"
            >
              Sign In
            </NavLink>
            <NavLink
              activeClassName="active "
              className="button is-primary"
              to="/signup"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
);

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  static contextType = UserContext;

  componentDidMount() {
    const { token } = localStorage;
    if (token) {
      fetch(`https://conduit.productionready.io/api/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${token}`
        }
      })
        .then(res => res.json())
        .then(({ user }) =>
          this.setState({
            user: user
          })
        );
    }
  }

  render() {
    return this.context.user ? (
      <LoggedInNav user={this.state.user} />
    ) : (
      <LoggedOutNav />
    );
  }
}

export default Nav;
