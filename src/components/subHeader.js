import React from 'react';
import { Row, Col } from 'react-bootstrap';

function SubHeader() {
  return (
    <>
      <Row>
        <Col className='sub-header'>
          <h3 className='sub-header-text'>
            Reimagining Political Connectivity
          </h3>
          <h5 className='sub-text'>
            The https://blackbirds.io team invites you to help crowdsource
            <br />
            information about your local elected officials. We need you as boots
            on <br /> the ground to let us know who is doing what in your
            community.
          </h5>
          <h6> Tell us about your local official </h6>
        </Col>
      </Row>
    </>
  );
}

export default SubHeader;
