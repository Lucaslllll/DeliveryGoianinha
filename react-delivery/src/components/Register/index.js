import React, { useState } from 'react';

import { Link } from 'react-router-dom';


import { Spinner } from 'reactstrap';

import API from "../../services/api";
import { setToken, setID } from '../../services/auth';

import './styles.css';


export default function Register(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [spinner, setSpinner] = useState(false); 

    async function handleSignUp(){
        setSpinner(true);
        if(!userName || !email || !password){
            setMessage('Preencha todos os dados para realizar o cadastro!');
            setError(true);
            setSpinner(false);
        }
        else{
            try{
                try{
                    const {data: { user:{ id }, token }} = await API.post('/api/auth/register', {
                        username: userName, 
                        password: password, 
                        email: email
                    });
                    setToken(token);
                    setID(id);
                    setRedirect(true);
                }
                catch(err){
                    setSpinner(false);
                    setError(true);
                    setMessage('Essa conta já foi cadastrada!')
                }
            }
            catch(err){
                console.log(err);
                setSpinner(false)
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
                    >{   spinner
                            ?
                                <Spinner size="sm" className="btn-login-spinner" />
                            :
                                <>Registrar</>
                        }</div>
                    <Link className="noAccount" to="/Login">Tenho uma conta</Link>                
                </form>
        </div>
    );
}