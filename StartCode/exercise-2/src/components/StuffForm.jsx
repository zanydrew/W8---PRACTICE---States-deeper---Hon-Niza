import { useState } from "react";

export default function StuffForm({onAddStuff}) {

  const [enteredName, setEnteredName] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  // dont forget to add event prevent

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddStuff(enteredName, enteredPrice);

    setEnteredName("");
    setEnteredPrice("");
  }



  // use on submit

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="text" placeholder="Banana" value={enteredName} onChange={(e) => setEnteredName(e.target.value)} />

      <p>Stuff price</p>
      <input type="number" placeholder="15" value={enteredPrice} onChange={(e) => setEnteredPrice(e.target.value)} />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
