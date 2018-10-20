import React, { Component } from 'react';
import EnterTask from './EnterTask';
import './App.css';
import Button from './Button';
import TaskList from './TaskList';

import 'tachyons';
class App extends Component {
  render() {
    return (
      <div className="tc ">
       <h1 className="bg-green">To Do App</h1>
       <EnterTask />
       <Button />
        <TaskList />
      </div>
    );
  }
}

export default App;
