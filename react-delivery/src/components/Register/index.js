import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import API from "../../services/api";
import { login } from '../../services/auth';

import './styles.css';


export default function Register(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [redirect, setRedirect] = useState(false);

    async function handleSignUp(){
        if(!userName || !email || !password){
            setMessage('Preencha todos os dados para realizar o cadastro!');
            setError(true);
        }
        else{
            try{
                try{
                    const response = await API.post('/api/auth/registrar', {
                        username: userName, 
                        password: password, 
                        email: email
                    });
                    login(response.data.token);
                    setRedirect(true);
                }
                catch(err){
                    setError(true);
                    setMessage('Essa conta já foi cadastrada!')
                }
            }
            catch(err){
                console.log(err);
            }
        }

    }

    function renderRedirect() {
        if (redirect){
            document.location.reload();
        }
    }

    function handleMessage(){
        if(error){
            return(
                <div className={`animated shake containerForm_error--message`} >
                    {message}
                </div>
            )
        }
        return(
            <></>
        )
    }

    return(
        <div className="containerForm">
            {renderRedirect()}
                <form className="form">
                    <div className="containerForm__error">
                        {handleMessage()}
                    </div>
                    <input
                        onClick={() => handleMessage()}
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