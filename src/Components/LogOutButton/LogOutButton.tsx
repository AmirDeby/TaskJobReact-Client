import * as React from 'react';
import { connect } from 'react-redux';
import { logOutAction } from '../../Redux/actions';
import Button from 'react-bootstrap/Button';

export interface ILogOutButtonProps {
    logOut():void,
}

class _LogOutButton extends React.Component<ILogOutButtonProps> {
    public render() {
        const {logOut} = this.props
        return (
            <div style={{marginLeft:"870px",padding:"5px"}}>
                <Button onClick={logOut} variant="outline-warning" type="button" size="sm">LogOut</Button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    logOut: logOutAction,
}

export const LogOutButton = connect(
    undefined,
    mapDispatchToProps
)(_LogOutButton)