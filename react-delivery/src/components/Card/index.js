import React from 'react';

import { Link } from 'react-router-dom';

import Rating from 'react-rating';

import { IoIosStarOutline, IoIosStar } from 'react-icons/io'; 

import './styles.css';

function Card(props) {
  return(
    <Link to="/deliveryPage" className="card--link">
      <div className="containerCard">
        <div className="containerStatus">
          { props.status
            ?
              <div className="status">Online</div>
            :
              <div className="status offline">Offline</div>
          }
        </div>
        <div className="containerCard--info">
          <div className="containerImg">
            <img src={props.logotipoCard} alt="logotipo do delivery" className="img-delivery" />
          </div>
          <div className="containerCard--title_desc">
            <div>
              <h4 className="title">{props.nameCard}</h4>
            </div>
            <div className="containerDesc">
              <p className="desc">{props.descCard}</p>
            </div>
          </div>
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
      </div>
    </Link>
  );
}

export default Card;