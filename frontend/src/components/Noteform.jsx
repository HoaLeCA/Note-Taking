import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../features/notes/noteSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../components/CustomInput';

function Goalform() {
  const dispatch = useDispatch();
  let schema = Yup.object().shape({
    text: Yup.string().required('Error: Content is required'),
  });
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createNote(values));
    },
  });

  return (
    <section className='form'>
      <form onSubmit={formik.handleSubmit}>
        <div className='error'>
          {formik.touched.text && formik.errors.text ? (
            <div>{formik.errors.text}</div>
          ) : null}
        </div>
        <div className='form-group'>
          <CustomInput
            type='text'
            name='text'
            label='Note Content'
            className='form-control'
            id='text'
            onChange={formik.handleChange('text')}
            onBlur={formik.handleBlur('text')}
            value={formik.values.text}
          />
        </div>

        <div className='form-group mt-3'>
          <button className='btn btn-block' type='submit'>
            Create Note
          </button>
        </div>
      </form>
    </section>
  );
}

export default Goalform;
