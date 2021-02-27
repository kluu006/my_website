import duck from './duck.jpg';
import yep from './yep.jpg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Component, Fragment } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';

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

class Main_page extends Component{
  render() {
    return(
      <Fragment>
        <p style={{display: 'inline-block'}}>Things I like</p>
          <Link to='/programming' className='programmer'>
            <Button color='red'>programming</Button>
          </Link>
          <Link to='/gaming' className='gamer'>
             <Button color='green'>gaming</Button>
          </Link>
          <Link to='/traveling' className='traveler'>
            <Button color='blue'>traveling</Button>
          </Link>
      </Fragment>
    );
  };
}

class Button extends Main_page{
  constructor(props){
    super(props);
  }
  render() {
    var ButtonStyle={
      backgroundColor: this.props.color,
      display: "inline-block",
      padding: 10,
      margin: 10,
    };
    return(
      <button style={ButtonStyle}>{this.props.children}</button>
    );
  };
}

function Home() {
  const Style={
    backgroundImage: `url(${duck})`,
    backgroundRepeat : 'repeat',
    backgroundSize : '5% 5%',
    backgroundPosition : 'fixed'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={duck} className="App-logo" alt="logo" />
        <img src={yep} className="Yep-logo" alt="logo" />
        <p>Never lucky rubber ducky</p>
        <a className="App-link"> :^) </a>
        <Games game="Path of Exile" years='2' />
        <Games game="League of Legends" years='10' />
        <Main_page />
      </header>
    </div>
  );
}

export default Home;
