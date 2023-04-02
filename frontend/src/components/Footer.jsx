import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className='footer mt-5'>
        <div className='container-xxl'>
          <div className='row '>
            <div className='col-6 align-items-center justify-content-between d-flex flex-wrap'>
              <div className='layer-1-logo d-flex'>
                <Link to='/'>
                  <p className='text-dark fw-bold'>Hoa Le CA</p>
                </Link>
              </div>
            </div>
            <div className='col-6 align-items-end  justify-content-end d-flex flex-column'>
              <div className='layer-2-social_media d-flex align-items-center gap-3 '>
                <a
                  href='https://www.linkedin.com/in/levanhoa/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <AiFillLinkedin className='fs-3' />
                </a>

                <a
                  href='https://github.com/HoaLeCA'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <AiFillGithub className='fs-3' />
                </a>

                <a
                  href='https://github.com/HoaLeCA'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <AiFillTwitterCircle className='fs-3' />
                </a>
              </div>
              <div className='copyright'>
                <p className=' text-dark text-end mt-3 mb-3'>
                  Hoa Le CA. © All rights reserved Copyright 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
