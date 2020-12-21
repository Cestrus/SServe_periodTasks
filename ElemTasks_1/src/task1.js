// Входные параметры: длина, ширина, символ для отображения.
// Выход: строка с представлением шахматной доски

export const renderChessDesk = (param) => {  
  const length = Number(param[0]);
  const hight = Number(param[1]);
  const sign = param[2];
  let str = '';
  
  if(isInvalidData(length, hight, sign)) return `status: 'failed', reason: sign isn't string or number type`;
  
  for (let i = 1; i <= length; i++){
    for (let j = 1; j <= hight; j++){
      if (i%2 === 0){
        if (j%2 === 0){
          str += sign;
        } else {
          str += ' ';
        }
      } else {
        if (j%2 === 0){
          str += ' ';
        } else {
          str += sign;
        }
      }
    }
    str += '\n';
  }
  return str;
}

function isInvalidData (length, hight, sign){
  if (isNaN( length ) ||
      isNaN( hight ) ||
      (typeof(sign) !== 'string' && typeof(sign) !== 'number'))
  return true;
}
