import React, {useState} from 'react';
import { connect } from 'react-redux';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { handleAddQuestionAnswer } from "../actions/shared";
import { OPTION_ONE, OPTION_TWO } from "../utils/constants";

function QuestionDetailsUnanswered({ dispatch, authorName, question }) {
  const [answer, setAnswer] = useState(OPTION_ONE);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    setSubmitting(true);
    dispatch(handleAddQuestionAnswer(question.id, answer));
  };

  return (
    <React.Fragment>
      <h5 className='border-bottom mb-3'>{`${authorName} asks:`}</h5>
      <p className='font-weight-bold'>Would You Rather ...</p>
      <Form onSubmit={!submitting ? handleSubmit : null}>
        <fieldset>
          <Form.Group>
            <Form.Check
              type='radio' name='answer'
              label={question.optionOne.text}
              onChange={() => setAnswer(OPTION_ONE)}
              checked={OPTION_ONE === answer}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type='radio' name='answer'
              label={question.optionTwo.text}
              onChange={() => setAnswer(OPTION_TWO)}
              checked={OPTION_TWO === answer}
            />
          </Form.Group>
        </fieldset>
        <Button type='submit' disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default connect()(QuestionDetailsUnanswered);