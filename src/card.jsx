import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Card({handleClick}) {
    const [hasBeenClicked, setHasBeenClicked] = useState(false);
    let src = "";
        
    return (
      <div className="card-container" 
        onClick={() => { 
            handleClick(hasBeenClicked);
            setHasBeenClicked(true)}}>
        <img alt="img" src={src}/>
        <h3>name</h3>
      </div>
    )
  }
  
  export default Card;