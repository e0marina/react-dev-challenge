import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const FormWrapper = () => {
  const formFieldArr = [
    {
      id: 'formBasicFirstName',
      label: 'First Name',
      placeholder: 'First Name',
      name: 'firstname',
    },
    {
      id: 'formBasicLastName',
      label: 'Last Name',
      placeholder: 'Last Name',
      name: 'lastname',
    },
    {
      id: 'formBasicEmail',
      label: 'Email',
      placeholder: 'Email',
      name: 'email',
    },
    {
      id: 'formBasicState',
      label: 'State',
      placeholder: 'State',
      name: 'state',
    },
    {
      id: 'formBasicParty',
      label: 'Party',
      placeholder: 'Party',
      name: 'party',
    },
    {
      id: 'formBasicTwitter',
      label: 'Twitter',
      placeholder: 'Twitter',
      name: 'twitter',
    },
    {
      id: 'formBasicFacebook',
      label: 'Facebook',
      placeholder: 'Facebook',
      name: 'facebook',
    },
    {
      id: 'formBasicInstagram',
      label: 'Instagram',
      placeholder: 'Instagram',
      name: 'instagram',
    },
    {
      id: 'formBasicImageUrl',
      label: 'Image Url',
      placeholder: 'Image Url',
      name: 'imageurl',
    },
  ];

  const initialInputState = {
    firstname: '',
    lastname: '',
    email: '',
    state: '',
    party: '',
    twitter: '',
    facebook: '',
    instagram: '',
    imageurl: '',
  };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const {
    firstname,
    lastname,
    email,
    state,
    party,
    twitter,
    facebook,
    instagram,
    imageurl,
  } = eachEntry;

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(eachEntry);
  };

  return (
    <>
      <Col></Col>
      <Col>
        <Form>
          {formFieldArr.map((field, idx) => (
            <Form.Group className='mb-3' controlId={field.id} key={idx}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                size='sm'
                type='text'
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleInputChange}
              />
            </Form.Group>
          ))}
        </Form>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={handleSubmit}>
          Submit
        </Button>
      </Col>
      <Col></Col>
    </>
  );
};

export default FormWrapper;
