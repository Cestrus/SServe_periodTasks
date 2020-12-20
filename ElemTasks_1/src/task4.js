// Проверить является ли число или его часть палиндромом. Например, число 1234437 не является палиндромом, но является палиндромом его часть 3443.
// Числа меньшие, чем 10 палиндромом не считать.

// Входные параметры: число
// Выход: извлечённый из числа палиндром либо 0, если извлечение не удалось.


export const isPalindrom = (number) => {
  if(isNaN(number)) return `status: 'failed', reason: invlid data`;
  let num = number.toString();
  let polindrom = 0;

  for (let i = 0; i < num.length - 2; i++){
    let index = num.indexOf(num[i], i + 2)
    if(index > 0){
      let substr = [...num].splice(i, index + 1 - i);
      if (+substr.join('') === +substr.reverse().join('')){
        polindrom = substr.join(''); 
        break;  
      }    
    }
  }

  return polindrom ? `polindrom: ${polindrom}` : `there aren't any polindroms`;
}