import React, {Component} from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    return (
      <div>
        LEADER BOARD
      </div>
    );
  }
}

export default connect(({ users }) => ({ users }))(Leaderboard);