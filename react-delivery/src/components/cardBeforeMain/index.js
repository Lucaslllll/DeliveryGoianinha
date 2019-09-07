import React from 'react';

import './styles.css';

import { Card, LinkCard } from './styled';

import { Link } from 'react-router-dom';

function CardBeforeMain(props) {
  return(
    <LinkCard>
      <Link to={props.linkCard} className="link-cardBeforeLogin">
        <Card bgImg={props.bgImg} hCard={props.hCard} >
          <div className='cardBeforeLogin' >
            <div className={`container__title--cardBeforeLogin ${props.classCard}`}>
              <h2 className="title-cardBeforeLogin">{props.nameCard}</h2>
            </div>
          </div>
        </Card>
      </Link>
    </LinkCard>
  );
}


export default CardBeforeMain;