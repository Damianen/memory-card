import { useState } from "react";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Card({handleClick, pokemon}) {
    const [hasBeenClicked, setHasBeenClicked] = useState(false);
    const [imgURL, setImgUrl] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setImgUrl(data.sprites.other["official-artwork"].front_shiny);
            })
    }, [])
        
    return ( imgURL && (
      <div className="card-container" 
        onClick={() => { 
            handleClick(hasBeenClicked);
            setHasBeenClicked(true)}}>
        <img alt="img" src={imgURL}/>
        <h3>name</h3>
      </div>
    ))
  }
  
  export default Card;