import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Question({ question, author }) {
  return (
    <Card className='w-75 mx-auto mb-2'>
      <Card.Header>{`${author.name} asks:`}</Card.Header>
      <Row className='align-items-center no-gutters'>
        <Col className='ml-3' md='auto'>
          <Image
            src={author.avatarURL}
            className='question-avatar'
            roundedCircle
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>Would you rather...</Card.Title>
            <Card.Text className='text-truncate'>
              {`${question.optionOne.text}...`}
            </Card.Text>
            <Button variant="primary" type="submit" block>
              View Poll
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default Question;