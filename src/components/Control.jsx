import React, { Component } from 'react';
import { Header, Grid, Input, Dropdown } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Search from './Search';
import Filter from './Filter';
import AddStack from './AddStack';
import Pagination from './Pagination';
import * as StackActions from './../actions/StackActions';

class Control extends Component {

  onSubmitAdd = (data) => {
    console.log(data)
  }

  render() {
    return (
      <Grid columns='equal'>
        <Grid.Column>
          <Search />
        </Grid.Column>

        <Grid.Column>
          <Filter />
        </Grid.Column>

        <Grid.Column>
          <AddStack />
        </Grid.Column>

        <Grid.Column>
          <Pagination />
        </Grid.Column>
          
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProp)(Control);