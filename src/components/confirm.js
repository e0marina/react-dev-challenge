import React, { useState, useEffect } from 'react';
import { Table, Col, Container, Row } from 'react-bootstrap';
import EditButton from './editBtn';

function Confirm() {
  const [input, setInput] = useState({});

  useEffect(() => {
    //console.log(JSON.parse(localStorage.getItem('candidate')));
    const localInput = JSON.parse(localStorage.getItem('candidate'));
    setInput(localInput);
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
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
            <EditButton />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Confirm;
