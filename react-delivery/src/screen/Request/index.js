import React, { useEffect } from 'react';

import './styles.css';

import { Button, Form, FormGroup, Input } from 'reactstrap';

import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';

import { Link } from 'react-router-dom';

function Request(){
  const [acaiHeight, setAcaiHeight] = React.useState('s');
  const [acaiNext, setAcaiNext] = React.useState('c');
  const [acaiAdd, setAcaiAdd] = React.useState({
    chocoball: false,
    chocolateMesc: false,
    ovomaltine: false,
    mm: false,
    negresco: false,
    bis: false,
    granulado: false,
    caramelo: false,
    chocolate: false,
    morango: false,
  });

  useEffect(() => {
    if(acaiAdd.bis){
      setAcaiNext('y')
    }
  }, [acaiAdd])

  function handleChange(event) {
    setAcaiHeight(event.target.value);
  }

  const handleChangeAcaiAdd = name => event => {
    setAcaiAdd({ ...acaiAdd, [name]: event.target.checked });
  };

  return(
    <>
      <div className="container__request">
      <Form>
          <div className="content__container--request">
            <h3 className="container__request--title">Comece escolhendo quanto você quer de puro açaí.</h3>
            <div className="container__request--option">
                <FormGroup check>
                    <label htmlFor="300">
                      <div className={`card__request ${ acaiHeight === '300' ? 'card__active' : '' }`}>
                        <div className="card__request--img">
                          <img className="img--request" src="http://www.nativeacai.com.br/img/acai_300.png" />
                        </div>
                        <div className="card__request--option">
                          <Radio
                            checked={acaiHeight === '300'}
                            onChange={handleChange}
                            value="300"
                            color="primary"
                            id="300"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': '300' }}
                            />
                        </div>
                      </div>
                    </label>
                </FormGroup>
                <FormGroup check>
                <label htmlFor="400">
                  <div className={`card__request ${ acaiHeight === '400' ? 'card__active' : '' }`}>
                    <div className="card__request--img">
                      <img className="img--request" src="http://www.nativeacai.com.br/img/acai_400.png" />
                    </div>
                    <div className="card__request--option">
                      <Radio
                        checked={acaiHeight === '400'}
                        onChange={handleChange}
                        value="400"
                        color="primary"
                        id="400"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': '400' }}
                        />
                    </div>
                  </div>
                </label>
                </FormGroup>
                <FormGroup check>
                  <label htmlFor="500">
                    <div className={`card__request ${ acaiHeight === '500' ? 'card__active' : ''}`}>
                        <div className="card__request--img">
                          <img className="img--request" src="http://www.nativeacai.com.br/img/acai_500.png" />
                        </div>
                      
                      <div className="card__request--option">
                        <Radio
                          checked={acaiHeight === '500'}
                          onChange={handleChange}
                          value="500"
                          color="primary"
                          id="500"
                          name="radio-button-demo"
                          inputProps={{ 'aria-label': '500' }}
                        /> 
                      </div>
                    </div>
                  </label>
                </FormGroup>
                <FormGroup check>
                  <label htmlFor="700">
                    <div className={`card__request ${ acaiHeight === '700' ? 'card__active' : ''}`}>
                        <div className="card__request--img">
                          <img className="img--request" src="http://www.nativeacai.com.br/img/acai_700.png" />
                        </div>
                      
                      <div className="card__request--option">
                        <Radio
                          checked={acaiHeight === '700'}
                          onChange={handleChange}
                          value="700"
                          color="primary"
                          id="700"
                          name="radio-button-demo"
                          inputProps={{ 'aria-label': '700' }}
                        /> 
                      </div>
                    </div>
                  </label>
                </FormGroup>
            </div>
            {
              acaiHeight !== 's'
              ?
                <div className="btn--next__request animated fadeIn">
                  <button className="btn--before__request">Anterior</button>
                  <button className="btn--after__request">Proximo</button>
                </div>
             : 
             null
             }
          </div>
          { acaiHeight !== 's' ?
          <>
          <div id="next" className="content__container--request">
            <h3 className="container__request--title">
            Agora você escolhe  { acaiHeight === '400' ? '4' : '3' } acompanhamentos e ganha o leite condensado.
            </h3>
            <div className="container__request--option">
                <FormGroup check>
                  <label htmlFor="chocoball">
                    <div className={`card__request-img-card ${ acaiAdd.chocoball ? 'card__active' : '' }`}>
                        <div className="card_requestAdd--text">
                          <Checkbox
                          checked={acaiAdd.chocoball}
                          onChange={handleChangeAcaiAdd('chocoball')}
                          value="chocoball"
                          color="primary"
                          id="chocoball"
                          inputProps={{
                            'aria-label': 'secondary checkbox',
                          }}
                        /> Chocoball
                        </div>
                    </div>
                  </label>
                </FormGroup>
                <FormGroup check>
                  <label htmlFor="chocolateMesc">
                    <div className={`card__request-img-card ${ acaiAdd.chocolateMesc ? 'card__active' : '' }`}>
                        <div className="card_requestAdd--text">
                          <Checkbox
                          checked={acaiAdd.chocolateMesc}
                          onChange={handleChangeAcaiAdd('chocolateMesc')}
                          value="chocolateMesc"
                          color="primary"
                          id="chocolateMesc"
                          inputProps={{
                            'aria-label': 'secondary checkbox',
                          }}
                        /> Chocolate Mesclado
                        </div>
                    </div>
                  </label>
                </FormGroup>
                <FormGroup check>
                  <label htmlFor="mm">
                    <div className={`card__request-img-card ${ acaiAdd.mm ? 'card__active' : '' }`}>
                        <div className="card_requestAdd--text">
                          <Checkbox
                          checked={acaiAdd.mm}
                          onChange={handleChangeAcaiAdd('mm')}
                          value="mm"
                          color="primary"
                          id="mm"
                          inputProps={{
                            'aria-label': 'secondary checkbox',
                          }}
                        /> m&m
                        </div>
                    </div>
                  </label>  
                </FormGroup>
                <FormGroup check>
                  <label htmlFor="ovomaltine">
                    <div className={`card__request-img-card ${ acaiAdd.ovomaltine ? 'card__active' : '' }`}>
                        <div className="card_requestAdd--text">
                          <Checkbox
                          checked={acaiAdd.ovomaltine}
                          onChange={handleChangeAcaiAdd('ovomaltine')}
                          value="ovomaltine"
                          color="primary"
                          id="ovomaltine"
                          inputProps={{
                            'aria-label': 'secondary checkbox',
                          }}
                        /> Ovomaltine
                        </div>
                    </div>
                  </label>
                </FormGroup>
                <FormGroup check>
                  <label htmlFor="negresco">
                    <div className={`card__request-img-card ${ acaiAdd.negresco ? 'card__active' : '' }`}>
                        <div className="card_requestAdd--text">
                          <Checkbox
                          checked={acaiAdd.negresco}
                          onChange={handleChangeAcaiAdd('negresco')}
                          value="negresco"
                          color="primary"
                          id="negresco"
                          inputProps={{
                            'aria-label': 'secondary checkbox',
                          }}
                        /> Negresco
                        </div>
                    </div>
                  </label>
                </FormGroup>
                <FormGroup check>
                  <label htmlFor="granulado">
                    <div className={`card__request-img-card ${ acaiAdd.granulado ? 'card__active' : '' }`}>
                        <div className="card_requestAdd--text">
                          <Checkbox
                          checked={acaiAdd.granulado}
                          onChange={handleChangeAcaiAdd('granulado')}
                          value="granulado"
                          color="primary"
                          id="granulado"
                          inputProps={{
                            'aria-label': 'secondary checkbox',
                          }}
                        /> Granulado
                        </div>
                    </div>
                  </label>
                </FormGroup>
                <FormGroup check>
                  <label htmlFor="bis">
                    <div className={`card__request-img-card ${ acaiAdd.bis ? 'card__active' : '' }`}>
                        <div className="card_requestAdd--text">
                          <Checkbox
                          checked={acaiAdd.bis}
                          onChange={handleChangeAcaiAdd('bis')}
                          value="bis"
                          color="primary"
                          id="bis"
                          inputProps={{
                            'aria-label': 'secondary checkbox',
                          }}
                        /> Bis
                        </div>
                    </div>
                  </label>
                </FormGroup>
            </div>
            {
              acaiNext === 'y'
              ?
                <div className="btn--next__request animated fadeIn">
                  <button className="btn--before__request">Anterior</button>
                  <button className="btn--after__request">Proximo</button>
                </div>
            :
            null
            }
          </div> 
          <div className="content__container--request">
              <h3 className="container__request--title">
                Escolha a cobertura/calda
              </h3>
              <div className="container__request--option">
                  <FormGroup check>
                    <label htmlFor="morango">
                      <div className={`card__request-img-card ${ acaiAdd.morango ? 'card__active' : '' }`}>
                          <div className="card_requestAdd--text">
                            <Checkbox
                            checked={acaiAdd.morango}
                            onChange={handleChangeAcaiAdd('morango')}
                            value="morango"
                            color="primary"
                            id="morango"
                            inputProps={{
                              'aria-label': 'secondary checkbox',
                            }}
                          /> Morango
                          </div>
                      </div>
                    </label>
                  </FormGroup>
                  <FormGroup check>
                    <label htmlFor="chocolate">
                      <div className={`card__request-img-card ${ acaiAdd.chocolate ? 'card__active' : '' }`}>
                          <div className="card_requestAdd--text">
                            <Checkbox
                            checked={acaiAdd.chocolate}
                            onChange={handleChangeAcaiAdd('chocolate')}
                            value="chocolate"
                            color="primary"
                            id="chocolate"
                            inputProps={{
                              'aria-label': 'secondary checkbox',
                            }}
                          /> Chocolate
                          </div>
                      </div>
                    </label>  
                  </FormGroup>
                  <FormGroup check>
                    <label htmlFor="caramelo">
                      <div className={`card__request-img-card ${ acaiAdd.caramelo ? 'card__active' : '' }`}>
                          <div className="card_requestAdd--text">
                            <Checkbox
                            checked={acaiAdd.caramelo}
                            onChange={handleChangeAcaiAdd('caramelo')}
                            value="caramelo"
                            color="primary"
                            id="caramelo"
                            inputProps={{
                              'aria-label': 'secondary checkbox',
                            }}
                          /> Caramelo
                          </div>
                      </div>
                    </label>
                  </FormGroup>
                </div>
                <div className="btn--next__request animated fadeIn">
                  <button className="btn--before__request">Anterior</button>
                  <button className="btn--after__request">Proximo</button>
                </div>
          </div>
          </>
          : 
          null
          }
        </Form>
      </div>
    </>
  )
}

export default Request;