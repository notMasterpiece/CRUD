import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SinglePostEdit from './components/SinglePostEdit';
import SinglePostShow from './components/SinglePostShow';

import TopForm from './components/TopForm';
import ListWrap from './components/ListWrap';
import PostWrap from "./components/PostWrap";
import List from "./components/List";

class App extends Component {

  constructor(props) {
      super(props);

  }

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
