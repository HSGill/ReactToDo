import React from 'react';
import './CardList.css';

const CardList = ({ task }) => {
  return (
    <div>
      <ul className="list pl0 ml0 center mw6 ba b--light-blue br2">
        <li className="ph3 pv3 bb b--light-blue">{task}</li>
      </ul>
    </div>
  )
}

export default CardList;