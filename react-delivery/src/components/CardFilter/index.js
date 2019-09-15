import React from 'react';

import './styles.css';

export default function CardFilter() {
  return (
    <>
      <div className="cardFilter">
        <div className="cardFilter__img">
          <img 
            alt="imagem para filtrar"
            className="cardfilter__img--img" 
            src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/discoveries/ifood-capas-novas-taxa-gratis.jpg"
          />
        </div>
        <div className="cardFilter__text">
          <div className="cardFilter__title">
            <h2 className="cardFilter__title--title">Entrega gratuíta</h2>
          </div>
          <div className="cardFilter__subtitle">
            <p className="cardFilter__subtitle--subtitle">Seu pedido sem taxa de entrega!</p>
          </div>
        </div>
      </div>
    </>
  );
}
