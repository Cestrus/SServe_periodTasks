import { renderChessDesk } from './src/task1.js';
import { envelopeInside } from './src/task2.js';
import { sortTriangles } from './src/task3.js';
import { isPalindrom } from './src/task4.js';
import { countHappyTickets } from './src/task5.js';
import { getString } from './src/task6.js';
import { showFib } from './src/task7.js';

document.body.addEventListener('click', handleClick);

function handleClick (ev) {
  const btn = ev.target;

  switch(true){
    case (btn.classList.contains('btn-task1')):{
      console.log('=== task 1 ===');
      console.log( renderChessDesk (getData()));
      break;
    }
    case (btn.classList.contains('btn-task2')):{
      console.log('=== task 2 ===');
      console.log(envelopeInside ({a: 10, b: 20}, {a: 7, b: 15}));
      console.log(envelopeInside ({a: 10, b: 15}, {a: 12, b: 12}));
      break;
    }
    case (btn.classList.contains('btn-task3')):{
      console.log('=== task 3 ===');
      console.log(sortTriangles([{vertices: 'ABC', a: 10, b: 20, c: 22.36}, 
                                {vertices: 'DFE', d: 20, f: 10, e: 26},
                                {vertices: 'GHI', g: 5, h: 22, i: 12.36}]));
      break;
    }
    case (btn.classList.contains('btn-task4')):{
      console.log('=== task 4 ===');
      console.log( isPalindrom(getData()));
      break;
    }
    case (btn.classList.contains('btn-task5')):{
      console.log('=== task 5 ===');
      console.log(countHappyTickets());
      break;
    }
    case (btn.classList.contains('btn-task6')):{
      console.log('=== task 6 ===');
      console.log( getString(getData()));
      break;
    }
    case (btn.classList.contains('btn-task7')):{
      console.log('=== task 7 ===');
      console.log(showFib());
      break;
    }
    default:
      console.log('choose task!')
  }

}

function getData(){
  const data_1 = document.querySelector('.myInput-1').value;
  const data_2 = document.querySelector('.myInput-2').value;
  const data_3 = document.querySelector('.myInput-3').value;
  return [data_1, data_2, data_3];
}
