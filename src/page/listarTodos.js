import React from "react";
import "../styles.css";
import { Card } from "react-bootstrap";

export default function ListarTodos() {

    return (
        <div class="form-container">
            <div className={"titulo"}>
                <h2 className={"titulo"}>Todos os Gastos</h2>
            </div>

            <form class="register-form">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Padaria A</Card.Title>
                    <Card.Text>
                        10-02-2022 - R$18,89
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Padaria B</Card.Title>
                    <Card.Text>
                        11-03-2022 - R$25,10
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Supermercado C</Card.Title>
                    <Card.Text>
                        12-04-2022 - R$75,40
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Farmacia </Card.Title>
                    <Card.Text>
                        14-04-2022 - R$29,51
                    </Card.Text>
                </Card.Body>
            </Card>
            </form>
        </div>
    );
}