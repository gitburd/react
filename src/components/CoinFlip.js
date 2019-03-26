import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link}  from 'react-router-dom'


export default class CoinFlip extends Component {
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
        <Route exact path='/'/>
  
            <div className="App">
            <header className="App-header">
            <h1> Coin Flip</h1>
            <button onClick = {this.updateState}>Click Me!</button>
            <h2>{this.state.coin}</h2>        
            </header>
            </div>
        
        </div>
        </Router>
      );
    }
}
