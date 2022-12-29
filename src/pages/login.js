import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo, RightArrowShort } from '../assets';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem('TOKEN_NAME', 'someValue');
    navigate('/');
  };
  return (
    <div className='cwr_homepage_wrapper'>
      <div className='cwr_header'>
        <img src={Logo.default} alt='codewave logo' className='header_logo' />
        <span>
          <a
            href='https://cwrdocs.netlify.app'
            target='_blank'
            rel='noreferrer noopener'
          >
            See Documentation
            <RightArrowShort.default />
          </a>
        </span>
      </div>
      <div className='cwr_body'>
        <div className='cwr_login'>
          <h1 data-testid='head'>Authenticate Yourself</h1>
          <button onClick={handleLogin}>Authenticate</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
