import React, { useState } from 'react';

import { Link, Redirect } from 'react-router-dom';

import API from "../../services/api";

import './styles.css';


export default function Register(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');    
    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function handleSignUp(){
        if(!userName || !email || !password){
            alert('Preencha todos os dados para se cadastrar')
        }
        else{
            try{
                try{
                    await API.post('/api/auth/registrar', {
                        username: userName, 
                        password: password, 
                        email: email
                    });
                    alert('Pronto, realize login para continuar!');
                    setRedirect(true);
                }
                catch(err){
                    alert('Essa conta já foi cadastrada!')
                }
            }
            catch(err){
                console.log(err);
            }
        }

    }

    function renderRedirect() {
        if (redirect){
            return <Redirect to="/Login" />
        }
    }

    return(
        <div className="containerForm">
            {renderRedirect()}
                <form className="form">
                    <input
                        type="text"
                        className="InputLogin"
                        placeholder="Nome de usuário"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => setEmail(e.target.value)}
                        className="InputLogin" 
                    />
                    <input
                        className="InputLogin" 
                        type="password"
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}
                        
                    />
                    <div
                        className={`btn-login`}
                        onClick={() => handleSignUp()}
                    >Registrar</div>
                    <Link className="noAccount" to="/Login">Tenho uma conta</Link>                
                </form>
        </div>
    );
}