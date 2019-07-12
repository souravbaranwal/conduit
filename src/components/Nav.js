import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";

const LoggedInNav = () => (
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
        </div>
      </div>
    </div>
  </div>
);

const LoggedOutNav = () => (
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
);

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => {
          console.log(user);
          return user ? <LoggedInNav /> : <LoggedOutNav />;
        }}
      </UserContext.Consumer>
    );
  }
}

export default Nav;
