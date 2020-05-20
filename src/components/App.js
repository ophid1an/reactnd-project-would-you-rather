import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getData } from "../actions/shared";
import Login from "./Login";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getData());
  }

  render() {
    return (
      <div className='container'>
        <Login />
      </div>
    );
  }
}

export default connect()(App);