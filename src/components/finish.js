import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './header';
import SubHeader from './subHeader';
import Footer from './footer';

function Finish() {
  return (
    <>
      <Container fluid className='container'>
        <Header />
        <SubHeader />
        <Row>
          <Col></Col>
          <Col>
            <span className='thank-span'>THANK YOU!</span>
          </Col>
          <Col></Col>
        </Row>
        <Row className='finish-btn-group'>
          <Col lg='3'></Col>
          <Col lg='1'>
            <Button className='btn' id='orange-btn'>
              LIST ALL
            </Button>
          </Col>
          <Col lg='8'></Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default Finish;
