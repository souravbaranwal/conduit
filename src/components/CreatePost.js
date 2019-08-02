import React, { Component } from "react";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      body: "",
      tags: ""
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    const { title, description, body, tags } = this.state;
    const tagList = tags.split(",");
    const data = { title, description, body, tagList };
    const token = localStorage.getItem("token");

    fetch("https://conduit.productionready.io/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${token}`
      },
      body: JSON.stringify({ article: data })
    })
      .then(res => res.json())
      .then(article => {
        console.log(article);
        this.props.history.push("/user");
      });
  };

  render() {
    return (
      <>
        <div className="columns is-centered" style={{ marginTop: "50px" }}>
          <div className="column is-half">
            <div className="field">
              <div className="control">
                <input
                  name="title"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  placeholder="Article Title"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  name="description"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  placeholder="What's this all about?"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea
                  name="body"
                  onChange={this.handleChange}
                  className="textarea"
                  placeholder="Write your article (in markdown)"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  name="tags"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  placeholder="Enter tags"
                />
              </div>
            </div>
            <div className="field">
              <p className="control">
                <button
                  onClick={this.handleClick}
                  className="button is-success"
                >
                  Publish Article
                </button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreatePost;
