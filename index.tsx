import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import useUpdate from './useUpdate';

const App = () => {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count => count + 1);
  };

  useUpdate(() => alert(count), [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={counter}>Increment the value</button>
    </>
  );
};

render(<App />, document.getElementById('root'));
