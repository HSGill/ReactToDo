import React from 'react';

const EnterTask = ({ inputChange, onSubmit}) =>{
    
return (
<div className= 'center'>
<div className='form center  pa4 br3 shadow-5'>
<input className='dib f4 pa2 w-70 center' type="" placeholder="Enter Task Here " 
onChange = {inputChange}/>
<button className='w-30 grow f4 dib link ph3 pv2  white bg-light-purple' id ="button" onClick={onSubmit} >Add Task</button>
</div>
</div>)

}
export default EnterTask;
