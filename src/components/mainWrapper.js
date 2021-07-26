import React from 'react';
import FormWrapper from './form';
import { Container, Row } from 'react-bootstrap';

const MainWrapper = () => {
  return (
    <>
      <Container>
        <Row>
          <FormWrapper />
        </Row>
      </Container>
    </>
  );
};

export default MainWrapper;
