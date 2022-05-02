import React from "react";
import "../styles.css";
import { useHistory } from "react-router-dom";
import FunctionUtils from "../functionUtils";

export default function Registro() {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        FunctionUtils.gastosCadastrados(e)
    };

    return (
        <div class="form-container">
            <div className={"titulo"}>
                <h2 className={"titulo"}>Cadastrar Gastos</h2>
            </div>

            <form class="register-form" onSubmit={handleSubmit}>
                {/* Uncomment the next line to show the success message */}
                {/* <div class="success-message">Success! Thank you for registering</div> */}
                <input
                    id="data"
                    class="form-field"
                    type="date"
                    placeholder="Data:"
                    name="data"
                />
                {/* Uncomment the next line to show the error message */}
                {/* <span id="first-name-error">Please enter a first name</span> */}
                <input
                    id="local"
                    class="form-field"
                    type="text"
                    placeholder="Local:"
                    name="local"
                />
                {/* Uncomment the next line to show the error message */}
                {/* <span id="last-name-error">Please enter a last name</span> */}
                <input
                    id="valorGasto"
                    class="form-field"
                    type="text"
                    placeholder="Valor gasto:"
                    name="valor"
                />

                <input
                    id="tipo"
                    className="form-field"
                    type="text"
                    placeholder="Tipo:"
                    name="tipo"
                />
                <button class="form-field" type="submit"  onClick={() => history.goBack()}>
                    Salvar
                </button>
                <button class="form-field" type="button">
                    Limpar
                </button>
            </form>
        </div>
    );
}