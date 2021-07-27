import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './header';
import SubHeader from './subHeader';
import FormWrapper from './form';
import Footer from './footer';

const MainWrapper = () => {
  return (
    <>
      <Container fluid className='container'>
        <Header />
        <SubHeader />
        <Row>
          <FormWrapper />
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default MainWrapper;
