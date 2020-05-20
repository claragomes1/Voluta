import React, { Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Header from './Header';
import './App.css';

class App extends React.Component {
  state = { /*É um estado, pois eu quero que se eu add ou remover um elemento o estado mude atualizando a tabela*/
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Clara',
        livro: 'React',
        preco: '1'
      },
      {
        nome: 'Daniel',
        livro: 'React',
        preco: '10'
      },
      {
        nome: 'Luna',
        livro: 'React',
        preco: '100'
      }
    ],
  }


  removeAutor = index => {
    const { autores } = this.state;
    /*Para alterar o state não posso fazer this.state e alterar diretamente. Preciso usar o metodo setState, que pega o JSON anterior e o novo e faz um merge, mudando somente o que foi alterado*/
    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        }),
      }
    );
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }


}


export default App;
