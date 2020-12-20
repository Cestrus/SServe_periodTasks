// Вывести треугольники в порядке убывания их площади.

// Входные параметры: массив объектов треугольник
// Выход: упорядоченный массив имён треугольников


export const sortTriangles = (arrRect) => {  
  if(!Array.isArray(arrRect)) return `status: 'failed', reason: invlid data`;
  const arr = [];
  
  for (let i = 0; i < arrRect.length; i++){
    arr.push({'vertices': arrRect[i]['vertices'], 'square': geron(arrRect[i])});
  }

  return arr.sort((a, b) => a.square > b.square? -1 : 1);
}

const geron = (tri) => {
  let arrSides =  Object.values(tri).filter(el => !isNaN(el))
  let per = arrSides.reduce((acc, sum) => acc + sum, 0);
  return +(Math.sqrt(per * (per - arrSides[0]) * (per - arrSides[1]) * (per - arrSides[2]))).toFixed(2);
}

