import React from 'react';

const EnterTask = ({ inputChange, onSubmit}) =>{
    
return (<div className="pa2 db">
<input classname="pa3 ba b--green bg-lightest-blue"  type="" placeholder="Enter Task Here " 
onChange = {inputChange}/>
<button id ="button" onClick={onSubmit} >Add Task</button>
</div>)

}
export default EnterTask;
