import React, { useRef, useEffect, useState } from 'react';

import { Button, Input, Typography } from '@mui/material';

const UseRef = () => {
  const [nameInput, setNameInput] = useState('Name');
  const [nameOutput, setNameOutput] = useState(nameInput);
  const inputRef = useRef();

  let name;

  const clickHandler = () => {
    inputRef.current.focus();
    setNameInput(name);
  };

  const nameChangeHandler = (e) => {
    name = inputRef.current.value;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNameOutput(nameInput);
      console.log('Effect used');
    }, 100);
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
