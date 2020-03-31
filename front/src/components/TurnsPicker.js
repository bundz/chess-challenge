import React from 'react';
import './TurnsPicker.css';

function TurnsPicker({ turns, onTurnsClicked }) {

  return (
    <div className='TurnsPicker'>
      <p>Turns</p>
      <ul>
        <li onClick={() => onTurnsClicked(1)} className={"Turns " + (turns === 1 ? 'box-active' : '') } >
          1
        </li>
        <li onClick={() => onTurnsClicked(2)} className={"Turns " + (turns === 2 ? 'box-active' : '') }>
          2
        </li>
        <li onClick={() => onTurnsClicked(3)} className={"Turns " + (turns === 3 ? 'box-active' : '') }>
          3
        </li>
        <li onClick={() => onTurnsClicked(4)} className={"Turns " + (turns === 4 ? 'box-active' : '') }>
          4
        </li>
        <li onClick={() => onTurnsClicked(5)} className={"Turns " + (turns === 5 ? 'box-active' : '') }>
          5
        </li>
        <li onClick={() => onTurnsClicked(6)} className={"Turns " + (turns === 6 ? 'box-active' : '') }>
          6
        </li>
      </ul>
    </div>
  );
}

export default TurnsPicker;
