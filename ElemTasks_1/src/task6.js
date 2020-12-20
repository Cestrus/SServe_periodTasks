// Вывести через запятую ряд длиной n, состоящий из натуральных чисел, квадрат которых не меньше заданного m.

// Входные параметры: длина и значение минимального квадрата
// Выход: строка с рядом чисел

export const getString = (length, number) => {
  if(isNaN(length) || isNaN(number)) return `status: 'failed', reason: invlid data`;
  let str = [];
  let i = 1;

  while(str.length <= length){
    if (Math.pow(i, 2) >= number) str.push(i);
    i++;
  }
  return str.toString()
}