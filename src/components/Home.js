import React from 'react';
import { connect } from 'react-redux';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import QuestionSummary from "./QuestionSummary";

function Home({ questions, questionIds, users, authedUser }) {
  const isAnswered = id => 'string' === typeof users[authedUser].answers[id];
  const isUnanswered = id => !isAnswered(id);

  const getQuestionSummaryComponent = (id) => (
    <QuestionSummary
      as='li' className='w-75 mx-auto mb-2 border p-3'
      key={id}
      question={questions[id]}
      author={users[questions[id].author]}
    />
  );

  return (
    <Tabs
      id='tabs'
      defaultActiveKey="unanswered"
      className='w-75 mx-auto mb-3 justify-content-center'
    >
      <Tab eventKey="unanswered" title="Unanswered Questions">
        <ol className='list-unstyled'>
          {questionIds
            .filter(isUnanswered)
            .map(getQuestionSummaryComponent)
          }
        </ol>
      </Tab>
      <Tab eventKey="answered" title="Answered Questions">
        <ol className='list-unstyled'>
          {questionIds
            .filter(isAnswered)
            .map(getQuestionSummaryComponent)
          }
        </ol>
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