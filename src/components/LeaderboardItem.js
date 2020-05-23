import React from 'react';
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";
import Badge from "react-bootstrap/Badge";

function LeaderboardItem({ user, counts, ...props }) {
  return (
    <Media {...props}>
      <Avatar user={user}/>
      <Media.Body className='border-left pl-3'>
        <h5 className='border-bottom mb-3 text-center'>{`${user.name}`}</h5>
        <div className='d-flex align-items-center justify-content-around'>
          <div className='text-center'>
            <p>{`Questions Created: ${counts.createdCnt}`}</p>
            <hr/>
            <p className='mb-0'>{`Questions Answered: ${counts.answeredCnt}`}</p>
          </div>
          <div className='text-center border rounded p-3'>
            <h4 className='border-bottom'>Score</h4>
            <Badge pill variant="success">{counts.totalCnt}</Badge>
          </div>
        </div>
      </Media.Body>
    </Media>
  );
}

export default LeaderboardItem;