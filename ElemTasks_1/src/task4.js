// Проверить является ли число или его часть палиндромом. Например, число 1234437 не является палиндромом, но является палиндромом его часть 3443.
// Числа меньшие, чем 10 палиндромом не считать.

// Входные параметры: число
// Выход: извлечённый из числа палиндром либо 0, если извлечение не удалось.


export const isPalindrom = (number) => {
  let num = Number(number[0]);

  if(isNaN(num)) return `status: 'failed', reason: invlid data`;

  let numStr = num.toString();
  let polindrom = 0;

  for (let i = 0; i < numStr.length - 2; i++){
    let index = numStr.indexOf(numStr[i], i + 2)
    if(index > 0){
      let substr = [...numStr].splice(i, index + 1 - i);
      if ( +substr.join('') === +substr.reverse().join('')){
        polindrom = substr.join(''); 
        break;  
      }    
    }
  }

  return polindrom ? `polindrom: ${polindrom}` : `there aren't any polindroms`;
}