import React from 'react';

const Button = ({onButClick}) => {
    return (<div className='db'>
        <button onClick={onButClick}>
        Add Task
        </button>
    </div>
    );
}
export default Button;