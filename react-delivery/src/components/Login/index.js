import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function Login() {
        return(
            <div className="containerForm">
                <form className="form">
                    <input placeholder="E-mail" type="text" className="InputLogin" name="name" />
                    <input placeholder="Senha" type="text" className="InputLogin" name="name" />
                    <input className="btn-login" type="submit" value="Entrar" />
                    <Link className="noAccount" to="/Register">Não tenho uma conta</Link>
                </form>
            </div>
        )
}

export default Login;
