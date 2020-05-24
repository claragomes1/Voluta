import React from 'react';
import './Styles.css';

function Task({ task }) {
    return (
        <div className="table-task">
            <table className="highlight col s12">
                <tbody>
                    <tr>
                        <td className="col s6">{task.description}</td>
                        <td><button className="btn centered btn-task col s6" ><i className="material-icons">delete</i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

/* 



const Table = props => {
    const rows = props.tasks.map((row, index) => {
        return (
            <tr key={index}>
                <td className="col s6">{row.task}</td>
                <td><button className="btn centered btn-task col s6"><i className="material-icons">delete</i></button></td>
            </tr>
        )
    });

class Task extends React.Component {
    render() {

        const { tasks, removeTask } = this.props;

        return (
            <div className="table-task">
                <table className="highlight col s12">
                    <Table tasks = { tasks } removeTask = { removeTask }/>
                </table>
            </div>

        );
    }
} */

export default Task;