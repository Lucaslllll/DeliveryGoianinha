import React from 'react';


import './styles.css';

export default class beforeLogin extends React.Component{
	render(){
		return(
			<>
				<div className="containerBefore">
					<a className="btn-login-before" href="">
						Entrar
					</a>
					<a className="link-register">Não tenho uma conta</a>
				</div>
			</>

		);
	}
}