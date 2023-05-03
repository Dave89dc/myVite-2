import './style.css';
import {CatService} from './service/data-service';
import confetti from 'canvas-confetti';

CatService.getFacts().then(data => {
  
  displayData(data);
  fireConfetti();

});

function displayData(data){

  const list = document.getElementById('facts-list');
  for (const factObject of data) {
      list.innerHTML += `<li>${factObject.fact}</li>`;
  };

};

function fireConfetti(){

  confetti({
    particleCount: 500,
    spread: 80,
    origin: { y: 0.6 }
  });

};