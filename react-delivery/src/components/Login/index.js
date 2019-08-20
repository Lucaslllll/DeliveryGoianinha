import React from 'react';

import './styles.css';

import { Col } from 'reactstrap';

export default class Login extends  React.Component {
    render(){

        return(
            <Col xs="6" lg="6" className="containerForm">
                <form className="form">
                    <input placeholder="E-mail" type="text" className="InputLogin" name="name" />
                    <input placeholder="Senha" type="text" className="InputLogin" name="name" />
                    <input className="btn-login" type="submit" value="Entrar" />
                </form>
            </Col>
        )
    }
}