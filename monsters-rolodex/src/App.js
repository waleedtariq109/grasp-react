import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
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
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField,
      };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="Search monstes"
          onChange={onSearchChange}
        />
        {filteredMonster.map((monster) => {
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
