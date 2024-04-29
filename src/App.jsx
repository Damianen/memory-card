import Card from './card';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemon, setPokemon] = useState([
    { 
      name: "ditto",
      hasBeenClicked: false
    },
    { 
      name: "eevee",
      hasBeenClicked: false
    },
    { 
      name: "bulbasaur",
      hasBeenClicked: false
    },
    { 
      name: "charmander",
      hasBeenClicked: false
    },
    { 
      name: "squirtle",
      hasBeenClicked: false
    },
    { 
      name: "pikachu",
      hasBeenClicked: false
    },
    { 
      name: "geodude",
      hasBeenClicked: false
    },
    { 
      name: "magikarp",
      hasBeenClicked: false
    },
    { 
      name: "psyduck",
      hasBeenClicked: false
    },
    { 
      name: "drowzee",
      hasBeenClicked: false
    },
  ]);

  const handleClick = (clickedPokemon) => {
    if (clickedPokemon.hasBeenClicked) {
      setBestScore(score);
      setScore(0);
    } else {
      setScore(score + 1);
      const nextPokemon = pokemon.map(arrPokemon => {
        if (clickedPokemon.name === arrPokemon.name) {
          return { ...arrPokemon, hasBeenClicked: true };
        } else {
          return arrPokemon;
        }
      })
      nextPokemon.sort(() => Math.random() -0.5);
      setPokemon(nextPokemon);
    }
  }

  return (
    <>
      <h1>Shiny Pokemon Memory Game</h1>
      <p>Get points by clicking on an image but dont click on any card more than once!</p>
      <p>Score: {score}</p>
      <p>Best score: {bestScore} </p>
      <div className='cards-container'>
        {pokemon.map(pokemon => (
          <Card key={pokemon.name} handleClick={handleClick} pokemon={pokemon}/>
        ))}
      </div>
    </>
  )
}

export default App;
