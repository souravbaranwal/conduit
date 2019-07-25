import React, { Component } from "react";

class ArticleUserDisplay extends Component {
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
                ) : (
                  ""
                )}

                <h3>{user.username}</h3>

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

export default ArticleUserDisplay;
