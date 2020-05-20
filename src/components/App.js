import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/shared";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getData());
  }

  render() {
    return (
      <div>
        Would you rather
      </div>
    );
  }
}

export default connect()(App);