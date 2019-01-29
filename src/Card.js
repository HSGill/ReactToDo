import React from 'react';
import './Card.css'
const CARD = ({addtask})=> {
    return (
       <div> 
       <div className="pa3 pa5-ns">
  <ul className="list pl0 measure center">
    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{addtask}</li>
  </ul>
</div>

       
       </div>
    )
}

export default CARD;