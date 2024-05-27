import React, {useState} from 'react'
import Die from './Die'

const RollDice = () => {

const [die1 , setDie1] = useState('one'); // FIRST DIE STATE

const [die2 , setDie2] = useState('two'); // SECOND DIE STATE

// const randomNum = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// const updateDie1 = () =>{
//     setDie1(randomNum(1,6))
// }
// const updateDie2 = () =>{
//   setDie2(randomNum(1,6))
// }
const rollDice = () =>{
const sides = ['one','two', 'three', 'four', 'five', 'six']
const newFace1 = sides[Math.floor(Math.random() * sides.length)]
const newFace2 = sides[Math.floor(Math.random() * sides.length)]

setDie1(newFace1)

setDie2(newFace2)
}

  return (
    <div>
      <Die face={die1}/>
      <Die face={die2}/>
      <div>
      <button onClick={rollDice}>Roll Dice</button>
      </div>
    </div>
  )
 }

export default RollDice