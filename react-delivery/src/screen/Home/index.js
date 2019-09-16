import React, {useEffect, useState} from 'react';

import Card from '../../components/Card';
import img from '../../assets/img/empresa.png';
import API from '../../services/api';
import CardFilter from '../../components/CardFilter';

import './styles.css';

export default function Home() {
  const [cards, setCards] = useState([]);
  // const [cardFilters, setCardsFilters] = useState([]);

  useEffect(() => {
    handleCard();
  }, []);

  async function handleCard(){
    await API.get('/api/User')
    .then((data) => {
      setCards(data.data.results)
    })
    .catch(console.log)
  }

  return (
    <div className="containerHome">
      <div className="containerCardFilter">
        <CardFilter />
      </div>
      <div className="containerHome__list-delivery">
        <h3 className="containerHome__list-delivery--title">Deliverys</h3>
        <div className="containerHome__list-delivery-container-filter">
            <div className="containerHome__filter">
              <p className="containerHome__filter--title">Filtre por</p>
              <button className="btn-filter">Entrega</button>
              <button className="btn-filter">Preço</button>
            </div>
            <div className="containerHom__rel">
              <p>Ordenar por</p>
            </div>
        </div>
      </div>
      <div className="cardHomeContainer">
        {cards.map((card) => (
          <Card key={card.id} 
            nameCard={card.username}
            descCard={card.email} 
            status={true} 
            logotipoCard={img}
          />
        ))}
      </div>
    </div>
  );
}
