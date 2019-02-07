import React from 'react';
import './signin.css';

class Signin extends React.Component{ 
  constructor(props){
    super(props);
    this.state ={
      signInEmail:'',
      onPasswordChange:''
    }
  }
  onEmailChange = (event) =>{
    this.setState({signInEmail:event.target.value})
  }
  onPasswordChange = (event) =>{
    this.setState({onPasswordChange:event.target.value})
  }

  onSubmitSignIn =()=>{
    fetch('http://localhost:3000/signin',{
      method:'post',
      headers:{'content-Type':'application/json'},
      body: JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.onPasswordChange
      })
    })
    .then(response=>response.json())
    .then(data =>{
      if (data==='success'){
        this.props.onRouteChange('home');

      }
    })
  }
  render(){
  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">

      <main className="pa4 black-80">

        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="email-address">Email</label>
              <input onChange = {this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">Password</label>
              <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer" /><input type="checkbox"/> Remember me 
          </fieldset>
          <div className="">
            <input 
            onClick ={this.onSubmitSignIn}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" value="Sign In" />
          </div>
          <div className="lh-copy mt3">
            <p onClick={()=>this.props.onRouteChange('signup')} className="f6 link dim black db pointer">Sign up</p>
                      </div>
        </div>
      </main>
    </article> );
    }
 

}
export default Signin;