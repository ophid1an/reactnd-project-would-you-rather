import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';
import {logoutUser} from "../actions/authedUser";

function Navi({ dispatch, username }) {
  const history = useHistory();

  const onLogout = () => {
    dispatch(logoutUser());
    history.push('/');
  }

  return (
    <Navbar bg="info" variant="light" expand='md'>
      {username &&
      <Navbar.Brand>{`Hello, ${username}`}</Navbar.Brand>}
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-around'>
        <Nav>
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/add'>
            <Nav.Link>New Question</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/leaderboard'>
            <Nav.Link>Leaderboard</Nav.Link>
          </LinkContainer>
        </Nav>
        { username &&
        <Nav>
          <Nav.Link onClick={onLogout}>Logout</Nav.Link>
        </Nav>}
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = ({ users, authedUser }) => ({
  username: authedUser ? users[authedUser].name : null,
});

export default connect(mapStateToProps)(Navi);