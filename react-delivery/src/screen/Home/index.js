import React, {useEffect, useState} from 'react';

import Card from '../../components/Card';
import img from '../../assets/img/empresa.png';
import API from '../../services/api';
import CardFilter from '../../components/CardFilter';
import Select from 'react-select';
import Footer from '../../components/footer';

import { Spinner } from 'reactstrap';
import './styles.css';


const options = [
  { value: '1', label: 'Açaí' },
  { value: '2', label: 'Pizza' },
  { value: '3', label: 'Hamburguer'}
]

export default function Home() {
  const [cards, setCards] = useState([]);
  // const [cardFilters, setCardsFilters] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    handleCard();
  }, [pagination]);

  async function handleCard(){
    await API.get(`/api/User/?page=${pagination}`)
    .then((data) => {  
      setCards(data.data.results);
    })
    .catch(console.log)
  }

  function handleSpinner(){
    setSpinner(true);
  }

  function handlePagination(){
    setPagination(2);
    console.log(cards);
  }

  return (
    <div onClick={() => handlePagination()} className="containerHome">
      <div className="containerCardFilter">
        <div className="animated bounceInLeft slower">
          <CardFilter />
        </div>
        <div className="animated bounceInDown slower">
          <CardFilter />
        </div>
        <div className="animated bounceInRight slower">
          <CardFilter />
        </div>
      </div>
      <div className="containerHome__list-delivery">
        <h3 className="containerHome__list-delivery--title animated bounceInLeft slower">Deliverys</h3>
        <div className="containerHome__list-delivery-container-filter">
            <div className="containerHome__filter animated bounceInLeft slower">
              <p className="containerHome__filter--title">Filtre por</p>
              <button className="btn-filter">Entrega</button>
              <button className="btn-filter">Preço</button>
            </div>
            <div className="containerHome__rel animated bounceInRight slower">
              <Select
                className="containerHome__rel--options" 
                options={options} 
                placeholder="Ordenar por"
                />
            </div>
        </div>
      </div>
      <div className="cardHomeContainer animated fadeIn slower" >
        {cards.map((card) => (
          <Card key={card.id} 
            nameCard={card.username}
            descCard={card.email} 
            status={true} 
            logotipoCard={img}
            onClick={() => handleCard()}
          />
        ))}
      </div>
      <div className="containerHome__btn-more">
        <div onClick={() => handleSpinner()} className="btn-more">
          {
              spinner
            ?
              <Spinner size="sm" />
            :
              <>Ver mais</>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
