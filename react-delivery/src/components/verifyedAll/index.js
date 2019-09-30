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

    const verifyngTel = function(tel = replaceTel(e)){      
      if(tel.length == 11){
        return [true, tel];
      }else{
        return [false];
      }
    }
    
    return verifyngTel();
}

export const verifyedCnpj = (cnpj) => {
    cnpj = cnpj.replace('.', '');
    cnpj = cnpj.replace('.', '');
    cnpj = cnpj.replace('/', '');
    cnpj = cnpj.replace('-', '');

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


export default verifyedTel;