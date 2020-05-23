import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from "./Avatar";
import Media from "react-bootstrap/Media";
import QuestionDetailsAnswered from "./QuestionDetailsAnswered";
import QuestionDetailsUnanswered from "./QuestionDetailsUnanswered";

function QuestionDetails({ users, questions, authedUser }) {
  const params = useParams();
  const { id } = params;
  const question = questions[id];
  const author = question && users[question.author];
  const answer = question && users[authedUser].answers[id];
  const isAnswered = 'string' === typeof answer;

  if (!question) {
    return (
      <div className='w-75 mx-auto mb-2 p-3 text-center'>
        Question does not exist.
      </div>
    )
  }

  return (
    <Media className='w-75 mx-auto mb-2 border p-3'>
      <Avatar user={author}/>
      <Media.Body className='border-left pl-3'>
        {isAnswered ?
          <QuestionDetailsAnswered
            authorName={author.name}
            question={question}
            answer={answer}
          /> :
          <QuestionDetailsUnanswered
            authorName={author.name}
            question={question}
          />
        }
      </Media.Body>
    </Media>
  );
}

const mapStateToProps = ({ users, questions, authedUser }) => ({
  users,
  questions,
  authedUser
})

export default connect(mapStateToProps)(QuestionDetails);