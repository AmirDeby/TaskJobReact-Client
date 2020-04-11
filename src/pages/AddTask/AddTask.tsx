import * as React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { IState } from '../../Redux/reducer';
import { addTaskAction } from '../../Redux/actions';
import { Redirect } from 'react-router';
import '../AddTask/AddTask.css';
import Alert from 'react-bootstrap/Alert';

export interface IAddTaskProps {
    addTask(date: string, description: string): void,
    isLogged: boolean,
    addTaskMessageSuccess: boolean,
}

interface IAddTaskState {
    date: string,
    description: string
}

export default class _AddTask extends React.Component<IAddTaskProps, IAddTaskState> {

    initialState: IAddTaskState = {
        date: "",
        description: ""
    }

    state = this.initialState

    public render() {
        const { date, description } = this.state;
        const { isLogged, addTaskMessageSuccess } = this.props;
        if (!isLogged) {
            return <Redirect to="/login" />
        }
        return (
            <div style={{ margin: "auto", width: "40%", padding: "27px" }}>
                <Form onSubmit={this.onSubmitTask}>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control onChange={this.onChangeHandler} value={date} name="date" type="date" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control onChange={this.onChangeHandler} value={description} name="description" as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Save Task
                    </Button>
                    {addTaskMessageSuccess ?
                        <div className="txt-msg">
                            <Alert variant="warning">
                                Task successfully added
                            </Alert>
                        </div>
                        :
                        null}
                </Form>
            </div>
        );
    }

    onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        // console.log(value, name);
        this.setState({ [name]: value } as any)
        // console.log(this.state);
    }

    onSubmitTask = async (e: React.FormEvent) => {
        e.preventDefault();

        const { date, description } = this.state;
        const { addTask } = this.props;

        const response = await addTask(date, description);

        if (response !== null) {
            this.setState(
                this.initialState
            )
        }
    }
}

const mapStateToProps = (state: IState) => {
    return {
        isLogged: state.isLogged,
        addTaskMessageSuccess: state.addTaskMessageSuccess
    }
}

const mapDispatchToProps = {
    addTask: addTaskAction,
}

export const AddTask = connect(
    mapStateToProps,
    mapDispatchToProps
)(_AddTask)