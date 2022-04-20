import React, { useState } from 'react';

const Home = () => {
  const [first, setfirst] = useState(0);
  const a = 20;
  const handleClick = () => {
    console.log('date');
    setfirst((prevState) => prevState + 1);
  };
  return (
    <div>
      <h1>
        {first}
        {a}
      </h1>
      <button type='button' onClick={handleClick}>
        add
      </button>
    </div>
  );
};

export default Home;
