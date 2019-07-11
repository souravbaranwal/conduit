import React, { Component } from "react";

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
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
    console.log(tags);
    return (
      <>
        <div>
          {tags &&
            tags.map((tag, index) => {
              return (
                <a className="button is-rounded is-small is-rounded" key={index}>
                  {tag}
                </a>
              );
            })}
        </div>
      </>
    );
  }
}

export default Tags;
