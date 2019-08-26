import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function beforeLogin(){

		function handleFacebook(){
			alert('Indisponível');
		}

		return(
			<>
				<div className="containerBefore">
					<Link className="btn-login-before" to="/Login">
						Entrar
					</Link>
					<Link to="/Register" className="link-register">Não tenho uma conta</Link>
					<div className="containerSocial">
						<Link onClick={() => handleFacebook()} className="facebook-login">Facebook</Link>
					</div>
				</div>
			</>

		);
}

export default beforeLogin;