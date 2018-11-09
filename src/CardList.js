import React from 'react';
import Card from './Card';
const CardList = ({tasks}) => {
    return (  <div>
    
      <Card name = {tasks[0]} />
   
    </div>
    );
}
export default CardList;