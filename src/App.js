import {  useEffect, useRef, useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';


function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  
  const buttonRef = useRef(null)

  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

  useEffect(()=> {
    if(gameWon){
      buttonRef.current.focus()
    }
  },[gameWon])

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({ value: Math.ceil(Math.random() * 6), isHeld: false , id:nanoid()}));

  }

  function rollDice() {
    if(gameWon){
      setDice(generateAllNewDice())
    }else{

        setDice(oldDice => oldDice.map(die => 
          die.isHeld ? 
            die :
            {...die, value: Math.ceil(Math.random() * 6)}
        ))
    }
  }

  function hold(id){
    setDice(oldDice =>{
      return oldDice.map(die =>{
        return die.id === id?
          {...die, isHeld:!die.isHeld}:
          die

      })
    })
  }

  const diceElements = dice.map((die, index) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} hold={()=> hold(die.id)}/>
  ));

  return (
    <main>
      {gameWon && <Confetti />}
    <h1 className="title">Tenzies</h1>
    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements} 
      </div>

      <button ref={buttonRef} className='roll-dice' onClick={rollDice}>
        {gameWon ? "New Game": "Roll"}
      </button>
    </main>
  );
}

export default App;
