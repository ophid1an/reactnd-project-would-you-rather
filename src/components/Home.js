import React from 'react';
import { connect } from 'react-redux';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Question from "./Question";

function Home({ questions, questionIds, users, authedUser }) {
  const getQuestion = id => (
    <Question
      key={id}
      question={questions[id]}
      author={users[questions[id].author]}
    />
  );

  return (
    <Tabs
      defaultActiveKey="unanswered"
      className='w-75 mx-auto mb-3 justify-content-center'
    >
      <Tab eventKey="unanswered" title="Unanswered Questions">
        {questionIds
          .filter(id => 'undefined' === typeof users[authedUser].answers[id])
          .map(getQuestion)
        }
      </Tab>
      <Tab eventKey="answered" title="Answered Questions">
        {questionIds
          .filter(id => 'string' === typeof users[authedUser].answers[id])
          .map(getQuestion)
        }
      </Tab>
    </Tabs>
  );
}

const mapStateToProps = ({ questions, users, authedUser }) => ({
  questions,
  questionIds: Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  users,
  authedUser
});

export default connect(mapStateToProps)(Home);