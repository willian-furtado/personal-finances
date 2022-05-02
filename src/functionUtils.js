import {Component} from 'react';

class FunctionUtils extends Component{

    static gastos=[];

    static gastosCadastrados(e){
        const formData = new FormData(e?.target)
        const dados = Object.fromEntries(formData);
        this.gastos.push(dados)        
        return this.gastos;
    }
}

export default FunctionUtils;