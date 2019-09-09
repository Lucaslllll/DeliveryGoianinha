import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import api from "../../services/api";

import './styles.css';


export default class Register extends Component{
    state = {
        username: "",
        email: "",
        password: "",
        error: ""
      };
    
      handleSignUp = async e => {
        e.preventDefault();
        const { username, email, password } = this.state;
        if (!username || !email || !password) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
            try {
            await api.post("/users", { username, email, password });
            this.props.history.push("/");
            } catch (err) {
            console.log(err);
            this.setState({ error: "Essa conta já existe!" });
            }
        }
      };

    render(){
        return(
            <div className="containerForm">
                    <form onSubmit={this.handleSignUp} className="form">
                        {this.state.error && alert(this.state.error)}
                        <input
                            type="text"
                            className="InputLogin"
                            placeholder="Nome de usuário"
                            onChange={e => this.setState({ username: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Endereço de e-mail"
                            onChange={e => this.setState({ email: e.target.value })}
                            className="InputLogin" 
                        />
                        <input
                            className="InputLogin" 
                            type="password"
                            placeholder="Senha"
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <button 
                            type="submit"
                            className={`btn-login`}
                            
                        > Registrar </button>
                        <Link className="noAccount" to="/Login">Tenho uma conta</Link>                
                    </form>
            </div>
        );
    }
}