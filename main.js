import './style.css';
import './data-service';
import {getCatsPage} from './data-service';

console.log('ciao');

getCatsPage().then(data => {
  console.log(data);
})