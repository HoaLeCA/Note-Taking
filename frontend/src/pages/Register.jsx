import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../components/CustomInput';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let schema = Yup.object().shape({
    name: Yup.string().required('Error: name is required'),
    email: Yup.string()
      .email('Email should be valid')
      .required('Error: Email is required'),
    password: Yup.string().required('Error: Password is required'),
    password2: Yup.string()
      .required('Error: Confirm Password is required')
      .oneOf(
        [Yup.ref('password'), null],
        'Confirm password Must match "password" field value'
      ),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password2: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p className='fs-6'>Please create an account</p>
      </section>

      <section className='form content'>
        <form onSubmit={formik.handleSubmit}>
          <div className='mt-3'>
            <CustomInput
              type='text'
              name='name'
              label='Name'
              className='form-control'
              id='name'
              onChange={formik.handleChange('name')}
              onBlur={formik.handleBlur('name')}
              value={formik.values.name}
            />
          </div>
          <div className='error'>
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className='mt-3'>
            <CustomInput
              type='email'
              name='email'
              label='Email'
              className='form-control'
              id='email'
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}
            />
          </div>

          <div className='error'>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className='mt-3'>
            <CustomInput
              type='password'
              name='password'
              label='Password'
              className='form-control'
              id='password'
              onChange={formik.handleChange('password')}
              value={formik.values.password}
            />
          </div>
          <div className='error'>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className='mt-3'>
            <CustomInput
              type='password'
              name='password2'
              label='Confirm Password'
              className='form-control'
              id='password1'
              onChange={formik.handleChange('password2')}
              value={formik.values.password2}
            />
          </div>
          <div className='error'>
            {formik.touched.password2 && formik.errors.password2 ? (
              <div>{formik.errors.password2}</div>
            ) : null}
          </div>
          <div className='form-group mt-5'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
