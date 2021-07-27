import React from 'react';
import { Row, Col } from 'react-bootstrap';

function SubText() {
  return (
    <>
      <Row>
        <Col className='sub-header'>
          <div className='sub-text'>
            <h5>
              The https://blackbirds.io team invites you to help crowdsource
              <br />
              information about your local elected officials. We need you as
              boots on <br /> the ground to let us know who is doing what in
              your community.
            </h5>
          </div>
          <h6> Tell us about your local official </h6>
        </Col>
      </Row>
    </>
  );
}

export default SubText;
