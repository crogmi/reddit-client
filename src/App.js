import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Include imports from each component here
// Import store and include a provider with the attribute store set to the store
import ROUTES from "./routes";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./containers/Home/Home";
import "./App.css";

const App = ({ match }) => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <body>
          <main>
            {/* **************************************** ROUTES **************************************** */}
            <Route path={ROUTES.HOME} exact component={Home} />
          </main>
        </body>
      </div>
    </Router>
  );
}

export default App;
