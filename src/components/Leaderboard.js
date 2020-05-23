import React from 'react';
import { connect } from 'react-redux';
import LeaderboardItem from "./LeaderboardItem";

function Leaderboard({ users, counts }) {
  return (
    <ol className='list-unstyled'>
      {counts.map(c => (
        <LeaderboardItem
          key={c.id}
          user={users[c.id]}
          counts={c}
          as='li' className='w-75 mx-auto mb-2 border p-3'
        />
      ))}
    </ol>
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