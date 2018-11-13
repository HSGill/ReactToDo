import React, { Component } from 'react';
import EnterTask from './EnterTask';
import './App.css';
import Particles from 'react-particles-js';
import CardList from './CardList';
import 'tachyons';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
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
    if (this.state.input !== 0){
      this.state.tasks.push(this.state.input);
    } 
  }
  render() {
    return (

      <div className="tc ">
       <Particles  className="particles"
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                //backgroundImage: `url(${logo})` 
              }}
            />
        <h1 >To Do App</h1>
        <EnterTask inputChange={this.onInputChange} onSubmit={this.onSubmit} />
        
        <CardList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
