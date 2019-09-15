import React, {useEffect, useState} from 'react';

import Card from '../../components/Card';
import img from '../../assets/img/empresa.png';
import API from '../../services/api';
import CardFilter from '../../components/CardFilter';

import './styles.css';

export default function Home() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    API.get('/usuario_lista/')
    .then((data) => {
      setCards(data.data.results)
    })
    .catch(console.log)
  }, []);

  return (
    <div className="containerHome">
      <div className="containerCardFilter">
        <CardFilter />
        <CardFilter />
        <CardFilter />
      </div>
      <div className="containerHome__list-delivery">
        <h3 className="containerHome__list-delivery--title">Deliverys</h3>
        <div className="containerHome__list-delivery-container-filter">
            <div className="containerHome__filter">
              <p>Filtre por</p>
              <button className="btn btn-outline-dark">AAA</button>
              <button className="btn btn-outline-dark">AAA</button>
              <button className="btn btn-outline-dark">AAA</button>

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
