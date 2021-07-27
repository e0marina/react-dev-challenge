import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './header';
import SubHeader from './subHeader';
import Footer from './footer';

function Success() {
  return (
    <>
      <Container fluid className='container'>
        <Header />
        <SubHeader />
        <Row>
          <span>SUCCESS!</span>
        </Row>
        <div className='success-btn-group'>
          <Link to='/confirm'>
            <Button className='btn' variant='success' type='submit'>
              NEXT
            </Button>
          </Link>
          <Link to='/finish'>
            <Button className='btn' id='white-btn'>
              FINISHED
            </Button>
          </Link>
          <Button className='btn' id='orange-btn'>
            LIST ALL
          </Button>
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default Success;
