import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function Register(){
	return(
		<div className="containerForm">
            <form className="form">
                <input placeholder="Nome" type="text" className="InputLogin" name="name" />
                <input placeholder="E-mail" type="text" className="InputLogin" name="name" />
                <input placeholder="Senha" type="text" className="InputLogin" name="name" />
                <input className="btn-login" type="submit" value="Registrar" />
                <Link className="noAccount" to="/Login">Tenho uma conta</Link>
			</form>
        </div>
	);
}

export default Register;