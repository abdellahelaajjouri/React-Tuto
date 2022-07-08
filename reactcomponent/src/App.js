import "./App.css";
import Card from "./components/Card";
import { faker } from "@faker-js/faker";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Abdellah el aajjouri");
  const buttons = (
    <div>
      <button className="button button2">Yes</button>
      <button className="button button3">No</button>
    </div>
  );
  const changeNameHandler = (name) => {
    setName(name);
  };
  return (
    <div className="App">
      <button
        className="button"
        onClick={() => changeNameHandler("Mouad aajjouri")}
      >
        {" "}
        Change name{" "}
      </button>
      <Card
        name={name}
        avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/356.jpg"
        job="National Web Engineer"
        onChangeName={() => changeNameHandler("Mohamed el harraq")}
      >
        {buttons}
      </Card>
    </div>
  );
}

export default App;
