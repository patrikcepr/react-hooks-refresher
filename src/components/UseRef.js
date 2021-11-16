import React, { useRef, useEffect, useState } from 'react';

import { Button, Input, Typography } from '@mui/material';

const UseRef = () => {
  const [nameInput, setNameInput] = useState('Name');
  const [nameOutput, setNameOutput] = useState(nameInput);
  const inputRef = useRef();

  const clickHandler = () => {
    inputRef.current.focus();
  };

  const nameChangeHandler = (e) => {
    const name = inputRef.current.value;
    setNameInput(name);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNameOutput(nameInput);
      console.log('Effect used');
    }, 1000);
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
        onChange={nameChangeHandler}
      />
      <Button onClick={clickHandler}>Change name</Button>
    </div>
  );
};

export default UseRef;
