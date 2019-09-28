import React, { useState, useEffect } from 'react';

import { 
  Spinner, 
  Container, 
  InputGroupAddon, 
  Col, 
  Row, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
  Toast, 
  ToastBody, 
  ToastHeader
} from 'reactstrap';

import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';

import API from '../../../services/api';
import './styles.css';


export default function RegisterRestaurant() {

  const [_cnpj, setCnpj] = useState('');
  const [_userName, setUserName] = useState('');
  const [_telefone, setTelefone] = useState('');
  const [_localX, setLocalX] = useState('');
  const [_descBreve, setDescBreve] = useState('');
  const [_descLong, setDescLong] = useState('');
  const [_file, setFile] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [toast, setToast] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {

  }, [])

  function handleChangeStatus({ meta, file }, status){ 
      if (status === 'done'){
        setFile(file);
        console.log(_file);
      }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSpinner(true);
    if (!_userName || !_cnpj || !_localX || !_descBreve || !_descLong || !_telefone || !_file){
      setSpinner(false);
      setMsg('Preencha todos os dados para cadastrar um novo restaurante!');
      setToast(true);
      setTimeout(handleToast, 7000 );
    }
    else{
      try{
        const { data: { id, nome } } = await API.post('/api/restaurante/', {
          nome: _userName,
          cnpj: _cnpj,
          localizacao: _localX,
          descricao_breve: _descBreve,
          descricao_longa: _descLong,
          status: false,
          telefone: '+55' + _telefone
        })

        setSpinner(false);
        setMsg(`O ${nome} foi cadastrado com sucesso!`);
        setToast(true);
        setTimeout(handleToast, 7000 );
      }
      catch(err){
        setMsg('Erro de conexão com o servidor!');
        setToast(true);
        setTimeout(handleToast, 7000 );
        setSpinner(false);
      }
    }
  }

  function handleToast(){
    setToast(false)
  }

  return (
    <Container className="registerRestaurant">
      <Form>
        <h3 className="registerRestaurant--title">Registrar restaurante</h3>
        <FormGroup>
          <Row>
            <Col>
              <Input className="registerRestaurant--input" onChange={e => setUserName(e.target.value)} type="text" name="userName" id="userName" placeholder="Username" />
            </Col>
            <Col>
              <div className="registerRestaraunt--input-number">
                <InputGroupAddon className="number-parents" addonType="prepend">+55</InputGroupAddon>
                <Input className="number-input" type="text" onChange={e => setTelefone(e.target.value)} placeholder="Celular" />
              </div>
            </Col>
            <Col>
              <Input className="registerRestaurant--input" onChange={e => setCnpj(e.target.value)} type="text" name="cnpj" id="cnpj" placeholder="CNPJ" />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Input className="registerRestaurant--input" type="textarea" onChange={e => setDescBreve(e.target.value)} name="descBreve" id="descBreve" placeholder="Descrição breve" />
        </FormGroup>
        <FormGroup>
          <Input className="registerRestaurant--input" type="textarea" name="descLong" onChange={e => setDescLong(e.target.value)} id="descLong" placeholder="Descrição longa" />
        </FormGroup>
        <FormGroup>
          <Label>Localização</Label>
          <Row>
            <Col>
              <Input className="registerRestaurant--input" type="text" name="localX" onChange={e => setLocalX(e.target.value)} id="localX" placeholder="X" />
            </Col>
            <Col>
              <Input className="registerRestaurant--input" type="text" name="localY" onChange={e => setDescLong(e.target.value)} id="localY" placeholder="Y" />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup >
          <Input type="select" name="tipo" id="tipo">
            <option>Açaí</option>
            <option>Hamburguer</option>
            <option>Pizza</option>
            <option>Variado</option>
            <option>Outro</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="loo">Logo</Label>
          <Dropzone
            onChangeStatus={handleChangeStatus}
            accept="image/*"
            inputContent="Arraste a imagem ou clique para procurar"
            inputWithFilesContent='Adicionar arquivos'
            />
        </FormGroup>
        <div className="registerRestaurant--button">
          <Button onClick={e => handleSubmit(e)}>
            { spinner
              ?
              <Spinner size="sm" />
              :
              <>REGISTRAR</>
            }
          </Button>
        </div>
      </Form>
      {toast
        ?
        <>
        <div className="regisgterRestaurant__containerToast fixed-top">
          <div className="registerRestaurant--toast">
            <Toast>
                <ToastHeader className="ToastHeader">
                  DeliveryGO
                </ToastHeader>
                <ToastBody>
                  { msg }
                </ToastBody>
            </Toast>
          </div>
        </div>
        </>
        :
        null
      }
    </Container>
  );
}
