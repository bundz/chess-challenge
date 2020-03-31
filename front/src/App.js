import React, { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Menu from './components/Menu';
import Modal from 'react-modal';
import modalFirstImage from './images/pieces.png';
import modalSecondImage from './images/turns.png';
import modalThirdImage from './images/board.png';

function App() {
  
  const [state, setState] = useState({ piece: 'knight', turns: 2, showModal: true });

  function onCloseModal() {
    setState({ showModal: false, piece: state.piece, turns: state.turns });
  }

  function onPieceClicked (piece) {
    const newState = { turns: state.turns, piece } ;
    setState(newState);
  }
  
  function onTurnsClicked (turns) {
    const newState = { turns, piece: state.piece } ;
    setState(newState);
  }

  return (
    <div className="App">
      <h1 className="title">Chess Challenge</h1>
      <Menu piece={state.piece} turns={state.turns} onPieceClicked={onPieceClicked} onTurnsClicked={onTurnsClicked} />
      <Main piece={state.piece} turns={state.turns} />
      <Modal 
          className="Modal"
          isOpen={state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={onCloseModal}
           shouldCloseOnOverlayClick={true}
           overlayClassName="Overlay"
        >
          <div>
            <h3>Welcome</h3>
            <p>So, before we start let me explain to you how it works </p>
            <p>First choose a chess piece. There are 6 options: Knight, King, Queen, Bishop, Rook and Pawn</p>
            <p>Choose it by clicking or tapping it</p>
            <img alt="All chess pieces" src={modalFirstImage}></img>
            <p>Got it? Here we picked the Rook</p>
            <p>After that you need to choose a number of turns. There are 6 options: 1, 2, 3, 4, 5 and... yes, 6.</p>
            <img alt="Number from 1 to 6" src={modalSecondImage}></img>
            <p>Here we picked 1 turn only</p>
            <p>So choose a tile in the chess board and click it!!!!</p>
            <p>Boom! You have all posible positions your piece can reach in desired turns.</p>
            <img alt="A chess board with a rook and all possible movements" width="228" height="228" src={modalThirdImage}></img>
            <p>And thats it! Click in the Button below if your are ready.</p>
            <button onClick={onCloseModal}>I am Ready!</button>
          </div>
      </Modal>
    </div>
  );
}

export default App;
