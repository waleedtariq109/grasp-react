import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => {
        this.setState(
          () => {
            return {
              monsters: user,
            };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }
  render() {
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="Search monstes"
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredMonster = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            });
            this.setState(() => {
              return {
                monsters: filteredMonster,
              };
            });
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
