import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../Redux/reducer';
import { Redirect, Route, RouteProps } from 'react-router';

export interface IPrivateRouteProps extends RouteProps {
    isLogged?: boolean,
}

export default class _PrivateRoute extends React.Component<IPrivateRouteProps> {
    public render() {
        const { isLogged, ...rest } = this.props;
        // console.log(rest);
        if (!isLogged) {
            return <Redirect to='/register' />
        }
        return <Route {...rest} />
    }
}

const mapStateToProps = (state: IState) => {
    return {
        isLogged: state.isLogged,
    }
}


export const PrivateRoute = connect(
    mapStateToProps
)(_PrivateRoute)
