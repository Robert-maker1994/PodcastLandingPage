import React, { useState } from 'react';
import './App.css';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Success from './Success'

import { Home } from './Home';


function App(props) {



    return (
    <div >
    
        <Router >
          <Switch>
            <Route exact path="/">
              <Home to="/" />
            </Route>
            <Route path="/success" component={Success}>
                <Success />
            </Route>
          </Switch>
        </Router>   
    </div>
  );
}

export default App;
