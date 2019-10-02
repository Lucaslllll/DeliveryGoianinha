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
      const rest = sum % 11;
      const total = (11 - rest);
      return total;
    }


    const firstDigitCnpj = function(cnpj, firstDigit = restDigit(sumCnpj([5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]))){
      console.log(firstDigit);
      if(firstDigit <= 2){
        if(0 == cnpj[12]){
          console.log('Deu certo')
          return true;
          
        }else{
          console.log('Deu errado')
          return false;
        }
      }else{
        console.log(cnpj)
        console.log(cnpj[12])
        console.log(firstDigit)
        if(firstDigit == cnpj[12]){
          console.log('Deu certoo')
          return true;
        }else{
          console.log('Deu erradoo')
          return false;
        }
      }    
    }

    const secondDigitCnpj = function(cnpj, secondDigit = restDigit(sumCnpj([6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]))){
      console.log(secondDigit);
      if(secondDigit <= 2){
        if(0 == cnpj[13]){
          return true;
        }else{
          return false;
        }
      }else{
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
          return [false];
        }  
      }else{
        return [false];
      }
    }


    return checkCnpj();
}


export default verifyedTel;