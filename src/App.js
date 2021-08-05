import { removeTypeDuplicates } from '@babel/types';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Include imports from each component here
import Navbar from './containers/Navbar/Navbar';



import './App.css';

const App = ({ match }) => {
  
  const ROUTES = {
    HOME: '/',
    SUBREDDIT: '/r/:_id'
  }
  
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <body>
          <main>
            {/* Uncomment when the components have been imported from their respective pages */}
            {/* **************************************** ROUTES **************************************** */}
            {/* <Route path={ROUTES.HOME} exact component={Home} />
            <Route path={ROUTES.SUBREDDIT} component={Subreddit} /> */}
          </main>
          <footer>
          </footer>
        </body>
      </div>
    </Router>
  );
}

export default App;
