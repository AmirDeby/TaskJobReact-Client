import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { registerAction } from '../../Redux/actions';
import { IState } from '../../Redux/reducer';
import '../Register/Register.css';

export interface IRegisterProps {
    register(firstName: string, lastName: string, userName: string, password: string): void,
}

interface IRegisterState {
    firstName: string,
    lastName: string,
    userName: string,
    password: string
}

export default class _Register extends React.Component<IRegisterProps, IRegisterState> {
    state: IRegisterState = {
        firstName: "",
        lastName: "",
        password: "",
        userName: ""
    }

    public render() {
        const isFilled = this.canBeRegister();
        return (
            <div className="main-div">
                <Form onSubmit={this.onRegisterSubmit}>
                    <Form.Group>
                        <Form.Label><u>First Name :</u></Form.Label>
                        <Form.Control onChange={this.handlerOnChange} type="text" name="firstName" placeholder="Enter your First Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><u>Last Name :</u></Form.Label>
                        <Form.Control onChange={this.handlerOnChange} type="text" name="lastName" placeholder="Enter your Last Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><u>User Name :</u></Form.Label>
                        <Form.Control onChange={this.handlerOnChange} type="text" name="userName" placeholder="Enter Unique User Name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label><u>Password :</u></Form.Label>
                        <Form.Control onChange={this.handlerOnChange} type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button disabled={!isFilled} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }

    handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        this.setState({ [name]: value } as any);
      
    }

    canBeRegister = () => {
        const { firstName, lastName, password, userName } = this.state;
        return (
            firstName.length > 0 &&
            lastName.length > 0 &&
            password.length > 0 &&
            userName.length > 0
        )
    }

    onRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { firstName, lastName, userName, password } = this.state;
        const { register } = this.props;



        register(firstName, lastName, userName, password);

    }
}

const mapStateToProps = (state: IState) => {
    return {
        
    }
}

const mapDispatchToProps = {
    register: registerAction,
}

export const Register = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Register)
