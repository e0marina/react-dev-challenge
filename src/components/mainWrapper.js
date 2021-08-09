import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './header';
import SubHeader from './subHeader';
import SubText from './subText';
// import Form from './form';
import ValidatedForm from './validatedForm';
import Footer from './footer';

const FormWrapper = () => {
  return (
    <>
      <Container fluid className='container'>
        {/* <Header />
        <SubHeader />
        <SubText /> */}
        <Row>
          <ValidatedForm />
        </Row>
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default FormWrapper;
