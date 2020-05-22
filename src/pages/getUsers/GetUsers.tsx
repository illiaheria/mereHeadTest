import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersRequest } from './getUsersRequests';
import { RootState } from '../../store/store';
import { IUsersReducer, IUser } from './getUsers.reducer';
import { User } from '../../components';
import ReactPaginate from 'react-paginate';

interface IPaginationOptions {
  selected: number;
}

export const GetUsers: React.FunctionComponent = (props: any) => {
  const users: IUsersReducer = useSelector((state: RootState) => state.users);
  const [paginationUsers, setPaginationUsers] = useState(
    users.users.slice(0 * 5, 5 * 0 + 5),
  );

  const dispatch = useDispatch();

  const paginationLength =
    users.users.length % 5 === 0
      ? users.users.length / 5
      : Math.floor(users.users.length / 5 + 1);

  const onPageChange = (data: IPaginationOptions) => {
    setPaginationUsers(
      users.users.slice(data.selected * 5, 5 * data.selected + 5),
    );
  };
  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  useEffect(() => {
    setPaginationUsers(users.users.slice(0 * 5, 5 * 0 + 5));
  }, [users]);

  return (
    <div className="list">
      {paginationUsers.map((item: IUser) => (
        <User {...item} />
      ))}
      <div>
        {users.error}
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={paginationLength}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={onPageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};
