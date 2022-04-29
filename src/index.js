import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './page/Home';
import RegistroGastos from './page/registroGastos';
import ListarTodos from './page/listarTodos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  (
      <Router>
          <App>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/cadastrar" component={RegistroGastos}/>
                  <Route path="/listar" component={ListarTodos}/>
              </Switch>
          </App>
      </Router>
  ),
  document.getElementById('root')
);
