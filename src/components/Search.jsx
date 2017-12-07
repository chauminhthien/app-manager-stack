import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class Search extends Component {
  render() {
    return (
      <Input icon='search'  placeholder='Search...' />
    );
  }
}

export default Search;