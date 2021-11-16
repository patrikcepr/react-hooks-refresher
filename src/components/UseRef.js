import React, { useRef, useEffect, useState } from 'react';

import { Button, Input, Typography } from '@mui/material';

const UseRef = () => {
  const [nameInput, setNameInput] = useState('Name');
  const [nameOutput, setNameOutput] = useState('Name');
  const inputRef = useRef();

  const clickHandler = () => {
    inputRef.current.focus();
    setNameInput(inputRef.current.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNameOutput(nameInput);
      console.log('Effect used');
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [nameInput]);

  return (
    <div>
      <Typography variant='h4'>{nameOutput}</Typography>
      <Input
        inputRef={inputRef}
        type='text'
        name='name'
        id='name'
        placeholder='Name'
      />
      <Button onClick={clickHandler}>Change name</Button>
    </div>
  );
};

export default UseRef;
