import { useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';
function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({ value: Math.ceil(Math.random() * 6), isHeld: false , id:nanoid()}));

  }

  function rollDice() {
    setDice(generateAllNewDice());
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
      <div className='dice-container'>
        {diceElements} 
      </div>

      <button className='roll-dice' onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
