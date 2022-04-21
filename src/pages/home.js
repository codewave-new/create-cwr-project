import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appInit } from '../state';

const Home = () => {
  const dispatch = useDispatch();
  const appStarted = useSelector((state) => state.app.loaded);

  useEffect(() => {
    dispatch(appInit(true));
  }, []);
  const [first, setfirst] = useState(0);
  const handleClick = () => {
    setfirst((prevState) => prevState + 1);
  };
  return (
    <div>
      <h1>
        {first}
        App loaded:
        {appStarted.toString()}
      </h1>
      <button type='button' onClick={handleClick}>
        add
      </button>
    </div>
  );
};

export default Home;
