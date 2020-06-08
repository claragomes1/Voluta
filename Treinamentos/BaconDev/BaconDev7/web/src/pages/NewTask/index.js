import React, { useState, useEffect } from 'react';
import './Styles.css'
import api from '../../services/api';
import Task from '../Task/index';
import PopUp from '../../PopUp';


function NewTask() {
  const [description, setDescription] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();
    const data = { description };
    try {
      await api.post('task', data)
      setDescription('')
    } catch (err) {
      PopUp.exibeMensagem('error', 'Não é possivel adicionar tarefa em branco');
    }
  }

  return (
    <div>
      <div className="add-task">
        <form onSubmit={handleSubmit}>
          <div className="input-add">
            <input
              htmlFor="task"
              type="text"
              id="task"
              name="task"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="What do you still need to do?">
            </input>
          </div>
          <div className="btn-add">
            <button type="submit"><i className="material-icons" >add</i></button></div>
        </form>
      </div>
      <div>
        <Task />
      </div>
    </div>
  )
}

export default NewTask; 