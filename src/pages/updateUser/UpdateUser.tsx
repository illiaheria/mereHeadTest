import React, { useState } from 'react';
import { UserForm } from '../userForm';
import { updateUserRequest } from './updateUserRequest';
import { useDispatch } from 'react-redux';
export const UpdateUser: React.FunctionComponent = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [desc, setDesc] = useState('');
  const [idUser, setIdUser] = useState(0);

  const dispatch = useDispatch();
  const handleIdChange = (e: any) => {
    setIdUser(e.target.value);
  };
  const handleNameInputChange = (event: any) => {
    setName(event.target.value);
  };
  const handleSurnameInputChange = (event: any) => {
    setSurname(event.target.value);
  };
  const handleDescInputChange = (event: any) => {
    setDesc(event.target.value);
  };
  const handleChanges = (e: any) => {
    dispatch(
      updateUserRequest(JSON.stringify({ name, surname, desc }), idUser),
    );
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleChanges}>
      <label>
        Enter number of user who you want to change
        <input
          name="surname"
          type="text"
          value={idUser}
          onChange={handleIdChange}
        />
      </label>
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
        <input type="submit" value="Update user" />
      </div>
    </form>
  );
};
