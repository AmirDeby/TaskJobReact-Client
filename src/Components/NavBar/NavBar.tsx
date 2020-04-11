import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IState } from '../../Redux/reducer';
import { LogOutButton } from '../LogOutButton/LogOutButton';
import "../NavBar/NavBar.css";

export interface INavBarProps {
  isLogged: boolean,
}

export default class _NavBar extends React.Component<INavBarProps> {
  public render() {
    const { isLogged } = this.props
    return (
      <div className="nav-deco">
        <Navbar>
          <Navbar.Brand style={{ color: "black" }}>My JobLog</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as="span"><Link to='/home'>Home</Link></Nav.Link>
            {isLogged ? null : <Nav.Link as="span"><Link to='/register'>Register</Link></Nav.Link>}
            {isLogged ? null : <Nav.Link as="span"><Link to='/login'>Login</Link></Nav.Link>}
            {isLogged ? <Nav.Link as="span"><Link to='/addtask'>Add Task</Link></Nav.Link> : null}
            {isLogged ? <Nav.Link as="span"><Link to='/jobs'>Jobs</Link></Nav.Link> : null}
            <LogOutButton/>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    isLogged: state.isLogged,
  }
}

const mapDispatchToProps = {

}

export const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(_NavBar);
