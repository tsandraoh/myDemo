import _ from 'lodash';
import './style.css';
import Bgc from './bgc.jpg';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['sandra', 'webpack'], ' ');
  element.classList.add('sandra');

  var myBgc = new Image();
  myBgc.src = Bgc;
  element.appendChild(myBgc);
  
  return element;
}

document.body.appendChild(component());
