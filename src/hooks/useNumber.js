import numeral from 'numeral';



function result(format, key = '.00') {
    const isInteger = format.includes(key);
  
    return isInteger ? format.replace(key, '') : format;
  }



export default function useNumber(){

   function fCurrency(number){  
    const format = number ? numeral(number).format('$0,0.00') : '';
    return result(format, '.00');
    }

    return {fCurrency}
}