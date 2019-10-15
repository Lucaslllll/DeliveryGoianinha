import React from 'react';

import './styles.css';

import CardBeforeMain from '../../../components/cardBeforeMain';

function BeforeMain() {
  return(
    <>
        <CardBeforeMain nameCard="Pizza" hCard="300px" linkCard="/Home/Pizza" bgImg="https://assets3.thrillist.com/v1/image/2725860/size/gn-gift_guide_variable_c.jpg" />
        <CardBeforeMain nameCard="Hamburguer" hCard="300px" classCard="cardLongHeight" bgImg="https://portal.minervafoods.com/files/como_fazer_hamburguer_caseiro.jpg" />
        <CardBeforeMain nameCard="Açaí" hCard="300px" linkCard="/Home/Acai" classCard="cardLongHeight" bgImg="https://portaldozacarias.com.br/site//arquivos/imagens/imgeditor/acai-polpa-frutas1117-1400x800.jpg" />
    </>
  );
}


export default BeforeMain;