// Вывести через запятую ряд длиной n, состоящий из натуральных чисел, квадрат которых не меньше заданного m.

// Входные параметры: длина и значение минимального квадрата
// Выход: строка с рядом чисел

export const getString = (data) => {
  const length = Number(data[0]);
  const number = Number(data[1]);
  
  if(isNaN(length) || isNaN(number)) return `status: 'failed', reason: invlid data`;
  
  let str = [];
  let i = 1;

  while(str.length <= length){
    if (Math.pow(i, 2) >= number) str.push(i);
    i++;
  }
  return str.toString()
}