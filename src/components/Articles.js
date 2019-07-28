import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./articles.scss";
import Tags from "./Tags";
import Loader from "./Loader";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount = () => {
    fetch("https://conduit.productionready.io/api/articles")
      .then(res => res.json())
      .then(articles => this.setState({ articles: articles }));
  };

  render() {
    const { articles } = this.state.articles;
    return (
      <>
        <div className="columns">
          <div className="column is-9 ">
            <div className="feed-section">
              <h4 className="is-size-4">Global Feed</h4>
            </div>
            <hr />
            {articles ? (
              articles.map((article, index) => {
                return (
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
                            <small>created at</small>{" "}
                            <small>{article.createdAt.substr(0, 10)}</small>
                            <br />
                          </p>
                          <p className="is-size-4  is-marginless='true' ">
                            <Link
                              className="has-text-dark"
                              to={{
                                pathname: "/article",
                                state: {
                                  slug: article.slug,
                                  username: article.author.username

                                }
                              }}
                            >
                              {article.title}
                            </Link>
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
                );
              })
            ) : (
              <Loader />
            )}
          </div>
          <div className="column is-3 ">
            <Tags />
          </div>
        </div>
      </>
    );
  }
}

export default Articles;
