import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUserRequest } from './deleteUserRequest';
export const DeleteUser: React.FunctionComponent = () => {
  const [idUser, setIdUser] = useState(0);
  const dispatch = useDispatch();
  const handleIdChange = (e: any) => {
    setIdUser(e.target.value);
  };

  const deleteRequest = (e: any) => {
    dispatch(deleteUserRequest(idUser));
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={deleteRequest}>
      <label>
        Enter number of user who you want to delete
        <input
          name="surname"
          type="text"
          value={idUser}
          onChange={handleIdChange}
        />
      </label>
      <div className="form__button">
        <input type="submit" value="Delete user" />
      </div>
    </form>
  );
};
