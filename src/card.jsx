import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

function Card({handleClick, pokemon}) {
    const [imgURL, setImgUrl] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setImgUrl(data.sprites.other["official-artwork"].front_shiny);
            })
    }, [pokemon])
        
    return ( imgURL && (
      <div className="card" 
        onClick={() => handleClick(pokemon)}>
        <img alt="img" src={imgURL}/>
        <h3>{pokemon.name}</h3>
      </div>
    ))
  }

  Card.propTypes = {
    pokemon: PropTypes.object,
    handleClick: PropTypes.func
  }
  
  export default Card;