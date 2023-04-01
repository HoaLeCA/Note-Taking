import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let schema = Yup.object().shape({
    email: Yup.string()
      .email('Email should be valid')
      .required('Error: Email is required'),
    password: Yup.string().required('Error: Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
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
      <section className='heading d-flex flex-column justify-content-center'>
        <h1 className=' d-flex align-items-center justify-content-center gap-3'>
          User Login
        </h1>
        <p className='d-flex align-items-center justify-content-center gap-3 fs-6'>
          Please fill user name and password to login.
        </p>
      </section>

      <section className='form content'>
        <form action='' onSubmit={formik.handleSubmit}>
          <div className='mt-3'>
            <input
              type='email'
              name='email'
              placeholder='Email'
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
            <input
              type='password'
              name='password'
              placeholder='Password'
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

          <div
            className='d-flex align-items-center justify-content-between py-2 '
            id='forgot_password'
          >
            <Link to='/forgot-password'>Forgot Password?</Link>
            <Link to='/register' className='button signup'>
              Sign Up
            </Link>
          </div>
          <div className='d-flex justify-content-center gap-15 align-items-center mt-5'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
