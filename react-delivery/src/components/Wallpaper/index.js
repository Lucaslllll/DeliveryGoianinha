import React from 'react';

import './styles.css';

import cellPhone from '../../assets/img/cell.png';
import linkAndroid from '../../assets/img/link-android.png';

export const Wallpaper = () => (
    <div className="img-wallpaper">
        <div className="gridBattle">
            <div className="infoCellContainer">
                <div className="infoCell animated flipInX slower">
                   <h3>DeviGO</h3>
                    <p><span className="aspas">"</span>DeliveryApp! O delivery de Goianinha no seu celular!<span className="aspas">"</span></p>
                    <a href="https://www.google.com/"><img className="linkAndroid" alt="baixar o aplicativo android" src={linkAndroid} /></a>
                </div>
            </div>
            <div className="cellContainer animated bounceInDown slower">
                <img src={cellPhone} className="cell" alt="imagem do celular"/>
            </div>
        </div>
    </div>
)

export default Wallpaper;