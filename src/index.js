import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RegistroGastos from './page/registroGastos';
import ListarTodos from './page/listarTodos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  (
      <Router>
          <App>
              <Switch>
                  <Route exact path="/" component={ListarTodos}/>
                  <Route path="/cadastrar" component={RegistroGastos}/>
                  <Route path="/listar" component={ListarTodos}/>
              </Switch>
          </App>
      </Router>
  ),
  document.getElementById('root')
);
