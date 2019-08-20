import React from 'react';

import './styles.css';

import imga from '../../assets/img/cell.png';

export const Wallpaper = () => (
    <div className="img-wallpaper">
        <div>
           <h3>DeliveryApp</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate delectus deleniti dignissimos dolor dolores dolorum excepturi explicabo facilis in laborum magni, nesciunt, pariatur perspiciatis quo tempore veritatis voluptas? At.</p>
        </div>
        <div>
            <img src="imga" alt="imagem do celular"/>
        </div>
    </div>
)

export default Wallpaper;