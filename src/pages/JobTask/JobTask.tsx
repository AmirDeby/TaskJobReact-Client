import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { IState } from '../../Redux/reducer';
import { deleteJobTaskAction } from '../../Redux/actions';

export interface IJobTaskProps {
    id?: number,
    date?: string,
    description?: string,
    completed?: boolean,
    deleteJobTask?(id: number): void,
}

export default class _JobTask extends React.Component<IJobTaskProps> {
    public render() {
        const { date, description } = this.props
        return (
            <div style={{ padding: "10px", margin: "auto", marginRight: "5px", float: "left" }}>
                <Card border="secondary" style={{ width: '18rem', backgroundColor: "rgba(214, 214, 39, 0.349)" }}> 
                    <Card.Header>{moment(date).format('DD-MM-YYYY')}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Form>
                        <Form.Group controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Form.Check label="Complete" />
                            </Col>
                        </Form.Group>
                    </Form>
                        <Button type="button" onClick={this.onDeleteHandler} variant="outline-danger" size="sm">Delete</Button>
                </Card>
            </div>
        );
    }
    onDeleteHandler = () => {
        const { id, deleteJobTask } = this.props;
        console.log(id);
        deleteJobTask(id);
    }
}

const mapStateToProps = (state: IState) => {
    return {

    }
}
const mapDispatchToProps = {
    deleteJobTask: deleteJobTaskAction,
}

export const JobTask = connect(
    mapStateToProps,
    mapDispatchToProps
)(_JobTask)