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
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/createpost" component={CreatePost} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/user" component={UserDisplay} />
          <Route render={() => <p>Not found</p>} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
