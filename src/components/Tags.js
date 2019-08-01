import React, { Component } from "react";
import Loader from "./Loader";

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: null
    };
  }

  componentDidMount = () => {
    fetch("https://conduit.productionready.io/api/tags")
      .then(res => res.json())
      .then(tags =>
        this.setState({
          tags: tags.tags
        })
      );
  };

  render() {
    const { tags } = this.state;
    return (
      <>
        <div className="block">
          <article className="message is-primary">
            <div className="message-header">
              <p className="subtitle has-text-light">Popular tags</p>
            </div>
            <div className="message-body tags">
              {tags ? (
                tags.map((tag, index) => {
                  return (
                    <a
                      className="tag is-dark"
                      key={index}
                      value={tag}
                      href="/#"
                      onClick={e => {
                        console.log(tag, "this is tags.js for checking tag");
                        this.props.handleTag(tag);
                      }}
                    >
                      {tag}
                    </a>
                  );
                })
              ) : (
                <Loader />
              )}
            </div>
          </article>
        </div>
      </>
    );
  }
}

export default Tags;
