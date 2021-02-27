import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Component, Fragment } from 'react';
import React from 'react';
import Home from './Home';
import Navbar from './components/Navbar'
import Programming from './Programming'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/programming' exact component={Programming}/>
          <Route path='/gaming'/>
          <Route path='/traveling'/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
