import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <>
      <Row>
        <Col></Col>
        <Col className='footer'>
          <img
            className='footer-img'
            alt='footer'
            src='/images/footer.png'
          ></img>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default Footer;
