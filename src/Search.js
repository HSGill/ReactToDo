import React from 'react';
import './Search.css';
const Search = ({onInputChange, onSubmitTask})=> {
    return (
        <div className='pa2'>
        <input className='pa3 ba b--green bg-lightest-blue' placeholder='Enter a Task' type= "search" onChange= {onInputChange}/>
       <div className="ph3">
  <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green"  onClick= {onSubmitTask}>Add Task </button>
</div>
       </div>
    )
}
 
export default Search;