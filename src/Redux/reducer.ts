export interface IState {
    isLogged: boolean,

}

export interface IAction {
    type: string;
    payload: any;

}


const initialState: IState = {
    isLogged: false,
};

export enum ActionType {
    RegisterSuccess = "REGISTER_SUCCESS",
    LoginSuccess = "LOGIN_SUCCESS"
}

export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {

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