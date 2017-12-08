import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      name    : ""
    }
  }

  onChange = (e, {value}) =>{
    this.setState({
      name: value
    });
    
    this.props.propsSeach.onChangeFilterName(value);
  }

  render() {
    return (
      <Input onChange={ this.onChange }type="text" value={ this.state.name } icon='search'  placeholder='Search...' />
    );
  }
}

export default Search;