import React, { useState } from "react";

function ToyForm( { onAddToy } ) {

  const initialValue = {
    name: "",
    image:"",
    likes: 0
  }

  const [formData, setFormData] = useState(initialValue)

  function handleOnchange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }


  function handleSubmit(e) {
    e.preventDefault()

    const toyObj = {
      name: formData.name,
      image: formData.image,
      likes: formData.likes
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(toyObj)
    })
    .then(res => res.json())
    .then(newToy => onAddToy(newToy))

    setFormData(initialValue)
  }

  

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleOnchange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleOnchange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
