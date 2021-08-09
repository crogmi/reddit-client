import React from "react";
import { Provider } from "react-redux";
// Include imports from each component here
// Import store and include a provider with the attribute store set to the store
import store from "./store/store";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Subreddits from "./containers/Subreddit/Subreddit";
import "./App.css";

const App = ({ match }) => {
  return (
    <div className="app">
      <Provider store={store}>
        <Navbar />
        <body>
          <main>
            <Home />
          </main>
          <aside>
            <Subreddits />
          </aside>
        </body>
      </Provider>
    </div>
  );
}

export default App;
