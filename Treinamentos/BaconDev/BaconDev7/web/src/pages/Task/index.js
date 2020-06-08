import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import PopUp from '../../PopUp';
import './Styles.css';

function Task() {
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        api.get('task').then(response => {
            setTasks(response.data);
        })
    }, [deleteTaskById]);

    async function deleteTaskById(_id) {
        await api.delete(`task/${_id}`)
        setTasks(tasks.filter(task => task._id != _id));
        PopUp.exibeMensagem("error", "Tarefa removida");
    }

    return (
        <div className="table-task">
            <table className="highlight col s12">
                {tasks.map(task => (
                    <tbody key={task._id}>
                        <tr>
                            <td className="col s6">{task.description}</td>
                            <td><button onClick={() => deleteTaskById(task._id)} type="button" className="btn centered btn-task col s6" ><i className="material-icons">delete</i></button></td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default Task;