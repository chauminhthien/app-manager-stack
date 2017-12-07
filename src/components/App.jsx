import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StackTable from './StackTable';
import Control from './Control';
import * as StackActions from './../actions/StackActions';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data : []
    }
  }

  componentWillMount = () => {

    if(localStorage && localStorage.getItem("stack") ){
      let { data }  = JSON.parse(localStorage.getItem("stack"));
      this.props.actions.setStack(data);
    }
      
  }

  render() {
    let { stack } = this.props;
    return (
      <Container>
        <Header onClick={ this.test} textAlign="center" size='huge'>Công Việc Ngày Hôm Nay</Header> <br /><br /><br />
        <Control />
        <StackTable actions={ this.props.actions } stack={ stack } />
      </Container>
    );
  }
}

let mapStateToProps = (state) => {
  let { data : stack } = state.stack;
  return { 
    stack
  };
};

let mapDispatchToProp = (dispatch): any => {
  let actions = bindActionCreators({
    ...StackActions
  }, dispatch);

  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProp)(App);
