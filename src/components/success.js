import React, { useState, useEffect } from 'react';

function Success() {
  const [input, setInput] = useState({});

  useEffect(() => {
    //console.log(JSON.parse(localStorage.getItem('candidate')));
    const localInput = JSON.parse(localStorage.getItem('candidate'));
    setInput(localInput);
  }, []);

  return (
    <>
      <h1>{input.email}</h1>
    </>
  );
}

export default Success;
