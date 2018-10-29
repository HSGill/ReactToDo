import React, { Component } from 'react';
import EnterTask from './EnterTask';
import './App.css';

import CardList from './CardList';
import 'tachyons';
class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      searchfield: ''
  
    }
  }
  onSearchChange = (event) =>{
      this.setState({ searchfield: event.target.value });
     const joined = this.state.tasks.concat(event.target.value);
     this.setState({tasks:joined});
  }
  onButtonClick =() => {
console.log ("working");

  }

  render() {
    
    return (
   
      <div className="tc ">
        <h1 className="f1 bg-green">To Do App</h1>
        <EnterTask searchChange={this.onSearchChange}  />
        <button onClick={this.onButtonClick.bind(this)}>
        Add Task
        </button>
        <CardList tasks ={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
