import "./App.css";
import Card from "./components/Card";
import React, { Component } from "react";
import { faker } from "@faker-js/faker";
import { ThemeProvider } from "styled-components";
import Button from "./element/Button";

const theme = {
  primary: "green",
  mongo: "yellow",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          name: faker.name.findName(),
          id: "fdsklsd",
          avatar: faker.image.avatar(),
          job: faker.name.jobTitle(),
        },
        {
          name: faker.name.findName(),
          id: "fdsklsdj",
          avatar: faker.image.avatar(),
          job: faker.name.jobTitle(),
        },
        {
          name: faker.name.findName(),
          id: "fdsklsdjf",
          avatar: faker.image.avatar(),
          job: faker.name.jobTitle(),
        },
        {
          name: faker.name.findName(),
          id: "fdsklsdjfs",
          avatar: faker.image.avatar(),
          job: faker.name.jobTitle(),
        },
        {
          name: faker.name.findName(),
          id: "fdsklsdjfsd",
          avatar: faker.image.avatar(),
          job: faker.name.jobTitle(),
        },
      ],
      showCard: true,
    };
  }

  render() {
    const deletingCardHandler = (cardIndex) => {
      const cards_copy = [...this.state.cards];
      cards_copy.splice(cardIndex, 1);
      this.setState({ cards: cards_copy });
    };
    const toggleShowCard = () =>
      this.setState({ showCard: !this.state.showCard });
    const changeNameHandler = (event, id) => {
      // 1. which card
      const cardIndex = this.state.cards.findIndex((card) => card.id === id);
      // 2. make a copy of the cards
      const cards_copy = [...this.state.cards];
      // 3. change the name of the specific index
      cards_copy[cardIndex].name = event.target.value;
      // 4. set the card with the latest version of the card
      this.setState({ cards: cards_copy });
    };
    const classes = ["button"];
    if (this.state.cards.length < 3) classes.push("pink");
    if (this.state.cards.length < 2) classes.push("red text");
    const cardMarkUp =
      this.state.showCard &&
      this.state.cards.map((card, index) => (
        <Card
          name={card.name}
          avatar={card.avatar}
          key={card.id}
          job={card.job}
          onDelete={() => deletingCardHandler(index)}
          onChangeName={(event) => changeNameHandler(event, card.id)}
        />
      ));
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button color="mongo" length={this.state.cards.length} onClick={toggleShowCard}>
            Toggle
          </Button>
          <button className={classes.join(" ")} onClick={toggleShowCard}>
            Show / Hide
          </button>
          {cardMarkUp}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
