import React from "react";
import "./App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Settings from "./components/Settings";
import UserDisplay from "./components/UserDisplay";
import UserContext from "./UserContext";
// import Tags from "./components/Tags";

class App extends React.Component {
  state = {
    user: null
  };
  componentDidMount() {
    if (localStorage.token) {
      const token = localStorage.getItem("token");
      fetch("https://conduit.productionready.io/api/user", {
        headers: {
          authorization: `Token ${token}`
        }
      })
      .then(res => res.json())
      .then(user => {
        console.log(user, "user in cdm");
        this.setState({ ...user });
      });
    }
  }
  render() {
    console.log(this.state.user, 'checking user');
    return (
      <UserContext.Provider value={this.state.user}>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/createpost" component={CreatePost} />
              <Route path="/settings" component={Settings} />
              <Route path="/user" component={UserDisplay} />
              {/* <Route exact path="/tags" component={Tags} /> */}
              <Route render={() => <p>Not found</p>} />
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
