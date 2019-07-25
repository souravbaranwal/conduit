import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

class UserFavArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null
    };
  }

  componentDidMount = () => {
    fetch(
      `https://conduit.productionready.io/api/articles?author=${
        this.props.user
      }`
    )
      .then(res => res.json())
      .then(articles => this.setState({ articles: articles.articles }));
  };

  render() {
    let { articles } = this.state;
    console.log(articles);
    return (
      <>
        {articles ? (
          articles.map((article, index) => {
            return (
              <div className="container">
                <div className="box" key={index}>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img
                          src={
                            article.author.image
                              ? article.author.image
                              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                          }
                          alt="authorImage"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p className=" is-marginless">
                          <Link
                            to={{
                              pathname: "/articles/user",
                              state: {
                                username: article.author.username
                              }
                            }}
                          >
                            <strong>{article.author.username}</strong>{" "}
                          </Link>
                          <small>at</small>{" "}
                          <small>{article.createdAt.substr(0, 10)}</small>
                          <br />
                        </p>
                        <p className="is-size-4  is-marginless='true'">
                          {article.title}
                        </p>
                        <p className="is-size-6 is-marginless='true'">
                          {article.description}
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <a href="/#" className="button is-primary is-outlined">
                        <i className="fas fa-heart" />
                        {article.favoritesCount}
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default UserFavArticle;
