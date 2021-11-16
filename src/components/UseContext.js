import React, { useContext, useRef } from 'react';
import { Input } from '@mui/material';
import Output from './Output/Output';
import UserContext from '../store/user-context';

const UseContext = () => {
  const { setUser } = useContext(UserContext);

  const inputRef = useRef();

  return (
    <div>
      <Input
        style={{ marginTop: 30, color: 'white' }}
        ref={inputRef}
        type='text'
        name='name'
        id='name'
        placeholder='Name'
        onChange={(event) => {
          setUser(event.target.value);
        }}
      />
      <Output />
    </div>
  );
};

export default UseContext;
