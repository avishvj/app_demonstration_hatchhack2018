import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import BabyBlues from './BabyBlues.js';
import Questions from './Questions.js';
import Finale from './Finale.js';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
        <Route path="/" exact component={BabyBlues} />
        <Route path="/questions" component={Questions} />
        <Route path="/me" component={Finale} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
