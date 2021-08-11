import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormWrapper = () => {
  const validateForm = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Last Name is required';
    }

    return errors;
  };
  return (
    <>
      <div className='col-3'></div>
      <div className='col-6 form-body'>
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
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              localStorage.setItem('candidate', JSON.stringify(values));
              window.location.href = '/success';
              window.scrollTo(0, 0);
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
          }}
          validate={validateForm}
        >
          {(formik, isSubmitting) => (
            <Form>
              <div className='form-group'>
                <label className='form-label' htmlFor='firstName'>
                  First Name*
                </label>
                <Field
                  placeholder='First Name'
                  name='firstName'
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  type='text'
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className='invalid-feedback'>
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='lastName'>
                  Last Name*
                </label>
                <Field
                  name='lastName'
                  placeholder='Last Name'
                  className={
                    formik.touched.lastName && formik.errors.lastName
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  type='text'
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className='invalid-feedback'>
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='email'>
                  Email
                </label>
                <Field
                  name='email'
                  placeholder='Email'
                  className='form-control'
                  type='text'
                />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='state'>
                  State
                </label>
                <Field
                  name='state'
                  placeholder='State'
                  className='form-control'
                  type='text'
                />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='party'>
                  Party
                </label>
                <Field
                  name='party'
                  placeholder='State'
                  className='form-control'
                  type='text'
                />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='twitter'>
                  Twitter
                </label>
                <Field
                  name='twitter'
                  placeholder='Twitter'
                  className='form-control'
                  type='text'
                />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='facebook'>
                  Facebook
                </label>
                <Field
                  name='facebook'
                  placeholder='Facebook'
                  className='form-control'
                  type='text'
                />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='instagram'>
                  Instagram
                </label>
                <Field
                  name='instagram'
                  placeholder='Instagram'
                  className='form-control'
                  type='text'
                />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='imageurl'>
                  Image URL
                </label>
                <Field
                  name='imageurl'
                  placeholder='Image URL'
                  className='form-control'
                  type='text'
                />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='content'>
                  Additional Information
                </label>
                <Field name='content' className='form-control' as='textarea' />
              </div>
              <div className='btn-group'>
                <div className='form-group'>
                  <button
                    type='submit'
                    className='btn btn-success'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Please wait...' : 'SUBMIT'}
                  </button>
                </div>
                <Link to='/finish'>
                  <button className='btn' id='white-btn'>
                    FINISHED
                  </button>
                </Link>
                <button className='btn' id='orange-btn'>
                  LIST ALL
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className='col-3'></div>
    </>
  );
};

export default FormWrapper;
