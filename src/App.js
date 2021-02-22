import logo from './logo.svg';
import duck from './duck.jpg';
import yep from './yep.jpg';
import resume from './Kenny_Luu_Resume.pdf';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Fragment } from 'react';
import React from 'react';

function My_name(props){
  return <h1 style={{fontWeight: 'bold', color: 'cyan'}} >{props.name}'s Website</h1>;
}

function Games(props){
  var message;
  if(props.game == 'Path of Exile'){
    message = (<p>Stay sane, exile.</p>);
  }
  else if(props.game == 'League of Legends'){
    message = (<p>League brings out the best in people :)</p>);
  }
  return(
    <Fragment>
    <h1>I love playing {props.game}. 
    I have been playing for {props.years} years.
    {message}
    </h1>
    </Fragment>
    );
}


function Main_page(props){
  return(
    <Fragment>

      <button style="background-color: red;" type="button"> programming </button>
      <button style="background-color: blue;" type="button"> gaming </button>
      <button style="background-color: green;" type="button"> traveling </button>

    </Fragment>
  );
}

function App() {
  const Style={
    backgroundImage: `url(${duck})`,
    backgroundRepeat : 'repeat',
    backgroundSize : '5% 5%',
    backgroundPosition : 'fixed'
  };
  return (
    <div className="App" style={Style}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
      <header className="App-header">
        <img src={duck} className="App-logo" alt="logo" />
        <img src={yep} className="Yep-logo" alt="logo" />
        <p>Never lucky rubber ducky</p>
        <a className="App-link"> :^) </a>
        <Games game="Path of Exile" years='2' />
        <Games game="League of Legends" years='10' />
        <a href={resume}>Click to view my resume.</a>
        <Main_page />
      </header>
    </div>
  );
}

export default App;
