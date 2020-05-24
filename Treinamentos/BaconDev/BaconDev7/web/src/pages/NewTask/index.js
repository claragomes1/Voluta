import React, { useState, useEffect } from 'react';
import FormValidator from '../../FormValidator';
import './Styles.css'
//import PopUp from '../../PopUp';
//import { func } from 'prop-types';

function NewTask({ onSubmit }) {
  const [description, setDescription] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({ description });

    setDescription('');
  }


  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <div className="input-add">
          <input
            htmlFor="task"
            type="text"
            id="task"
            name="task"
            value={ description }
            onChange={e => setDescription(e.target.value)}
            placeholder="What do you still need to do?">
          </input>
        </div>
        <div className="btn-add">
          <button type="submit"><i className="material-icons" >add</i></button></div>
      </form>
    </div>
  )
}










/* 
class NewTask extends React.Component {

  constructor(props) {
    super(props);

    this.validador = new FormValidator({
      campo:'task',
      metodo:'isEmpty'
  });

    this.stateInicial = {
      task: '',
    };
    this.state = this.stateInicial;
  }

  escutadorDeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value 
    });
  }

  submitFormulario = () => {
    if (this.validador.valida(this.state)) {
      this.props.escutadorDeSubmit(this.state);
      this.setState(this.stateInicial);
    }else{
      PopUp.exibeMensagem('error', 'Não é possivel adicionar tarefa em branco');
    }
  }

  render() {
    const { task } = this.state;

    return (
      <div className="add-task">
        <form>
          <div className="input-add"><input htmlFor="task" type="text" id="task" name="task" value={task} onChange={this.escutadorDeInput} placeholder="What do you still need to do?"></input></div>
          <div className="btn-add"><button type="button" onClick={this.submitFormulario}><i className="material-icons" >add</i></button></div>
        </form>
      </div>
    );
  }
} */

export default NewTask; 