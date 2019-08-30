import React from 'react';

import img from '../../assets/img/empresa.png';
import { Link } from 'react-router-dom';

import Rating from 'react-rating';

import { IoIosStarOutline, IoIosStar } from 'react-icons/io'; 
import { MdRestaurantMenu } from 'react-icons/md';

import './styles.css';

function Card(props) {
  return(
    <>
      <div className="containerCard">
        <div className="containerStatus">
          <div className="status">Online</div>
        </div>
        <div className="containerImg">
          <img src={img} className="img-delivery" />
        </div>
        <div className="containerDesc">
          <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="containerRating">
          <Rating 
            emptySymbol={<IoIosStarOutline className="iconRatingempty" />}
            fullSymbol={<IoIosStar className="iconRatingfull" />}
          />
        </div>
        <div className="containerButton">
          <Link className="btn-delivery" to="/deliveryPage"><MdRestaurantMenu className="iconRestaurant"/><span className="restaurant-span">Cardápio</span></Link>
        </div>
      </div>
    </>
  );
}

export default Card;