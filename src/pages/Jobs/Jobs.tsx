import * as React from 'react';
import { connect } from 'react-redux';
import { JobTask } from '../JobTask/JobTask';
import { getTaskJobAction } from '../../Redux/actions';
import { IState } from '../../Redux/reducer';
import { ITaskJob } from '../../taskJobModel';
import { Redirect } from 'react-router';

export interface IJobsProps {
    getTaskJob(): void,
    jobTask: ITaskJob[],
    isLogged: boolean,
}

export default class _Jobs extends React.Component<IJobsProps> {

    componentDidMount() {
        const { getTaskJob } = this.props;
        getTaskJob();
    }

    public render() {
        const { jobTask, isLogged } = this.props;
        if (!isLogged) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                {jobTask.map((job) =>
                    <div key={job.id}>
                        <JobTask {...job} />
                    </div>)}
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        jobTask: state.taskJobs,
        isLogged: state.isLogged,
    }
}

const mapDispatchToProps = {
    getTaskJob: getTaskJobAction,
}


export const Jobs = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Jobs)
