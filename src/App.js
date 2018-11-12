import React, { Component } from 'react';
import EnterTask from './EnterTask';
import './App.css';

import CardList from './CardList';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      tasks: []
      }
  }
  onInputChange = (event) =>{
       this.setState({ input: event.target.value });
  }
  onSubmit = (event) =>{
     this.state.tasks.push(this.state.input);
  }
  render() {
    return (

      <div className="tc ">
        <h1 className="f1 bg-green">To Do App</h1>
        <EnterTask inputChange={this.onInputChange} onSubmit={this.onSubmit} />
        
        <CardList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
