import React, { Component } from 'react';
import EnterTask from './EnterTask';
import './App.css';
import Button from './Button';
import CardList from './CardList';

import 'tachyons';
class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
      
    }
  }
  onButtonClick =(event) => {

    //const xy = this.setState ({searchfield:event.target.value});
    
    this.setState({tasks:this.state.tasks.push('18')})
    console.log(this.setState({tasks:this.state.tasks.push(18)}));
  }

  render() {
    return (
      <div className="tc ">
        <h1 className="f1 bg-green">To Do App</h1>
        <EnterTask searchfield={this.state.searchfield}  />
        <button onClick={this.onButtonClick.bind(this)}>
        Add Task
        </button>
        <CardList/>
      </div>
    );
  }
}

export default App;
