import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
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
      <div />
    </>
  );
}

export default Nav;
