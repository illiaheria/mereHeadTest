import React, { useState } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { createUserRequest } from './createUserRequest';

export const UserForm: React.FunctionComponent = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();

  const handleNameInputChange = (event: any) => {
    setName(event.target.value);
  };
  const handleSurnameInputChange = (event: any) => {
    setSurname(event.target.value);
  };
  const handleDescInputChange = (event: any) => {
    setDesc(event.target.value);
  };

  const createUser = (e: any) => {
    dispatch(createUserRequest(JSON.stringify({ name, surname, desc })));
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={createUser}>
      <label>
        Name of user:
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleNameInputChange}
        />
      </label>
      <br />
      <label>
        Surname of user:
        <input
          name="surname"
          type="text"
          value={surname}
          onChange={handleSurnameInputChange}
        />
      </label>
      <label>
        Surname of user:
        <input
          name="desc"
          type="text"
          value={desc}
          onChange={handleDescInputChange}
        />
      </label>
      <div className="form__button">
        <input type="submit" value={'Create user'} />
      </div>
    </form>
  );
};
