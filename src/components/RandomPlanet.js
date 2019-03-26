import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link}  from 'react-router-dom'


const fetch = require('node-fetch');

export default class RandomPlanet extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           planet: ''
          

        }
        this.updateState = this.updateState.bind(this);
     };
     updateState() {
   
       let num = Math.floor(Math.random()*61)
    
         
        fetch(`https://swapi.co/api/planets/${num}`)
            .then(res => res.json())
            .then(json => 
                // console.log(json)

            this.setState({
                planet: json.name,
                climate: `The climate is ${json.climate}`,
                population: `and the population is ${json.population}`
        })
        );
     }


     render() {
        return (
           <Router>
             <div>
           <Route exact path='/'/>
     
               <div className="App">
               <header className="App-header">
               <h1> Random Planet!</h1>
               <button onClick = {this.updateState}>Click Me!</button>
               <h1>{this.state.planet}</h1>
               <h3> {this.state.climate} </h3>
               <h3> {this.state.population}</h3>        
               </header>
               </div>
           
           </div>
           </Router>
         );
       }
}
