import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Tất Cả', value: -1 },
  { key: 2, text: 'Hoàn Thành', value: 1 },
  { key: 3, text: 'Chưa Hoàn Thành', value: 0 },
]

class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      value    : ""
    }
  }
  
  handleChange = (e, { value }) => {
    this.setState({value});
    this.props.propsFilter.onChangeFilterStatus(value);
  }
      


  render() {
    const { value } = this.state;
    
    return (
      <Dropdown
        onChange={this.handleChange}
        options={options}
        placeholder='Choose an option'
        selection
        defaultValue={-1}
      />
    );
  }
}

export default Filter;