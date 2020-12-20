// Есть два конверта со сторонами (a,b) и (c,d). Требуется определить, можно ли один конверт вложить в другой. 
// Программа должна обрабатывать ввод чисел с плавающей точкой. 

// Входные параметры: объекты конверт1 и конверт2 
// Выход: номер конверта, если вложение возможно, 0 – если вложение невозможно.

export const envelopeInside = (envlp_1, envlp_2) => {
  if(typeof(envlp_1) !== 'object' || typeof(envlp_1) !== 'object') return `status: 'failed', reason: invlid data`;
  
  const env_1 = Object.values(envlp_1);
  const env_2 = Object.values(envlp_2);

  if(!checkArr(env_1) || !checkArr(env_2)) return `status: 'failed', reason: invlid data`;

  let big = (env_1.reduce((acc, curr) => acc * curr) > env_2.reduce((acc, curr) => acc * curr))? env_1 : env_2;
  let small = (big === env_1)? env_2 : env_1; 
  
  
  return (Math.max.apply(null, small) < Math.min.apply(null, big) 
            || Math.max.apply(null, small) < Math.max.apply(null, big) && Math.min.apply(null, small) < Math.min.apply(null, big))? 
            big : 0;
}

const checkArr = (arr) => {
  return (isNaN(arr[0] || isNaN(arr[1]))? false : true);
}



