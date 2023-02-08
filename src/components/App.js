import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onAddToy(newToy) {
    setToys([...toys, newToy])
    console.log(toys)
  }

  function onDeleteToy(deletedToy) {
    const updatedToys = toys.filter(toy => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  function onUpdateLikes(updatedToy) {
    const updatedToys = toys.map(toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })

    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={onAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={onDeleteToy} onUpdateLike={onUpdateLikes}/>
    </>
  );
}

export default App;
