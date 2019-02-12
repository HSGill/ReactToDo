import React, { Component } from 'react';
import './App.css';
import NAVBAR from './NAVBAR.js';
import CARD from './CARD.js';
import Search from './Search';
import Signin from './Signin.js';
import SignUp from './SignUp.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      addtask: [],
      route:'signin',
      isSignedIn:false,
      user:{
        id:'',
        name:'',
        email:'',
        joined: new Date()
      }
    }
  }

loadUser = (data) =>{
  this.setState({
    user:{
      id:data.id,
      name:data.name,
      email:data.email,
      joined: new Date()
    }
  })
}
 
  onInputChange = (event) => {
    event.preventDefault();
    this.setState({ searchfield: event.target.value });

    //console.log(event.target.value);

  }
  onSubmitTask = (e) => {
    e.preventDefault();
    if(this.state.searchfield===''){
      alert('Please add a task ');
    }
    else {
    this.state.addtask.push(this.state.searchfield);
    fetch('http://localhost:3000/add',{
      method:'put',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify({
        todoList:this.state.addtask
      })   
    })

    this.setState({searchfield : ' '});

  }
    // console.log(this.state.searchfield);
  }

  onRouteChange = (route)=> {
    if(route==='signout'){
      this.setState({isSignedIn:false})
    } else if(route==='home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route});
  }

    render() {
    return (
      <div className="App">
        <NAVBAR isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route==='home' 
         ?
        <div>
        <Search onInputChange={this.onInputChange} onSubmitTask={this.onSubmitTask} />
        { <CARD addtask={this.state.addtask} /> }
        </div>
        :
        (
          this.state.route==='signin'
        
        ?<Signin onRouteChange = {this.onRouteChange} />
         :<SignUp  />
        )
        }
      </div>
    );
  }
}

export default App;
