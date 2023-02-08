import React from "react";

function ToyCard( { toy, onDeleteToy } ) {

  const {id, name, image, likes} = toy

  // DELETE request
  function handleDonateClick() {
    fetch(`http://localhost:3001/toys/${id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(() => onDeleteToy(toy))
  }

  return (
    <div className="card" >
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {likes}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
