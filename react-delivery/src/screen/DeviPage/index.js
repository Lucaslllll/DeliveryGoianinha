import React, { useState, useEffect } from 'react';

import './styles.css';

import Footer from '../../components/footer';
import imgProfile from '../../assets/img/empresa.png';
import kitchen from '../../assets/img/kitchen.jpg';


import { getID, getToken, logout } from '../../services/auth';
import API from '../../services/api';

import Rating from 'react-rating';

import { IoIosStarOutline, IoIosStar } from 'react-icons/io'; 
import { MdRestaurantMenu } from 'react-icons/md';

function DeviPage({match}) {
  const [restaurant, setRestaurantes] = useState({});

  useEffect(() => {
    async function isLogin(){
      try {
        const {data} = await API.post('/verify-token/', {
          pk: getID(),
          token: getToken()
        })
        if(data){
          handleRestaurant();
        }
        else{
          logout();
          document.location.reload();
        }
      }
      catch(err){
        logout();
        document.location.reload();
      }
    }

    isLogin();
  }, [])

  async function handleRestaurant(){
    const {data} = await API.get(`/api/restaurante/${match.params.slug}`);
    setRestaurantes(data);
  }

  return (
    <div className="containerPage">
      <div className="containerPageHeader">
        <div className="containerPage--row">
          <div className="containerPage__profilePhoto">
            <img 
              src={imgProfile}    
              className="containerPage__ProfilePhoto--img" 
              alt="Foto de perfil   de delivery" />
          </div>
          <div className="containerPage__containerInfo">
            <div className="containerPage__profileName">
              <h3 
                className="containerPage__profileName--name"
                >{restaurant.nome}
              </h3>
            </div>
            <div className="containerPage__profileDesc">
              <p className="containerPage__profileDesc--desc">
                {restaurant.descricao_longa}
              </p>
              <div className="containerPage__tags-frete">
                <div className="containerPage--tags">
                  tags: Açaí, Pizza
                </div>
                <div className="containerPage--frete">
                  Entrega R$ 2,50
                </div>
              </div>
            </div>
          </div>
          <div className="containerPage__btnCard">
            <button 
              className="btn-card"
            >
              <MdRestaurantMenu className="iconRestaurant"/>
              <span>
                Cardápio
              </span>
            </button>
            <div className="containerPage__rating">
              <Rating 
                start={0}
                stop={5}
                step={1}
                fractions={1}
                initialRating={2.4}
                emptySymbol={<IoIosStarOutline className="iconRatingempty" />}
                fullSymbol={<IoIosStar className="iconRatingfull" />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="containerPage--row">
        <div className="containerPage--galery">
          <div className="containerPage--galery--img">
            <img src={kitchen} alt="imagem da galeria" />
          </div>
          <div className="containerPage--galery--img">
            <img src={kitchen} alt="imagem da galeria" />
          </div>
          <div className="containerPage--galery--img">
            <img src={kitchen} alt="imagem da galeria" />
          </div>
          <div className="containerPage--galery--img">
            <img src={kitchen} alt="imagem da galeria" />
          </div>
        </div>
      </div>
      <div className="containerPage--row">
        <div className="containerPage--destaques">
          <div className="containerPage--destaques__des">
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default DeviPage;
