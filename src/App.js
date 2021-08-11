import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Subreddits from "./containers/Subreddit/Subreddit";
import "./App.css";

const App = ({ match }) => {
  return (
    <div className="app">
      <body className="content">
        <div className="grid-container">
          <Navbar className="navbar" />
          <main className="posts">
            <Home />
          </main>
          <aside className="subreddits">
            <Subreddits />
          </aside>
          <footer className="footer">
            Created by @crogmi
          </footer>
        </div>
      </body>

    </div>
  );
}

export default App;
