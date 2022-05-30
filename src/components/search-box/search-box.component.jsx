import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <>
        <input
          type="search"
          className={`search-box ${this.props.className}`}
          placeholder={this.props.placeholder}
          onChange={onSearchChange}
        />
      </>
    );
  }
}

export default SearchBox;
