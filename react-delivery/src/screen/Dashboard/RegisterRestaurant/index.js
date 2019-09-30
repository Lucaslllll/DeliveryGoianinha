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
} from 'reactstrap';

import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import ToastWarn from '../../../components/ToastWarn';
import InputMask from 'react-input-mask';

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
  const [toastError, setToastError] = useState(false);
  const [msg, setMsg] = useState('');
  const [showCnpj, setShowCnpj] = useState('');

  useEffect(() => {

  }, [])

  function handleCheckCNPJ(cnpj = _cnpj){
    cnpj = cnpj.replace('.', '');
    cnpj = cnpj.replace('.', '');
    cnpj = cnpj.replace('/', '');
    cnpj = cnpj.replace('-', '');

    console.log(cnpj)
    const firstDigitPesoCnpj = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sumCnpj = 0;
    firstDigitPesoCnpj.forEach((peso, indice) => {
      const res = cnpj[indice]*peso;
      sumCnpj += res;
    });

    const restFirstDigit = sumCnpj % 11;
    if(restFirstDigit <= 2){
      if(0 == cnpj[12]){
        let secondDigitPesoCnpj = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        sumCnpj = 0;
        secondDigitPesoCnpj.forEach((peso, indice) => {
          const res = cnpj[indice]*peso;
          sumCnpj += res;
        });

        const restSecondDigit = sumCnpj % 11;

        if(restSecondDigit <= 2){
          if(0 == cnpj[13]){
            return true;
          }
          else{
            return false
          }
        }else{
          const secondVerifyingDigit = 11 - restSecondDigit;
          if (secondVerifyingDigit == cnpj[13]){
            return true;
          }else{
            return false;
          }
        }
      }else{
        return false
      }
    }else{
      const firstVerifyingDigit = 11 - restFirstDigit;
      if(firstVerifyingDigit == cnpj[12]){
        let secondDigitPesoCnpj = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        sumCnpj = 0;
        secondDigitPesoCnpj.forEach((peso, indice) => {
          const res = cnpj[indice]*peso;
          sumCnpj += res;
        });

        const restSecondDigit = sumCnpj % 11;

        if(restSecondDigit <= 2){
          if(0 == cnpj[13]){
            return true;
          }
          else{
            return false;
          }
        }else{
          const secondVerifyingDigit = 11 - restSecondDigit;
          if (secondVerifyingDigit == cnpj[13]){
            return true;
          }else{
            return false;
          }
        }
      }else{
        return false;
      }
    }
  }

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
      handleShowToast('Preencha todos os dados para cadastrar um novo restaurante!', true);
    }
    else{
      if(handleCheckCNPJ()){
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
          
          handleShowToast(`O ${nome} foi cadastrado com sucesso!`, false);

        }
        catch(err){
          handleShowToast('Erro de conexão com o servidor!', true);
        }
      }else{
        handleShowToast(`O CNPJ: ${_cnpj} é inválido!`, true);
      }
    }
  }

  function handleShowToast(msg, toastError){
    setToastError(toastError);
    setMsg(msg);
    setToast(true);
    setSpinner(false);
    setTimeout(handleDeacToast, 7000 );
  }

  function handleDeacToast(){
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
                <InputMask onChange={e => setTelefone(e.target.value)} placeholder="Celular" className="number-input form-control" mask="(99) 99999 - 9999" />
              </div>
            </Col>
            <Col>
              <InputMask onChange={e => setCnpj(e.target.value)} placeholder="CNPJ" className="registerRestaurant--input form-control" mask="99.999.999/9999-99" />
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
          <Row>
            <Col>
              <Label>Localização</Label>
              <Row>
                <Col>
                  <Input className="registerRestaurant--input" type="text" name="localX" onChange={e => setLocalX(e.target.value)} id="localX" placeholder="X" />
                </Col>
                <Col>
                  <Input className="registerRestaurant--input" type="text" name="localY" onChange={e => setDescLong(e.target.value)} id="localY" placeholder="Y" />
                </Col>
              </Row>
            </Col>
            <Col>
              <Label>Tipo</Label>
              <Input type="select" name="tipo" id="tipo">
                <option>Açaí</option>
                <option>Hamburguer</option>
                <option>Pizza</option>
                <option>Variado</option>
                <option>Outro</option>
              </Input>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup >
          
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
      {
        toast
        ?
        <>
          <ToastWarn
            msg={msg}
            toastError={toastError}
          />
        </>
        :
        null
      }
    </Container>
  );
}
