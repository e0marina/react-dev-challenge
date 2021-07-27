import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FormWrapper = () => {
  const formFieldArr = [
    {
      id: 'formBasicFirstName',
      label: 'First Name *',
      placeholder: 'First Name',
      name: 'firstname',
    },
    {
      id: 'formBasicLastName',
      label: 'Last Name *',
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
    textarea: '',
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
    textarea,
  } = eachEntry;

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  const [checked, setChecked] = useState(false);
  const handleCheckClick = () => setChecked(!checked);

  const handleSubmit = (e) => {
    console.log(eachEntry);
    localStorage.setItem('candidate', JSON.stringify(eachEntry));
    console.log(checked);
  };

  return (
    <>
      <Col></Col>
      <Col>
        <Form className='form-body'>
          {formFieldArr.map((field, idx) => (
            <Form.Group className='mb-3' controlId={field.id} key={idx}>
              <Form.Label className='form-label'>{field.label}</Form.Label>
              <Form.Control
                size='sm'
                type='text'
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleInputChange}
              />
            </Form.Group>
          ))}
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Additional Information</Form.Label>
            <Form.Control
              as='textarea'
              rows={5}
              name='textarea'
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check
              className='check'
              name='checkbox'
              type='checkbox'
              onClick={handleCheckClick}
              label='By checking this box, you acknowledge you are at least 18 years of age.'
            />
          </Form.Group>
        </Form>
        <Link to='/success'>
          <Button variant='primary' type='submit' onClick={handleSubmit}>
            Submit
          </Button>
        </Link>
        <Button variant='primary' href='/success'>
          Finished
        </Button>
        <Button variant='primary' href='/listall'>
          List All
        </Button>
      </Col>
      <Col></Col>
    </>
  );
};

export default FormWrapper;
