import React from 'react';
import './Card.css';
import './CardList';
import CardList from './CardList';

const CARD = ({ addtask }) => {
  return (<div>
    {
      addtask.map((task, i) => {
        return (

          <CardList key={i} task={task} />
        );
      })
    }
  </div>
  );
}
export default CARD;