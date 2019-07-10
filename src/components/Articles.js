import React, { Component } from "react";
import "./articles.scss";

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
    console.log(articles, "check articles");
    return (
      <>
        <div className="columns">
          <div className="column is-9 ">
            <div className="feed-section">
              <h4>Global Feed</h4>
            </div>
            <hr />
            {articles &&
              articles.map((article, index) => {
                return (
                  <div key={index} className="article">
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
                      <a class="button is-primary is-outlined">
                        <i class="fas fa-heart" />
                        {article.favoritesCount}
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="column is-3 is-narrow">tags</div>
        </div>
      </>
    );
  }
}

export default Articles;
