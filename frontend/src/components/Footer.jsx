import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='footer mt-5'>
        <div className='container-xxl'>
          <div className='row '>
            <div className='col-6 align-items-center justify-content-between d-flex flex-wrap'>
              <div className='layer-1-logo d-flex'>
                <Link to='/'>
                  <p className='text-dark'>Hoa Le CA</p>
                </Link>
              </div>
            </div>
            <div className='col-6 align-items-end  justify-content-end d-flex flex-column'>
              <div className='layer-2-social_media d-flex align-items-center gap-3 '>
                <Link to=''>
                  <img
                    width={20}
                    src='/images/logo-instagram.svg'
                    alt='instagram'
                    className='social'
                  />
                </Link>

                <Link to=''>
                  <img
                    width={20}
                    src='/images/logo-twitter.svg'
                    alt='twitter'
                    className='social'
                  />
                </Link>

                <Link to=''>
                  <img
                    width={20}
                    src='/images/logo-whatsapp.svg'
                    alt='whatsapp'
                    className='social'
                  />
                </Link>
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
