import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import './styles.css';

const baseUrl = 'http://localhost:8000/usuario_lista';
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class Register extends Component{
    state = { ...initialState };

    clear(){
        this.setState({ user: initialState.user })
    }

    save(){
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
            })
    }

    render(){
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
}