import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, SinglePost, Post, Project, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
      </Switch>
    </Router>
  );
}

export default App;
