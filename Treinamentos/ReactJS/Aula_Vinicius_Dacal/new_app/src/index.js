import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  /*A partir daqui digo que estou querendo utilizar as rotas*/
  /*Dentro do switch vou ter as rotas propriamente ditas da minha aplicação*/
  /*Para o path / quero renderizar o componente App*/
  /*É importante colocar o exact=true, pois a comparação do caminho é parcial, entao se eu quiser acessar sobre mas o caminho for só / vai dar certo. colocando o exact o caminho tem que ser exatamente aquele'*/
  <BrowserRouter>
  
    <Switch>

      <Route path='/' exact={true} component={App}/>
      <Route path='/sobre' component={Sobre}/>
      <Route path='/livros' component={Livros}/>
      <Route path='/autores' component={Autores}/>
      <Rout component={NotFound} />

    </Switch>
  
  </BrowserRouter>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
