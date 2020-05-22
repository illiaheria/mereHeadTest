import React from 'react';
import { IUser } from '../../pages/getUsers/getUsers.reducer';

export const User: React.FunctionComponent<IUser> = ({
  id,
  name,
  surname,
  desc,
}) => {
  return (
    <div className="d-flex">
      <li key={id}>
        <div className="">
          name: <span>{name}</span>
        </div>
        <div className="">
          surname: <span>{surname}</span>
        </div>
        <div className="">
          Descripnion: <span>{desc}</span>
        </div>
      </li>
    </div>
  );
};
