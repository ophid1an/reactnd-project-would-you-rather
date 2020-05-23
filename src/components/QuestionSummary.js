import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";

function QuestionSummary({ question, author, ...props }) {
  return (
    <Media {...props}>
      <Avatar user={author}/>
      <Media.Body className='border-left pl-3'>
        <h5 className='border-bottom mb-3'>{`${author.name} asks:`}</h5>
        <p className='font-weight-bold'>Would you rather...</p>
        <p className='text-truncate'>
          {`${question.optionOne.text}...`}
        </p>
        <LinkContainer to={`/question/${question.id}`}>
          <Button variant="outline-primary" type="submit" block>
            View Poll
          </Button>
        </LinkContainer>
      </Media.Body>
    </Media>
  );
}

export default QuestionSummary;