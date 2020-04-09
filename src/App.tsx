import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import { AddTask } from './pages/AddTask/AddTask';
import {Jobs} from './pages/Jobs/Jobs';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/addtask">
          <AddTask />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        {/* <PrivateRoute path='/jobs'>
          <Jobs />
        </PrivateRoute> */}
        <Route path='/' exact>
          page not found
        </Route>
      </Switch>
    </div>
  );
}

export default App;
