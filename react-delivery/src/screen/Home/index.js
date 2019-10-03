import React, {useEffect, useState} from 'react';

import Card from '../../components/Card';
import img from '../../assets/img/empresa.png';
import API from '../../services/api';
import CardFilter from '../../components/CardFilter';
import Select from 'react-select';
import Footer from '../../components/footer';

import { Spinner } from 'reactstrap';
import './styles.css';
import { getID, getToken, logout } from '../../services/auth';


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
    async function isLogin(){
      try {
        const {data} = await API.post('/verify-token/', {
          pk: getID(),
          token: getToken()
        })
        if(data){
          handleCard();
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
    async function handleCard(){
      await API.get(`/api/restaurante/?page=${pagination}`)
      .then((data) => {
        setSpinner(false);
        if(pagination >= 2){
          const deliverys = data.data.results
          cards.push(deliverys)
        }
        else{
          const deliverys = data.data.results
          setCards(deliverys)
        }
      })
      .catch((err) => {
        setSpinner(false);
        console.log(err);
      })
    }

    isLogin();
  }, []);

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
            nameCard={card.nome}
            descCard={card.descricao_breve} 
            status={card.status} 
            logotipoCard={img}
          />
          )
        )}
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
