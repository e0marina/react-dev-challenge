import React from 'react';
import { Formik, Field, Form } from 'formik';
//import { Link } from 'react-router-dom';
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
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
            // if (values.firstName && values.lastName) {
            //   console.log(values);
            // } else {
            //   console.log('required');
            // }
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
                <Field name='email' className='form-control' type='text' />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='state'>
                  State
                </label>
                <Field name='state' className='form-control' type='text' />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='party'>
                  Party
                </label>
                <Field name='party' className='form-control' type='text' />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='twitter'>
                  Twitter
                </label>
                <Field name='twitter' className='form-control' type='text' />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='facebook'>
                  Facebook
                </label>
                <Field name='facebook' className='form-control' type='text' />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='instagram'>
                  Instagram
                </label>
                <Field name='instagram' className='form-control' type='text' />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='imageurl'>
                  Image URL
                </label>
                <Field name='imageurl' className='form-control' type='text' />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='content'>
                  Additional Information
                </label>
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
      </div>
      <div className='col-3'></div>
    </>
  );
};

export default FormWrapper;
