import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import StackItem from './StackItem';
import StackPage from './StackPage';

class StackTable extends Component {

  constructor(props){
    super(props);
    
  }

  delStackItem = (index) => {
    let { stack, actions } = this.props;
    let data = [ ...stack ];
    data.splice(index, 1);
    actions.setStack(data);
    this.saveStack(data);
  }

  StatusChange = (id) => {
    let { stack, actions } = this.props;
    let data = [ ...stack ];
    data[id].status = !data[id].status;

    actions.setStack(data);
    this.saveStack(data);
  }

  onChangeNameStackItem = (id, stackName) => {
    let { stack, actions } = this.props;
    let data = [ ...stack ];
    data[id].name = stackName;

    actions.setStack(data);
    this.saveStack(data);
  }

  saveStack = (data) => {
    localStorage.setItem("stack", JSON.stringify({data}));
  }

  render() {
    let { stack } = this.props;
    return (
      <Table celled textAlign="center">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={ 1 } >#</Table.HeaderCell>
            <Table.HeaderCell width={ 5 }>Name</Table.HeaderCell>
            <Table.HeaderCell width={ 2 }>Status</Table.HeaderCell>
            <Table.HeaderCell width={ 2 } >Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          { stack.map((data, index)=>{
            return (<StackItem onChangeNameStackItem={ this.onChangeNameStackItem } StatusChange={ this.StatusChange } key={index} id={index} data={data} delStackItem={ this.delStackItem } />)
          })}
          
        </Table.Body>

        <Table.Footer>
          <StackPage />
        </Table.Footer>
      </Table>
    );
  }
}

export default StackTable;