import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link}  from 'react-router-dom'
import CoinFlip from './components/CoinFlip';
import RandomPlanet from './components/RandomPlanet';


class App extends React.Component {
  constructor(props) {
     super(props);
     
     this.state = {
        coin: ''
     }
     this.updateState = this.updateState.bind(this);
  };
  updateState() {

    let num = Math.random()*2
      console.log(num); 
      if(num>1){
     this.setState({coin: 'Heads'})
      } else{
        this.setState({coin: 'Tails'})
      }
  }
  
   
  
  render() {

    
    return (
      <Router>
        <div>
        <Route path="/" exact render = { props =>(
            <React.Fragment>
          <header className="App-header">
        
          <h1> Welcome!</h1>    
          <ul>
          
            <li>
          <Link to ='/coinflip'>
          Flip a Coin! 
          </Link>
          </li>

          <li>
          <Link to ='/planet'>
          Get a Random Planet! 
          </Link>
          </li>
          </ul>
          </header>
          </React.Fragment>)} />

         

          <Route path="/coinflip" exact render = { props =>(
            <React.Fragment>
               <ul>
          <li>
          <Link to ='/'>
          Home 
          </Link>
          </li>
            <li>
          <Link to ='/coinflip'>
          Flip a Coin! 
          </Link>
          </li>

          <li>
          <Link to ='/planet'>
          Get a Random Planet! 
          </Link>
          </li>
          </ul>
          <header className="App-header">
          
          <CoinFlip/>
          </header>
          </React.Fragment>)} />


          <Route path="/planet" exact render = { props =>(
            <React.Fragment>
               <ul>
          <li>
          <Link to ='/'>
          Home 
          </Link>
          </li>
            <li>
          <Link to ='/coinflip'>
          Flip a Coin! 
          </Link>
          </li>

          <li>
          <Link to ='/planet'>
          Get a Random Planet! 
          </Link>
          </li>
          </ul>
          <header className="App-header">
          <RandomPlanet/>
          </header>
          </React.Fragment>)} />
       

      
      </div>
      </Router>
    );
  }
}

export default App;
