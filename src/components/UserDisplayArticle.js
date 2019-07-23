import React, { Component } from "react";

class UserDisplayArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    fetch(
      `https://conduit.productionready.io/api/profiles/${
        this.props.location.state.username
      }`
    )
      .then(res => res.json())
      .then(user => {
        console.log(user);
        this.setState({ user: user.profile });
      });
  }
  render() {
    return <>
    </>;
  }
}

export default UserDisplayArticle;
