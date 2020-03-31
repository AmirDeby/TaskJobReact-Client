import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export interface INavBarProps {
}

export default class NavBar extends React.Component<INavBarProps> {
  public render() {
    return (
      <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>My JobLog</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as="span"><Link to='/home'>Home</Link></Nav.Link>
                    <Nav.Link as="span"><Link to='/register'>Register</Link></Nav.Link>
                    <Nav.Link as="span"><Link to='/login'>Login</Link></Nav.Link>
                    <Nav.Link as="span"><Link to='/addtask'>Add Task</Link></Nav.Link>
                </Nav>
            </Navbar>
      </div>
    );
  }
}
