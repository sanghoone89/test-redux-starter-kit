import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CountActions from './modules/count'

class App extends Component {
  render() {
    const { count, CountActions } = this.props;
    return (
      <div>
        <h1>{count.number}</h1>
        <button onClick={CountActions.onIncrease}>+</button>
        <button onClick={CountActions.onDecrease}>-</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    count: state.count
  }),
  (dispatch) => ({
    CountActions: bindActionCreators(CountActions, dispatch)
  })
)(App);