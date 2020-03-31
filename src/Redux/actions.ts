import { IAction, ActionType } from './reducer';
import { Dispatch } from 'react';
import axios from 'axios'


export const registerAction = (firstName: string, lastName: string, userName: string, password: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        const response = await axios.post('http://localhost:4000/register/', {
            firstName, lastName, userName, password
        });
        dispatch({
            type: ActionType.RegisterSuccess,
            payload: response.data
        })

    }
}

export const loginAction = (userName: string, password: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        const response = await axios.post('http://localhost:4000/login/', {
            userName, password
        });
        // console.log(response);

        dispatch({
            type: ActionType.LoginSuccess,
            payload: response.data
        })
    }
}