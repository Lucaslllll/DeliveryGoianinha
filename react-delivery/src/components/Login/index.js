import React from 'react';

import './styles.css';

export default class Login extends  React.Component {
    render(){

        return(
            <div className="containerForm">
                <form className="form">
                    <input placeholder="E-mail" type="text" className="InputLogin" name="name" />
                    <input placeholder="Senha" type="text" className="InputLogin" name="name" />
                    <input className="btn-login" type="submit" value="Entrar" />
                    <a className="noAccount" href="">Não tenho uma conta</a>
                </form>
            </div>
        )
    }
}
