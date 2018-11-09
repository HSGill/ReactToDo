import React from 'react';
import Card from './Card';
const CardList = ({ tasks }) => {
  return (<div>
    {
      
      tasks.map((user,i) => {
        return (
          <Card 
          key ={i}
            name={tasks[i]} />
        );
      })

    }

  </div>
  );
}
export default CardList;