import React, { Fragment, useEffect, useState } from 'react';
import api from './services/api';

import Task from './pages/Task';
import Header from './pages/Header';
import NewTask from './pages/NewTask';
import 'materialize-css/dist/css/materialize.min.css';
import PopUp from './PopUp';
import { func } from 'prop-types';


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await api.get('/task');
      setTasks(response.data);
    }
    loadTasks();
  }, [])

  async function handleAddTask(data){
    const response = await api.post('/task', data);
    setTasks([...tasks, response.data]);
  }

  async function deleteTaskById({task}){
    const reponse = await api.delete(`/task/:${task._id}`)
    setTasks({
      tasks: tasks.filter((task, posAtual) => {
        return posAtual._id != task._id;
      })
    })
  }



  return (
    <Fragment>
      <Header />
      <div className="container">
        <NewTask onSubmit={handleAddTask}/>
        {tasks.map(task => (
          <Task key={task._id} task={task} onClick={deleteTaskById}/>
        ))}
      </div>
    </Fragment>
  );
}


/* class App extends React.Component {

  state = {
    tasks: [
      {
        task: 'Arrumar a cama'
      },
      {
        task: 'Colocar o lixo para fora'
      },
      {
        task: 'Colocar o lixo para fora'
      },
      {
        task: 'Escovar os dentes '
      },
      {
        task: 'Arrumar a cama'
      },
      {
        task: 'Colocar o lixo para fora'
      },
      {
        task: 'Colocar o lixo para fora'
      },
      {
        task: 'Escovar os dentes depois '
      },
      {
        task: 'Arrumar a cama'
      },
      {
        task: 'Colocar o lixo para fora'
      },
      {
        task: 'Colocar o lixo para fora'
      },
    ]

  }
 */
/* removeTask = index => {
  const { tasks } = this.state;
  this.setState (
    {
      tasks: tasks.filter((task, posAtual) => {
        return posAtual !== index;
      }),
    }
  );
  PopUp.exibeMensagem("error", "Tarefa removida");
}

escutadorDeSubmit = task => { 
  this.setState({ tasks: [...this.state.tasks, task] })
}
 */

/*   render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <NewTask escutadorDeSubmit={this.escutadorDeSubmit}/>
          <Task tasks={this.state.tasks} removeTask = { this.removeTask }/>
        </div>
      </Fragment>
    );
  }


}
 */
export default App;
