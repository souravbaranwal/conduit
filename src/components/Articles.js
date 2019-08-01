import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./articles.scss";
import Tags from "./Tags";
import Loader from "./Loader";
import TagFeed from "./TagFeed";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], inputTag: null };
  }

  handleTag = tag => {
    const newTag = tag;
    this.setState({ inputTag: newTag }, () => {
      console.log(newTag, "after", this.state);
    });
  };

  componentDidMount = () => {
    fetch("https://conduit.productionready.io/api/articles")
      .then(res => res.json())
      .then(articles => this.setState({ articles: articles }));
  };

  handleGlobalFeedSwitch = () => {
    this.setState({ inputTag: null });
  };

  render() {
    const { articles } = this.state.articles;
    return (
      <>
        <p>{this.state.tag}</p>
        <div className="columns">
          <div className="column is-9 ">
            {this.state.inputTag == null ? (
              <>
                <div className="feed-section">
                  <div className="feed-section">
                    <div className="field is-grouped">
                      <p className="control">
                        <NavLink
                          className="button is-dark"
                          activeClassName="active"
                        >
                          Global Feed
                        </NavLink>
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
                {articles ? (
                  articles.map((article, index) => {
                    return (
                      <div className="box" key={index}>
                        <article className="media">
                          <div className="media-left">
                            <figure className="image is-64x64">
                              <img
                                className="is-rounded"
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
                    );
                  })
                ) : (
                  <Loader />
                )}
              </>
            ) : (
              <>
                {this.state.inputTag ? (
                  <TagFeed
                    handleGlobalFeedSwitch={this.handleGlobalFeedSwitch}
                    selectedTag={this.state.inputTag}
                  />
                ) : (
                  ""
                )}
              </>
            )}
          </div>
          <div className="column is-3 ">
            <Tags handleTag={this.handleTag} />
          </div>
        </div>
      </>
    );
  }
}

export default Articles;
