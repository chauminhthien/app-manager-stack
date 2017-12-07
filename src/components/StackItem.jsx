import React, { Component } from 'react';
import { Icon, Radio, Table, Popup, Button, Input } from 'semantic-ui-react';

class StackItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      st : 0
    }
  }

  onChangeName = (data) => {
    this.props.onChangeNameStackItem(data.id, data.value);
    this.setState({st: 0})
  }

  render() {
    let { data, id, delStackItem, StatusChange } = this.props;
    let xhtml = (this.state.st === 1) ?
      (<Input id={id} name="name" onBlur={ (e) => this.onChangeName(e.target) } fluid defaultValue={data.name} placeholder='Nhập Tên Stack...' autoFocus  />) :
      (data.name) ;
    return (
      <Table.Row>
        <Table.Cell >{ id +1 }</Table.Cell>
        <Table.Cell onDoubleClick={ () => {this.setState({st: 1})}}>{ xhtml }</Table.Cell>
        <Table.Cell><Radio st={id} onChange={ (e,{st}) => StatusChange(id) } checked={ data.status } toggle /></Table.Cell>
        <Table.Cell>
          <Button.Group>
            <Popup 
              trigger={
                <Button
                  id={id}
                  icon='delete' 
                  color='red'
                  onClick={(e,{id}) => delStackItem(id)}/>
              }
              content='Xóa'
              hideOnScroll  
            />
            </Button.Group>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default StackItem;