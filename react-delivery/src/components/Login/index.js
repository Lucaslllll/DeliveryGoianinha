import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import api from "../../services/api";
import { login } from "../../services/auth";


import './styles.css';

class Login extends Component {
        state = {
            email: "",
            password: "",
            error: ""
        };

        handleSignIn = async e => {
            e.preventDefault();
            const { email, password } = this.state;
            if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
            } else {
            try {
                const response = await api.post("/users", { email, password });
                login(response.data.token);
                this.props.history.push("/Home");
            } catch (err) {
                this.setState({
                error:
                    "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
            }
        };

        render(){
            return(
            <div className="containerForm">
                <form className="form" onSubmit={this.handleSignIn}>
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        className="InputLogin"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        className="InputLogin"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <Link className="btn-login" to="/Home">Entrar</Link>
                    <Link className="noAccount" to="/Register">Não tenho uma conta</Link>                    
                </form>
            </div>
        )
    }
}

export default Login;
