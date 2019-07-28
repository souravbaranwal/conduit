import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
    };
  }

  componentDidMount = () => {
    fetch(
      `https://conduit.productionready.io/api/articles/${
        this.props.location.state.slug
      }`
    )
      .then(res => res.json())
      .then(article => {
        this.setState({ article: article.article });
      });
  };

  render() {
    let article = this.state.article;
    console.log(article);
    return (
      <>
        {article != null ? (
          <>
            <section className="hero is-dark">
              <div className="hero-body">
                <div className="container has-text-left">
                  <h1 className="title">{article.title}</h1>
                  <h2 className="subtitle" />
                  <article className="media">
                    <figure className="media-left">
                      <p className="image is-32x32 is-round">
                        <img
                          className="is-rounded"
                          src={
                            article.author.image
                              ? article.author.image
                              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                          }
                          alt="authorImage"
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <Link
                            to={{
                              pathname: "/articles/user",
                              state: {
                                username: article.author.username
                              }
                            }}
                          >
                            {article.author.username}
                          </Link>
                          {" "}
                          <small>created at</small>{" "}
                          <small>{article.createdAt.substr(0, 10)}</small>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Article;
