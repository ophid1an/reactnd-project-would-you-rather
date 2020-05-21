import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";

function NewQuestion({ dispatch }) {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOne, optionTwo));
    history.push('/');
  };

  return (
    <Card className="w-75 mx-auto">
      <Card.Header className="text-center ">Create New Question</Card.Header>
      <Card.Body>
        <Card.Title>Complete the question:</Card.Title>
        <Card.Text className='font-weight-bold'>
          Would you rather...
        </Card.Text>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Option One Text Here"
              onChange={e => setOptionOne(e.target.value)}
            />
          </Form.Group>
          <p className='text-center font-weight-bold'>OR</p>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Option Two Text Here"
              onChange={e => setOptionTwo(e.target.value)}
            />
          </Form.Group>
          <Button disabled={optionOne.length === 0 || optionTwo.length === 0}
                  variant="primary" type="submit" block
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default connect()(NewQuestion);