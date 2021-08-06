import React from "react";
// Include imports from each component here
// Import store and include a provider with the attribute store set to the store
import Navbar from "./containers/Navbar/Navbar";
import Home from "./containers/Home/Home";
import "./App.css";

const App = ({ match }) => {
  return (
    <div className="App">
      <Navbar />
      <body>
        <main>
          <Home />
        </main>
      </body>
    </div>
  );
}

export default App;
