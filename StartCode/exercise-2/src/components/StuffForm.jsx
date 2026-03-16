import { useState } from "react";

export default function StuffForm() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  // dont forget to add event prevent
  
  function handleName(e) {
    setName(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  const ADDED_STUFF = [...INITIAL_STUFFS];
  const [addedStuffs, setAddedStuffs] = React.useState(ADDED_STUFF);

  function addStuff({ name, price }) {
    addedStuffs.push((stuff, index) => (
              <StuffCard key={index} name={name} price={price} />
            ))
    
  }

  // use on submit

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type={handleName} placeholder="Banana" />

      <p>Stuff price</p>
      <input type={handlePrice} placeholder="15" />

      <button onSubmit={addStuff}>Add Stuff</button>
    </form>
  );
}
