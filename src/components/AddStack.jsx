import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import  Modal  from './Modal';
import StackFormAdd from './StackFormAdd';
import * as StackActions from './../actions/StackActions';

class AddStack extends Component {
  constructor(props){
    super(props);
    this.state = {
      open : false
    }
  }

  onClose = () => {
    this.setState({
      open: false
    });
  }

  onSubmit = (data) => {
    this.props.actions.insterStack(data);
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div>
        <Button positive  onClick={() => {this.setState({open: true})}}>Thêm Stack Mới</Button>
        <Modal 
          header="Thêm Công Việc"
          close = { this.onClose }
          open={ this.state.open }>
          <StackFormAdd onSubmit={ this.onSubmit }/>
        </Modal>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { 

  };
};

let mapDispatchToProp = (dispatch): any => {
  let actions = bindActionCreators({
    ...StackActions
  }, dispatch);

  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProp)(AddStack);