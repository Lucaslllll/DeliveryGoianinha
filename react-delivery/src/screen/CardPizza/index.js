import React from 'react';

import CardBeforeMain from '../../components/cardBeforeMain';

import './styles.css';

function CardPizza(){
  return(
    <>
      <CardBeforeMain nameCard="MONTAR" classCard="container-mont" bgImg="https://assets3.thrillist.com/v1/image/2725860/size/gn-gift_guide_variable_c.jpg" />
      <CardBeforeMain nameCard="Holandesa" bgImg="http://www.mundodaspizzas.com/imgs/s65dt9gpwaxf24ic.jpeg" />
      <CardBeforeMain nameCard="Coração" bgImg="https://www.receitas-sem-fronteiras.com/uploads/article/164530986-c1c53c6c-3c0f-4f8b-8e26-ce680bd9370d-1-jpg_crop.jpeg?1487081159" />
      <CardBeforeMain nameCard="Italiana" bgImg="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/05/11/a-verdadeira-pizza-italiana.jpg" />
      <CardBeforeMain nameCard="Peperoni" bgImg="https://pizzariadesucesso.com/wp-content/uploads/2018/05/pepperoni-pizza-1280x720.jpg" />
      <CardBeforeMain nameCard="Lombo Barbecue" bgImg="https://www.marialeva.com/app/uploads/26-10-2017-09-57-37.jpg" />
    </>
  )
}

export default CardPizza;