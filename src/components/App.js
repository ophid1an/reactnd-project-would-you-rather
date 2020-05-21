import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getData } from "../actions/shared";
import Leaderboard from "./Leaderboard";
import Navi from "./Navi";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getData());
  }

  render() {
    return (
      <Router>
        <Container>
          <Navi />
          {/*<Home />*/}
          <Switch>
            <Route path='/login' component={Login}/>
            <PrivateRoute path='/add'>
              <NewQuestion/>
            </PrivateRoute>
            <PrivateRoute path='/leaderboard'>
              <Leaderboard/>
            </PrivateRoute>
            <PrivateRoute path='/'>
              <Home/>
            </PrivateRoute>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default connect()(App);