import React from 'react';

const EnterTask = ({ searchChange}) =>{
    
return (<div className="pa2 db">
<input classname="pa3 ba b--green bg-lightest-blue"  type="" placeholder="Enter Task Here " 
onChange = {searchChange}/>
<button id ="button" >Add Task</button>
</div>)

}
export default EnterTask;
