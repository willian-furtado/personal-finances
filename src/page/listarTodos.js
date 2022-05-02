import React from "react";
import "../styles.css";
import FunctionUtils from '../functionUtils'

export default function ListarTodos() {
    const gastos = FunctionUtils.gastos
    console.log(gastos)

    const todosGastos = gastos.map(
        (c) => 
              <div className={"header-body"}>
              <div class="row">
                  <div class="col-xl-3 col-lg-6 margin">
                      <div class="card">
                          <div class="card-body">
                              <div class="row">
                                  <div>
                                      <div>
                                          <label>{c.local}</label>
                                      </div>
                                      <div>
                                          <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                                              <i class="fas fa-chart-bar"></i>
                                          </div>
                                      </div>
                                  </div>
                                  <label> {c.data}</label>
                                  <div>
                                      <label> {c.valor}</label>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );

    return (
        <div class="form-container">
            <div className={"titulo"}>
                <h2 className={"titulo"}>Todos os Gastos</h2>
            </div>
            <div class="main-content">
                <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
                    <div class="container-fluid">
                        {todosGastos}
                    </div>
                </div>
            </div>
        </div>
    );
}