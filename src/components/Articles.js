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
  addDefaultSrc(ev) {
    ev.target.src =
      "data:image/jpeg;base64,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BEG0cus9Q7TumfHhtadohFrRWN7TtDddXtQt4txxDniuGU5oP1jfa7hu751cGjivWzm59fM/Dj/y3tFAAAAAAyAAyAA5CbzmvUBAQEBAQEBAQEBAQEBAQEBAgxuDquQ13Vpah4q6hh37+ciaxMbStW1qzvWdmnaU9HVTZthbnoP5t87avDM7Q8zNPJoqW6x0buPX2jpeN2s4zVLSNP5EXKPtUOG/hbJvhNS+ivHbq3KazFb12+6ov6SvdbVdVl+cqdPmJrTgtHeGxF6z2mEK6QT76+cp5a3UOPT76+YkcE9UlNr2f4aWWn/Trd/kJeMFp7QpNojvK1werGkbvZwxrB+1ewrA7xvb4TYposk+jDbV4a+u/wBmyaM9HI44u8v/AKdOaJ3Fz6x8NmbmPQ1j5mnk8Qn+yNvu3PRujKMMmxRUlS89kZFj1seLHtM3K0isbRDRvkted7Tuy5ZQgICAgICAgICAgICAgICAgICAgICAygQvhKm9qus96KfwkbQtyt7vi4OocKqx3Io/CNoOVvdMBlJVfYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgf/Z";
  }

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
                                src={article.author.image}
                                onError={this.addDefaultSrc}
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
