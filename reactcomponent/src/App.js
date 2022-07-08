import "./App.css";
import Card from "./components/Card";
import { faker } from "@faker-js/faker";

function App() {
  const buttons = (
    <div>
      <button className="button button2">Yes</button>
      <button className="button button3">No</button>
    </div>
  );
  return (
    <div className="App">
      <Card
        name={`${faker.name.findName()}`}
        avatar={faker.image.avatar()}
        job={faker.name.jobTitle()}
      >
        {buttons}
      </Card>
      <Card
        name={`${faker.name.findName()}`}
        avatar={faker.image.avatar()}
        job={faker.name.jobTitle()}
      >
        {buttons}
      </Card>
      <Card
        name={`${faker.name.findName()}`}
        avatar={faker.image.avatar()}
        job={faker.name.jobTitle()}
      >
        {buttons}
      </Card>
    </div>
  );
}

export default App;
