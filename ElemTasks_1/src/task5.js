// Определить программно какой вариант подсчёта счастливых билетов даст их большее количество на заданном интервале. 

// Входные параметры: объект context с полями min и max
// Выход: объект с информацией о победившем методе и количестве счастливых билетов для каждого способа подсчёта.


const NUMBER_LENGTH = 6;

export const countHappyTickets = (contxt = {min: 101901, max: 103333}) => {
  if(typeof(contxt) !== 'object' || Array.isArray(contxt)) return `status: 'failed', reason: invlid data`;
  let counter_1 = method_1(contxt);
  let counter_2 = method_2(contxt);
  let winner = (counter_1 > counter_2)? 'method 1' : 'method 2';

  const result = {'method 1': `${counter_1}`, 'method 2': `${counter_2}`, 'winner: ': `${winner}`};
  return result
}

const method_1 = (contxt) => {
  let count = 0;
  let max = +contxt.max;
  let min = +contxt.min;

  for (let i = 0; i < max - min; i++){
    if (isHappy_1(normNum(min + i))) count++;
  }
  return count;
}

const method_2 = (contxt) => {
  let count = 0;
  let max = +contxt.max;
  let min = +contxt.min;

  for (let i = 0; i < max - min; i++){
    if (isHappy_2(normNum(min + i))) count++;
  }
  return count;
}

const normNum = (num) => {
  let length = num.toString().length;
  if(length === 4) return '00' + num;
  if(length === 5) return '0' + num;
  if(length === 6) return num.toString();
};

const isHappy_1 = (str) => {
  let sum1 = +str[0] + +str[1] + +str[2];
  let sum2 = +str[3] + +str[4] + +str[5];
  return sum1 === sum2;
}

const isHappy_2 = (str) => {
  let sum1 = 0;
  let sum2 = 0;
  for(let i = 0; i < NUMBER_LENGTH; i++){
    if(str[i] %2 === 0) sum1 += +str[i];
    else sum2 += +str[i];
  }
  return sum1 === sum2;
}