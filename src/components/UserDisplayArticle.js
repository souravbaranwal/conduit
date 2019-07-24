import React, { Component } from "react";

class UserDisplayArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
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
    if (this.state.user) {
      let { image, bio, createdAt, email, id, username, updatedAt } = user;
    }
    console.log(this.state.user);

    return (
      <>
        {user !== null ? (
          <>
            <div className=" userDisplay" style={{ marginTop: "50px" }}>
              <div className="has-text-centered">
                {user !== null ? (
                  <img
                    className="userImage"
                    src={user.image}
                    alt="profileImage"
                  />
                ) : (
                  ""
                )}

                <h3>username</h3>

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
                  </li>

                  <li>
                    <a href="/#">Favorited Articles</a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {/* 
        <div className=" userDisplay" style={{ marginTop: "50px" }}>
          <div className="has-text-centered">
            {user !== null ? (
              <img className="userImage" src={user.image} alt="profileImage" />
            ) : (
              ""
            )}

            <h3>username</h3>

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
              </li>

              <li>
                <a href="/#">Favorited Articles</a>
              </li>
            </ul>
          </div>
        </div> */}
      </>
    );
  }
}

export default UserDisplayArticle;
