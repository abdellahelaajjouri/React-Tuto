import "./App.css";
import Card from "./components/Card";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Abdellah el aajjouri");
  const [showCard, setShowCard] = useState(true);
  const buttons = (
    <div>
      <button className="button button2">Yes</button>
      <button className="button button3">No</button>
    </div>
  );
  const changeNameHandler = (name) => {
    setName(name);
  };

  const changeInputHandler = (event) => setName(event.target.value);
  const toggleShowCard = () => setShowCard(!showCard);
  const cardMarkUp = showCard && (
    <Card
      name={name}
      avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/356.jpg"
      job="National Web Engineer"
      onChangeName={() => changeNameHandler("Mohamed el harraq")}
      onChangeInput={changeInputHandler}
    >
      {buttons}
    </Card>
  );
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>
        Show / Hide
      </button>
      {cardMarkUp}
    </div>
  );
}

export default App;
