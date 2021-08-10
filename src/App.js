import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Subreddits from "./containers/Subreddit/Subreddit";
import "./App.css";

const App = ({ match }) => {
  return (
    <div className="app">
      <Navbar className="navbar" />
      <body className="content">
        <main className="posts">
          <Home />
        </main>
        <aside className="subreddits">
          <Subreddits />
        </aside>
      </body>
    </div>
  );
}

export default App;
