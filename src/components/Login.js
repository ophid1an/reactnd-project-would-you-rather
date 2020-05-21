import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
  useHistory,
  useLocation
} from "react-router-dom";
import {loginUser} from "../actions/authedUser";

function Login({ dispatch, users }) {
  const [userId, setUserId] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const onSubmit = e => {
    e.preventDefault();
    const { from } = location.state || { from:{ pathname: "/" } };

    dispatch(loginUser(userId));
    history.replace(from);
  };

  return (
      <form
        className="mx-auto w-50"
        onSubmit={onSubmit}
      >
        <h6 className='text-muted text-center'>Please sign in to continue</h6>
        <div className="form-group">
          <select
            className="form-control form-control-lg"
            onChange={e => setUserId(e.target.value)}
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
          disabled={!userId}
        >Sign in</button>
      </form>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);