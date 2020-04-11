import * as React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { IState } from '../../Redux/reducer';
import { loginAction } from '../../Redux/actions';
import { Redirect } from 'react-router';

export interface ILoginProps {
    login(userName: string, password: string): void,
    isLogged:boolean,
}

interface ILoginState {
    userName: string,
    password: string
}

export default class _Login extends React.Component<ILoginProps, ILoginState> {
    state: ILoginState = {
        userName: "",
        password: "",
    }
    public render() {
        const {isLogged} = this.props
        const isFilled = this.canBeLoggedIn();
        if (isLogged) {
          return  <Redirect to="/jobs" />
        }
        return (
            <div style={{ margin: "auto", width: "30%", padding: "27px" }}>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control onChange={this.handlerLoginChange} type="text" name="userName" placeholder="Enter you User Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handlerLoginChange} type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button disabled={!isFilled} variant="light" type="submit">
                        Submit
                     </Button>
                </Form>
            </div>
        );
    }
    onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { userName, password } = this.state;
        const { login } = this.props

        login(userName, password)
    }
    handlerLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as any);
    }
    canBeLoggedIn = () => {
        const { password, userName } = this.state;
        return (
            userName.length > 0 &&
            password.length > 0
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        isLogged: state.isLogged
    }
}

const mapDispatchToProps = {
    login: loginAction,
}
export const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Login)