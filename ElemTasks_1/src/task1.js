// Входные параметры: длина, ширина, символ для отображения.
// Выход: строка с представлением шахматной доски

export const renderChessDesk = (length = 0, hight = 0, sign = '#') => {
  let str = '';
  if(typeof(sign) !== 'string' && typeof(sign) !== 'number') return `status: 'failed', reason: sign isn't string or number type`;
  
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
