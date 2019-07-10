import React, { Component } from "react";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="columns is-centered" style = {{marginTop: '50px'}}>
          <div className="column is-half">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Article Title" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="What's this all about?"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Write your article (in markdown)"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Enter tags" />
              </div>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success">Publish Article</button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreatePost;
