import React, { Component } from "react";
import "./userDisplay.scss";
import UserContext from "../UserContext";

class UserDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = UserContext;

  render() {
    const user = this.context.user;
    return (
      <>
        <div className=" userDisplay" style={{ marginTop: "50px" }}>
          <div className="has-text-centered">
            {user !== null ? (
              <img className="userImage" src={user.image} alt="profileImage" />
            ) : (
              ""
            )}

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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error delectus nam iure? Pariatur eaque, aliquid earum delectus distinctio dolores cum impedit ex, cupiditate atque aliquam quasi ducimus soluta neque.</p>

              </li>

              <li>
                <a href="/#">Favorited Articles</a>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error delectus nam iure? Pariatur eaque, aliquid earum delectus distinctio dolores cum impedit ex, cupiditate atque aliquam quasi ducimus soluta neque.</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default UserDisplay;
