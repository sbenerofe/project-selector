import { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type='search'
        onChange={this.props.onChangeHandler}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default SearchBox;
