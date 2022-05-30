import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, users } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h1 className="app-tilte">Monsters Rolodex</h1>

        <SearchBox
          className={"monster-search-box"}
          onSearchChange={onSearchChange}
          placeholder={"Please search monster"}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
