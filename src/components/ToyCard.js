import React from "react";

function ToyCard( { toy, onDeleteToy, onUpdateLikes } ) {

  const {id, name, image, likes} = toy

  // DELETE request
  function handleDonateClick() {
    fetch(`http://localhost:3001/toys/${id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(() => onDeleteToy(toy))
  }

  // PATCH request
  function handleLikeClick(e) {
    const updatedLikes = e.target.value
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        likes: updatedLikes
      })
    })
    .then(res => res.json())
    .then(updatedToy => onUpdateLikes(updatedToy))
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
      <button className="like-btn" onClick={(handleLikeClick)}>Like {likes}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
