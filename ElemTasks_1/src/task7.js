// Вывести все числа Фибоначчи, которые удовлетворяют переданному в функцию ограничению: находятся в указанном диапазоне, 
// либо имеют указанную длину.

// Входные параметры: объект context с полями min и max, либо с полем length 
// Выход: массив чисел


export const showFib = (obj = {'min': 1, 'max': 100, 'length': 10}) => {
  if(typeof(obj) !== 'object' || Array.isArray(obj)) return `status: 'failed', reason: invlid data`;
  const {min, max, length} = obj;
  const arr = [];

  for (let i = 0, sum = 1; sum > max || length !== arr.length; ){
    if (sum >= min) arr.push(i);
    let tmp = sum;
    sum += i;
    i = tmp;
  }
  return arr;
}
