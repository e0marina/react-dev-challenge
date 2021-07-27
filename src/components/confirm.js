import React, { useState, useEffect } from 'react';
import { Table, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EditButton from './editBtn';
import Header from './header';
import SubHeader from './subHeader';
import Footer from './footer';

function Confirm() {
  const [input, setInput] = useState({});

  useEffect(() => {
    const localInput = JSON.parse(localStorage.getItem('candidate'));
    setInput(localInput);
  }, []);

  return (
    <>
      <Container fluid className='container'>
        <Header />
        <SubHeader />
        <Row>
          <Col></Col>
          <span className='confirm-span'>CONFIRMATION</span>
          <Col className='table-style'>
            <Table borderless size='sm'>
              <tbody>
                <tr>
                  <td>First Name:</td>
                  <td>{input.firstname}</td>
                </tr>
                <tr>
                  <td>Last Name:</td>
                  <td>{input.lastname}</td>
                </tr>
                <tr>
                  <td>State:</td>
                  <td>{input.state}</td>
                </tr>
                <tr>
                  <td>Party:</td>
                  <td>{input.party}</td>
                </tr>
                <tr>
                  <td>Twitter:</td>
                  <td>{input.twitter}</td>
                </tr>
                <tr>
                  <td>Facebook:</td>
                  <td>{input.facebook}</td>
                </tr>
                <tr>
                  <td>Instagram:</td>
                  <td>{input.instagram}</td>
                </tr>
                <tr>
                  <td>Image URL:</td>
                  <td>{input.imageurl}</td>
                </tr>
                <tr>
                  <td>Additional Information:</td>
                  <td>{input.textarea}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col></Col>
        </Row>
        <Row className='confirm-btn-group'>
          <Col lg='3'></Col>
          <Col lg='2'>
            <Link to='/confirm'>
              <Button className='btn' variant='success' type='submit'>
                CONFIRM
              </Button>
            </Link>
          </Col>
          <Col lg='2'>
            <EditButton />
          </Col>
          <Col lg='5'></Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default Confirm;
