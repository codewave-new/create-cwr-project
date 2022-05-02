import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Logo, RightArrowShort } from '../assets';
import Licence from '../components/Home/Licence';
import { appInit } from '../state';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appInit(true));
  }, []);

  return (
    <div className='cwr_homepage_wrapper'>
      <div className='cwr_header'>
        <img src={Logo.default} alt='' className='header_logo' />
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
        <div className='body_heading'>
          <h1>
            The
            <span> React Template</span>
          </h1>
          <h2>For Codewave</h2>
        </div>
        <div className='body_text'>
          <p>
            This template gives you the best developer experience with all the
            features you need to start development quicker:
            <b> Folder Structure,</b>
            <b> Routing,</b>
            <b> Protected Route,</b>
            <b> Redux,</b>
            <b> Maintain on Page Reload,</b>
            <b> Styles (CSS, SCSS). </b>
            No config needed but if you you want to modify then the limit is
            upto your imagination
          </p>
        </div>
        <Licence />
      </div>
    </div>
  );
};

export default Home;
