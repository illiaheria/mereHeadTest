import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Main } from '../pages/main';
import { GetUsers } from '../pages/getUsers';
import { Navbar } from '../components';
import { UserForm } from '../pages/userForm';
import { UpdateUser } from '../pages/updateUser';
import { DeleteUser } from '../pages/deleteUser/DeleteUser';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/get-users" component={GetUsers} />
        <Route path="/create-user" component={UserForm} />
        <Route path="/update-user" component={UpdateUser} />
        <Route path="/delete-user" component={DeleteUser} />
        <Redirect from="*" to="/main" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
