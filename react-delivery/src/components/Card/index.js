import React from 'react';

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
          { props.status
            ?
              <div className="status">Online</div>
            :
              <div className="status offline">Offline</div>
          }
        </div>
        <div className="containerImg">
          <img src={props.logotipoCard} alt="logotipo do delivery" className="img-delivery" />
        </div>
        <div className="title">
          <h4 className="desc">{props.nameCard}</h4>
        </div>
        <div className="containerDesc">
          <p className="desc">{props.descCard}</p>
        </div>
        <div className="containerRating">
          <Rating 
            start={0}
            stop={5}
            step={1}
            fractions={2}
            initialRating={2}
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