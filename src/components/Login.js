import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
  useHistory,
  useLocation
} from "react-router-dom";
import {loginUser} from "../actions/authedUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    <React.Fragment>
      <h3 className='mb-4 text-center'>Would you rather app</h3>
      <Form
        className="mx-auto w-50"
        onSubmit={onSubmit}
      >
        <h6 className='text-muted text-center'>Please sign in to continue</h6>
        <Form.Group>
          <Form.Control as='select'
            onChange={e => setUserId(e.target.value)}
            defaultValue=''
          >
            <option value='' disabled={true}>Select User</option>
            {Object.keys(users).map(id => (
              <option key={id} value={id}>{users[id].name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button
          type='submit'
          block
          disabled={!userId}
        >Sign in</Button>
      </Form>
    </React.Fragment>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);