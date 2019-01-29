import React from 'react';
import './Search.css';
const Search = ({onInputChange, onSubmitTask})=> {
    return (
        <div className='pa2'>
        <input className='pa3 ba b--green bg-lightest-blue' type= "search" onChange= {onInputChange}/>
       <div className="ph3">
  <a className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green" href="#0" onClick= {onSubmitTask}>Add Task</a>
</div>
       </div>
    )
}

export default Search;