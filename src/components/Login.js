import React, {Component} from 'react';
import { connect } from 'react-redux';
import {loginUser} from "../actions/authedUser";

class Login extends Component {
  state = {
    userId: null,
  }

  onSelect = e => {
    e.preventDefault();
    const userId = e.target.value;

    this.setState({userId});
  }

  onSubmit = e => {
    e.preventDefault();

    this.props.dispatch(loginUser(this.state.userId));
    // todo: redirect
  }

  render() {
    const { users } = this.props;
    return (
      <div className='login-container text-center'>
        <h2>Would you rather</h2>
        <form
          className="form-signin"
          onSubmit={this.onSubmit}
        >
          <h6>Please sign in to continue</h6>
          <div className="form-group">
            <select
              className="form-control form-control-lg"
              onChange={this.onSelect}
              defaultValue=''
            >
              <option value='' disabled={true}>Select User</option>
              {Object.keys(users).map(id => (
                <option key={id} value={id}>{users[id].name}</option>
              ))}
            </select>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={!this.state.userId}
          >Sign in</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);