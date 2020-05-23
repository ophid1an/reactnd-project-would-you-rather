import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";
import {OPTION_ONE, OPTION_TWO} from "../utils/constants";

function QuestionDetailsAnswered({ authorName, question, answer }) {
  const optionOneCnt = question.optionOne.votes.length;
  const optionTwoCnt = question.optionTwo.votes.length;
  const optionTotalCnt = optionOneCnt + optionTwoCnt;
  const optionOnePercent = optionTotalCnt === 0 ?
    0 : Math.round(10* 100 * optionOneCnt / optionTotalCnt) / 10;
  const optionTwoPercent = optionTotalCnt === 0 ? 0 : 100 - optionOnePercent;

  return (
    <React.Fragment>
      <h5 className='border-bottom mb-3'>{`Asked by ${authorName}`}</h5>
      <p className='font-weight-bold'>Results</p>
      <div className={`border rounded p-2 mb-2 ${OPTION_ONE === answer ? 'bg-info' : 'bg-light'}`}>
        <p>
          {`Would you rather ${question.optionOne.text}?`}
        </p>
        <ProgressBar
          className='mb-1'
          now={optionOnePercent}
          label={optionOnePercent && `${optionOnePercent}%`}
        />
        <h6 className='text-weight-bold text-center'>
          {`${optionOneCnt} out of ${optionTotalCnt} votes`}
        </h6>
      </div>
      <div className={`border rounded p-2 ${OPTION_TWO === answer ? 'bg-info' : 'bg-light'}`}>
        <p>
          {`Would you rather ${question.optionTwo.text}?`}
        </p>
        <ProgressBar
          className='mb-1'
          now={optionTwoPercent}
          label={optionTwoPercent && `${optionTwoPercent}%`}
        />
        <h6 className='text-weight-bold text-center'>
          {`${optionTwoCnt} out of ${optionTotalCnt} votes`}
        </h6>
      </div>
    </React.Fragment>
  );
}

export default QuestionDetailsAnswered;