import React, { Component } from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Header from './components/header';
import {Menubar} from 'primereact/menubar';
import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    const menuitems = [
      {
         label:'Home',
         icon:'pi pi-fw pi-home',
         command:() => this.props.history.push('/')
      },
      {
         label:'Cadastrar',
         icon:'pi pi-fw pi-user',
         command:() => this.props.history.push('/cadastrar')
      },
      {
         label:'Listar Todos',
         icon:'pi pi-fw pi-comment',
         command:() => this.props.history.push('/listar')
      }
   ];
    return (
      <div className="App">
        <Header/>
        <div id="main">
            <main>
                <div className="content" id="content">
                    {this.props.children}
                </div>
            </main>
        </div>
        <div className="footer-content">
          <Menubar model={menuitems}/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);