import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Register } from './pages/Register/Register';
import HomePage from './Components/HomePage/HomePage';
import Jobs from './pages/Jobs/Jobs';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';
import { Login } from './pages/Login/Login';
import AddTask from './pages/AddTask/AddTask';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/home">
         <HomePage />
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/addtask">
        <AddTask />
        </Route>
        <PrivateRoute path='/jobs'>
          <Jobs />
        </PrivateRoute>
        <Route path='/' exact>
          page not found
        </Route>
      </Switch>
    </div>
  );
}

export default App;
