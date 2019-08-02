import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import UserMyArticle from "./UserMyArticle";
import UserFavArticle from "./UserFavArticle";
import Loader from "./Loader";

class ArticleUserDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      active: "myArticle"
    };
  }

  componentDidMount() {
    fetch(
      `https://conduit.productionready.io/api/profiles/${
        this.props.location.state.username
      }`
    )
      .then(res => res.json())
      .then(user => {
        console.log(user);
        this.setState({ user: user.profile });
      });
  }
  render() {
    const user = this.state.user;

    return (
      <>
        {user !== null ? (
          <>
            <div className=" userDisplay" style={{ marginTop: "50px" }}>
              <div className="has-text-centered">
                <div className="level">
                  <div className="level-item has-text-centered">
                    <figure className="image is-128x128 is-round has-text-centered">
                      <img
                        className="is-rounded"
                        src={
                          user.image
                            ? user.image
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                        }
                        alt="userImage"
                      />
                    </figure>
                  </div>
                </div>

                <h3>{user.username}</h3>

                {/* <button className="button is-primary is-pulled-right">
                  Follow User
                </button> */}
              </div>
            </div>
            <div className="container" style={{ marginBottom: "20px" }}>
              <NavLink
                activeClassName="active "
                className="button is-primary"
                onClick={() => this.setState({ active: "myArticle" })}
              >
                My Articles
              </NavLink>{" "}
              <NavLink
                activeClassName="active "
                className="button is-primary"
                onClick={() => this.setState({ active: "fav" })}
              >
                Favorite Articles
              </NavLink>{" "}
            </div>
            {this.state.active === "myArticle" ? (
              <UserMyArticle user={user.username} />
            ) : (
              <UserFavArticle user={user.username} />
            )}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default ArticleUserDisplay;
