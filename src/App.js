import React, { useState, useEffect } from 'react';
import Board from "./components/board"
import _ from 'lodash';

export default function App() {
  const [cards, setCards] = useState([{id:1, front:'1'},{id:2, front:'2'}, {id:3, front:'3'}, {id:4, front:'4'},{id:5, front:'5'}, {id:6, front:'6'},{id:7, front:'7'},{id:8, front:'8'}, {id:9, front:'9'}]);
  const [lastClickedId, setLastClickedId] = useState(undefined);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0)

  // useEffect(()=>{
  //   //check highscore logic
  // },[score])

  // const shuffle = arr => {
  //     const results = [];
  //     const current = [...arr];
  //     while(current.length){
  //       const randIndex = Math.floor(Math.random() * current.length);
  //       results.push(current.splice(randIndex, 1).pop());
  //     }
  //     return results;
  // }
  
  const handleClick = (id) => {
    if(lastClickedId === id) {
      alert('You Lose');
      setScore(0);
    }
    else {
      setLastClickedId(id);
      setScore(prevValue => prevValue + 1);
      if(score > highScore){
        setHighScore(score + 1)

      }
    }
    
    const shuffledCards = _.shuffle(cards);
    setCards(shuffledCards);
   
  }
  return (
  
   <div>
     <h2> Can you remember what you've clicked?</h2>
     <p> High Score: {highScore} </p>
     <p>Current Score: {score}</p>
     <Board
     cards={cards}
     clicked={lastClickedId}
     handleClick={handleClick}
     />
      </div>
  
  )
}


