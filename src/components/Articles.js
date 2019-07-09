import React, { Component } from "react";

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
        <div>
          {articles && articles.map((article, index) => {
            return (
                <div key={index} className="article">
                    <div className="infoBar">
                        <div className="authorInfo">
                            <div className="avatar">
                                <img src={article.author.image} alt="avatar"/>
                                <div className="info">
                                    <h4>{article.author.username}</h4>
                                    <p>{article.createdAt.substr(0, 10)}</p>
                                </div>
                            </div>
                        </div>
                        <a class="button is-primary is-outlined">heart</a>

                    </div>
                </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Articles;
