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
      data : [],
      filter : {
        name    : "",
        status  : -1
      }
    }
  }

  componentWillMount = () => {

    if(localStorage && localStorage.getItem("stack") ){
      let { data }  = JSON.parse(localStorage.getItem("stack"));
      this.props.actions.setStack(data);
    }
      
  }

  onChangeFilterName = (name) => {
    this.state.filter.name = name;
    this.setState({
      ...this.state
    });
  }

  onChangeFilterStatus = (st) => {
    this.state.filter.status = parseInt(st);
    this.setState({
      ...this.state
    });
  }

  render() {
    let { stack :stacks } = this.props;
    let { filter } = this.state;
    if( filter ){
      stacks = stacks.filter( stack => {
        return stack.name.toLowerCase().indexOf(filter.name.toLowerCase() ) !== -1 ;
      });

      stacks = stacks.filter( stack => {
        if(filter.status === -1)
          return stack;
        else
          return stack.status === (filter.status === 1 ? true : false ) ;
      });

    }

    let propsSeach = {
      onChangeFilterName : this.onChangeFilterName
    }

    let propsFilter = {
      onChangeFilterStatus : this.onChangeFilterStatus
    }

    return (
      <Container>
        <Header textAlign="center" size='huge'>Công Việc Ngày Hôm Nay</Header> <br /><br /><br />
        <Control propsSeach={ propsSeach } propsFilter={ propsFilter } />
        <StackTable actions={ this.props.actions } stack={ stacks } dt={ this.props.stack } />
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
