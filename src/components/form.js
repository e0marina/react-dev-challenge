import React from 'react';
import { Formik, Field, Form } from 'formik';
// import { Form, Button, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormWrapper = () => {
  return (
    <>
      {/* <Col></Col>
      <Col> */}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          state: '',
          party: '',
          twitter: '',
          facebook: '',
          instagram: '',
          imageurl: '',
          content: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.first = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 1000);
          // if (values.firstName && values.lastName) {
          //   console.log(values);
          // } else {
          //   console.log('required');
          // }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name*</label>
              <Field name='firstName' className='form-control' type='text' />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name*</label>
              <Field name='lastName' className='form-control' type='text' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <Field name='email' className='form-control' type='text' />
            </div>
            <div className='form-group'>
              <label htmlFor='state'>State</label>
              <Field name='state' className='form-control' type='text' />
            </div>
            <div className='form-group'>
              <label htmlFor='party'>Party</label>
              <Field name='party' className='form-control' type='text' />
            </div>
            <div className='form-group'>
              <label htmlFor='twitter'>Twitter</label>
              <Field name='twitter' className='form-control' type='text' />
            </div>
            <div className='form-group'>
              <label htmlFor='facebook'>Facebook</label>
              <Field name='facebook' className='form-control' type='text' />
            </div>
            <div className='form-group'>
              <label htmlFor='instagram'>Instagram</label>
              <Field name='instagram' className='form-control' type='text' />
            </div>
            <div className='form-group'>
              <label htmlFor='imageurl'>Image URL</label>
              <Field name='imageurl' className='form-control' type='text' />
            </div>
            <div className='form-group'>
              <label htmlFor='content'>Additional Information</label>
              <Field name='content' className='form-control' as='textarea' />
            </div>
            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-primary'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Please wait...' : 'Submit'}
              </button>
            </div>
            {/* < div className='btn-group'>
                <Link to='/success'>
                  <Button
                    className='btn'
                    variant='success'
                    type='submit'
                    onClick={handleSubmit}
                  >
                    SUBMIT
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
              </div> */}
          </Form>
        )}
      </Formik>
      {/* </Col>
      <Col></Col> */}
    </>
  );
};

export default FormWrapper;
