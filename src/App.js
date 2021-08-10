import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Subreddits from "./containers/Subreddit/Subreddit";
import "./App.css";

const App = ({ match }) => {
  return (
    <div className="app">
      <Navbar />
      <body>
        <main>
          <Home />
        </main>
        <aside>
          <Subreddits />
        </aside>
      </body>
    </div>
  );
}

export default App;
