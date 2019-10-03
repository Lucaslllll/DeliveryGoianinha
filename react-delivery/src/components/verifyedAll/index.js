export const verifyedTel = e => {
    const replaceTel = function(tel){
      tel = tel.replace('(', '');
      tel = tel.replace(')', '');
      tel = tel.replace(' ', '');
      tel = tel.replace(' ', '');
      tel = tel.replace('-', '');
      tel = tel.replace(' ', '');
      return tel;
    }

    const verifyngTel = function(tel){      
      if(tel.length == 11){
        return [true, tel];
      }else{
        return [false];
      }
    }
    
    return verifyngTel(replaceTel(e));
}

export const verifyedCnpj = e => {

    const replaceCnpj = function(cnpj){
      cnpj = cnpj.replace('.', '');
      cnpj = cnpj.replace('.', '');
      cnpj = cnpj.replace('/', '');
      cnpj = cnpj.replace('-', '');
      
      return cnpj;
    }
    
    const sumCnpj = function(weight, cnpj = replaceCnpj(e), sum = 0 ){
      weight.forEach((burden, indice) => {
        const res = cnpj[indice]*burden;
        sum += res;
      });
      return sum;
    }

    const restDigit = function(sum){
      return sum % 11;
    }


    const firstDigitCnpj = function(cnpj, firstDigit = restDigit(sumCnpj([5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]))){
      if(firstDigit < 2){
        if(0 == cnpj[12]){
          return true;
          
        }else{
          return false;
        }
      }else{
        firstDigit = 11 - firstDigit;
        if(firstDigit == cnpj[12]){    
          return true;
        }else{
          return false;
        }
      }    
    }

    const secondDigitCnpj = function(cnpj, secondDigit = restDigit(sumCnpj([6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]))){
      if(secondDigit < 2){
        if(0 == cnpj[13]){
          return true;
        }else{
          return false;
        }
      }else{
        secondDigit = 11 - secondDigit;
        if(secondDigit == cnpj[13]){
          return true;
        }else{
          return false;
        }
      }
    }

    const checkCnpj = function(cnpj = replaceCnpj(e)){
      if(firstDigitCnpj(cnpj)){
        if(secondDigitCnpj(cnpj)){
          return [true, cnpj];
        }else{
          console.log('AQUI É')
          return [false];
        }  
      }else{
        console.log('AQUI O')
        return [false];
      }
    }


    return checkCnpj();
}


export default verifyedTel;