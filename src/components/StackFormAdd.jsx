import React, { Component } from 'react';
import { Button, Form, Radio } from 'semantic-ui-react'

class StackFormAdd extends Component {

  constructor(props){
    super(props);
    this.state = {
      name    : "",
      status  : false
    }
  }

  handleChange = (e, { checked }) => {
    this.setState({
      status: !this.state.status
    });
  }

  onChangeName = (e, {value}) => {
    this.setState({
      name: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    let { name, status } = this.state;
    if(name !== "")
      this.props.onSubmit({name, status});
  }

  render() {
    return (
      <Form onSubmit={ this.onSubmit }>
        <Form.Group >
          <Form.Input value={ this.state.name } width={16} onChange={ this.onChangeName } label='Name Stack' placeholder='Enter Name Stack' />
        </Form.Group>
        <Form.Group >
          <Radio value="this" name='radioGroup' onChange={ this.handleChange } checked={ this.state.status } label='Status' toggle />
        </Form.Group>
        <Button type='submit' color="green">Submit</Button>
      </Form>
    );
  }
}

export default StackFormAdd;