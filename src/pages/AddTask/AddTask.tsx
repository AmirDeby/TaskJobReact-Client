import * as React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export interface IAddTaskProps {
}

interface IAddTaskState {
    date: number,
    description: string
}

export default class AddTask extends React.Component<IAddTaskProps, IAddTaskState> {

    state: IAddTaskState = {
        date: null,
        description: ""
    }
    public render() {
        return (
            <div style={{ margin: "auto", width: "40%", padding: "27px" }}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Date</Form.Label>
                        <Form.Control onChange={this.onChangeHandler} name="date" type="date" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control onChange={this.onChangeHandler} name="description" as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save Task
                </Button>
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
}
