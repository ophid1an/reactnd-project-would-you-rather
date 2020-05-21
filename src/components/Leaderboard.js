import React, {Component} from 'react';
import { connect } from 'react-redux';

function Leaderboard({ users, counts }) {
  console.log(counts)
  return (
    <ul>
      {counts.map(c => (
        <li key={c.id}>{`${users[c.id].name} - ${c.createdCnt} / ${c.answeredCnt} / ${c.totalCnt} `}</li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
  counts: Object.keys(users)
    .map(id => {
      const user = users[id];
      const createdCnt = user.questions.length;
      const answeredCnt = Object.keys(user.answers).length;
      const totalCnt = createdCnt + answeredCnt;

      return {id, createdCnt, answeredCnt, totalCnt};
    })
    .sort((a, b) => b.totalCnt - a.totalCnt)
})

export default connect(mapStateToProps)(Leaderboard);