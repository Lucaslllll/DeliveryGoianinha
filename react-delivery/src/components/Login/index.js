import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import API from "../../services/api";
import { login } from "../../services/auth";


import './styles.css';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    
    async function handleSingIn(){
        try{
            const reponse = await API.post('/api/auth/login', {
                username: email, 
                password: password
            });
            login(reponse.data.token);
            setRedirect(true);

        }
        catch(err){
            setMessage('Dados incorretos!');
            setError(true);
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
            <form className="form" >
                <div className="containerForm__error">
                    {handleMessage()}
                </div>
                <input
                    type="text"
                    placeholder="Endereço de e-mail"
                    className="InputLogin"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    className="InputLogin"
                    onChange={e => setPassword(e.target.value)}

                />
                <div 
                    className="btn-login" 
                    onClick={() => handleSingIn()}
                    >Entrar</div>
                <Link className="noAccount" to="/Register">Não tenho uma conta</Link>                    
            </form>
        </div>
    )
}

export default Login;
