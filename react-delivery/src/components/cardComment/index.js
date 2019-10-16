import React from 'react';

import './styles.css';
import photoProfile from '../../assets/img/empresa.png';


export default function CardComment(props) {
  return (
    <div className="containerComment">
        <div className="containerComment--photo">
            <img src={photoProfile} alt="imagem de perfil" />
        </div>
        <div className="containerComment--name">
            <h3>Jeffesson</h3>
        </div>
        <div className="containerComment--comment">
            <span>"</span><div>
                Melhor delivery da região!
            </div><span>"</span>
        </div>
    </div>
  );
}
