import React, { Component } from "react";
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
    console.log(articles);
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
                  <>
                    {/* <div key={index} className="article">
                      <div className="infoBar">
                        <div className="authorInfo">
                          <div className="avatar">
                            <span>
                              <img
                                className="image is-64x64"
                                src={article.author.image}
                                alt="avatar"
                              />
                            </span>
                            <span className="info">
                              <h4>{article.author.username}</h4>
                              <p>{article.createdAt.substr(0, 10)}</p>
                            </span>
                          </div>
                          <div className="contentBar">
                            <h4>{article.title}</h4>
                            <p>{article.description}</p>
                          </div>
                        </div>
                        <a href="/#" className="button is-primary is-outlined">
                          <i className="fas fa-heart" />
                          {article.favoritesCount}
                        </a>
                      </div>
                    </div> */}
                    {/* <div className="box">
                      <div className="level">
                        <div className="level-left">
                          <div className="level-item">
                            <img
                              className="image is-64x64"
                              src={article.author.image}
                              alt="avatar"
                            />

                            <div className="level-item">
                              <h4 className='title is-6 is-block'>{article.author.username}</h4>
                              <p className='is-block'>{article.createdAt.substr(0, 10)}</p>
                            </div>
                          </div>
                        </div>
                        <div className="level-right">
                          <a
                            href="/#"
                            className="button is-primary is-outlined"
                          >
                            <i className="fas fa-heart" />
                            {article.favoritesCount}
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div class="box">
                      <article class="media">
                        <div class="media-left">
                          <figure class="image is-64x64">
                            <img src={article.author.image} alt="authorImage" />
                          </figure>
                        </div>
                        <div class="media-content">
                          <div class="content">
                            <p className=" is-marginless">
                              <strong>{article.author.username}</strong>{" "}
                              <small>at</small>{" "}
                              <small>{article.createdAt.substr(0, 10)}</small>
                              <br />
                            </p>
                            <p className="is-size-4  is-marginless">
                              {article.title}
                            </p>
                            <p className="is-size-6" is-marginless>
                              {article.description}
                            </p>
                          </div>
                          {/* <nav class="level is-mobile">
                            <div class="level-left">
                              <a class="level-item" aria-label="reply">
                                <span class="icon is-small">
                                  <i class="fas fa-reply" aria-hidden="true" />
                                </span>
                              </a>
                              <a class="level-item" aria-label="retweet">
                                <span class="icon is-small">
                                  <i
                                    class="fas fa-retweet"
                                    aria-hidden="true"
                                  />
                                </span>
                              </a>
                              <a class="level-item" aria-label="like">
                                <span class="icon is-small">
                                  <i class="fas fa-heart" aria-hidden="true" />
                                </span>
                              </a>
                            </div>
                          </nav> */}
                        </div>
                        <div className="media-right">
                          <a
                            href="/#"
                            className="button is-primary is-outlined"
                          >
                            <i className="fas fa-heart" />
                            {article.favoritesCount}
                          </a>
                        </div>
                      </article>
                    </div>
                  </>
                );
              })
            ) : (
              <Loader />
            )}
          </div>
          <div className="column is-2 ">
            <Tags />
          </div>
        </div>
      </>
    );
  }
}

export default Articles;
