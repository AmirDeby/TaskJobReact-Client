import { ITaskJob } from "../taskJobModel";

export interface IState {
    isLogged: boolean,
    taskJobs: ITaskJob[],
    addTaskMessageSuccess: boolean
}

export interface IAction {
    type: string;
    payload: any;
}


const initialState: IState = {
    isLogged: false,
    taskJobs: [],
    addTaskMessageSuccess: false,
};

export enum ActionType {
    RegisterSuccess = "REGISTER_SUCCESS",
    LoginSuccess = "LOGIN_SUCCESS",
    AddJobTask = "ADD_JOB_TASK",
    GetJobTask = "GET_JOB_TASK",
    DeleteJobTask = "DELETE_JOB_TASK",
}

export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {

        case ActionType.DeleteJobTask: {
            const { id } = action.payload;
            const taskJobs = state.taskJobs.concat();
            const taskJobindex = taskJobs.findIndex(taskJob => taskJob.id === id);
            taskJobs.splice(taskJobindex, 1);
            // console.log(taskJobindex);
            // console.log(id);
            // console.log(taskJobs);
            return {
                ...state,
                taskJobs
            }
        }

        case ActionType.GetJobTask: {
            return {
                ...state,
                taskJobs: action.payload
            }
        }
        case ActionType.AddJobTask: {
            return {
                ...state,
                addTaskMessageSuccess: true,
            }
        }
        case ActionType.RegisterSuccess: {
            return {
                ...state,
                isLogged: true,
            }
        }
        case ActionType.LoginSuccess: {
            return {
                ...state,
                isLogged: true
            }
        }

        default: {
            return state;
        }
    }
}