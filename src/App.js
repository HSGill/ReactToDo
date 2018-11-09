import React, { Component } from 'react';
import EnterTask from './EnterTask';
import './App.css';

import CardList from './CardList';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      tasks: []
      
  
    }
  }
  onSearchChange = (event) =>{
       this.setState({ searchfield: event.target.value });
  }
  onSubmit = () =>{
    this.setState({tasks:this.state.searchfield});
  }
  
onButtonClick =() => {
console.log ("working");

  }

  render() {
    return (

      <div className="tc ">
        <h1 className="f1 bg-green">To Do App</h1>
        <EnterTask searchChange={this.onSearchChange}  />
        
        <CardList tasks={this.onSubmit}  />
      </div>
    );
  }
}

export default App;
