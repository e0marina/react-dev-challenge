import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <Formik
      initialValues={{ first: '', last: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.first) {
          errors.first = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='first'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.first}
          />
          {errors.first && touched.first && errors.first}
          <input
            type='text'
            name='last'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.last}
          />
          {errors.last && touched.last && errors.last}
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
