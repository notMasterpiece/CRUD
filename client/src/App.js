import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SinglePostEdit from './components/SinglePostEdit';
import SinglePostShow from './components/SinglePostShow';

import PostWrap from "./components/PostWrap";

class App extends Component {
    render() {

    return (
      <div className="container">
          <Router>
              <Switch>
                  <Route exact path={'/'} component={ PostWrap } />
                  <Route exact path={'/post/edit/:id'} component={ SinglePostEdit } />
                  <Route exact path={'/post/show/:id'} component={ SinglePostShow } />
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
