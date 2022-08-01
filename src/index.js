import _ from 'lodash';
// import './style.css';
// import Bgc from './bgc.jpg';
// import Data from './data.xml';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['sandra', 'webpack'], ' ');
  // element.classList.add('sandra');

  // var myBgc = new Image();
  // myBgc.src = Bgc;
  // element.appendChild(myBgc);

  // console.log(Data, '0000', '----------Data');
  
  return element;
}

document.body.appendChild(component());
