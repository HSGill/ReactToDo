import React, { Component } from 'react';
import EnterTask from './EnterTask';
import './App.css';

import CardList from './CardList';

import 'tachyons';
class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [14,16],
      searchfield: ''
  
    }
  }
  onButtonClick =(event) => {

    //const xy = this.setState ({searchfield:event.target.value});
    //const taskList  = this.state.tasks.concat('18');
   // console.log(taskList);
  }

  render() {
    return (
      <div className="tc ">
        <h1 className="f1 bg-green">To Do App</h1>
        <EnterTask searchfield={this.state.searchfield}  />
        <button onClick={this.onButtonClick.bind(this)}>
        Add Task
        </button>
        <CardList tasks ={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
