import React from "react";
import "../styles.css";

    var gastos=[];

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e?.target)
        const dados = Object.fromEntries(formData);
        gastos.push(dados);
    };

    const Registro = () => (
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
                    name="horas"
                />

                <input
                    id="tipo"
                    className="form-field"
                    type="text"
                    placeholder="Tipo:"
                    name="tipo"
                />
                <button class="form-field" type="submit">
                    Salvar
                </button>
                <button class="form-field" type="button">
                    Limpar
                </button>
            </form>
        </div>
    );
    
    export default Registro;