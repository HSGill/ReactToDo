import React, { Component } from 'react';
import './App.css';
import NAVBAR from './NAVBAR.js';
import CARD from './CARD.js';
import Search from './Search';

class App extends Component {
  constructor () {
    super();
       this.state = {
         searchfield :'',
         addtask: []
       }
  }

  onInputChange = (event)=>{

    this.setState ({searchfield:event.target.value});
    //console.log(event.target.value);
   
  }
  onSubmitTask = ()=>{
    this.state.addtask.push(this.state.searchfield);
    this.setState.searchfield ='';
// console.log(this.state.searchfield);
  }

  render() {
    return (
      <div className="App">
       <NAVBAR />
       <Search onInputChange={this.onInputChange} onSubmitTask={this.onSubmitTask} />
       <CARD addtask = {this.state.addtask}  />
      </div>
    );
  }
}

export default App;
