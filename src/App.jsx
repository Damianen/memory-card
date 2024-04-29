import './App.css'
import Card from './card';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleClick = (hasBeenClicked) => {
    if (hasBeenClicked) {
      setBestScore(score);
      setScore(0);
    } else {
      setScore(score + 1);
    }
  }

  return (
    <>
      <h1>Shiny Pokemon Memory Game</h1>
      <p>Get points by clicking on an image but dont click on any card more than once!</p>
      <p>Score: {score}</p>
      <p>Best score: {bestScore} </p>
      <div className='Cards-container'>
        <Card handleClick={handleClick} pokemon={"ditto"}/>
        <Card handleClick={handleClick} pokemon={"eevee"}/>
        <Card handleClick={handleClick} pokemon={"bulasaur"}/>
        <Card handleClick={handleClick} pokemon={"charmander"}/>
        <Card handleClick={handleClick} pokemon={"squirtle"}/>
        <Card handleClick={handleClick} pokemon={"pikachu"}/>
        <Card handleClick={handleClick} pokemon={"geodude"}/>
        <Card handleClick={handleClick} pokemon={"magikarp"}/>
        <Card handleClick={handleClick} pokemon={"psyduck"}/>
      </div>
    </>
  )
}

export default App;
