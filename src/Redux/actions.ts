import { IAction, ActionType } from './reducer';
import { Dispatch } from 'react';
import axios from 'axios'

const getToken = () => {
    return localStorage.getItem('token');
}

export const deleteJobTaskAction = (id: number) => {
    return async (dispatch: Dispatch<IAction>) => {
        const token = getToken();
        await axios.delete(`http://localhost:4000/job/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        dispatch({
            type: ActionType.DeleteJobTask,
            payload: { id }
        })
    }
}

export const getTaskJobAction = () => {
    return async (dispatch: Dispatch<IAction>) => {
        const token = getToken();
        const response = await axios.get('http://localhost:4000/job/', {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log(response.data);
        dispatch({
            type: ActionType.GetJobTask,
            payload: response.data
        })
    }
}

export const registerAction = (firstName: string, lastName: string, userName: string, password: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        const response = await axios.post('http://localhost:4000/register', {
            firstName, lastName, userName, password
        });
        const token = response.data
        localStorage.setItem('token', token);

        dispatch({
            type: ActionType.RegisterSuccess,
            payload: response.data
        })

    }
}

export const loginAction = (userName: string, password: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        const response = await axios.post('http://localhost:4000/login', {
            userName, password
        });

        const token = response.data;
        localStorage.setItem('token', token);

        dispatch({
            type: ActionType.LoginSuccess,
            payload: response.data
        })
    }
}

export const addTaskAction = (date: string, description: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        const token = getToken()
        const response = await axios.post(`http://localhost:4000/job`, {
            date, description
        }, { headers: { Authorization: `Bearer ${token}` } })

        dispatch({
            type: ActionType.AddJobTask,
            payload: response.data
        })

    }
}