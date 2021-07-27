import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Row>
        <Col></Col>
        <Col className='header'>
          <img
            className='header-img'
            alt='header'
            src='/images/header.png'
          ></img>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default Header;
