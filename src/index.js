// import _ from 'lodash';
import print from './print';

// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');

//   element.innerHTML = _.join(['sandra', 'webpack_demo'], ' ');
 
//   btn.innerHTML = 'Click me and check console';
//   btn.onclick  = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());


function getComponent() {
  return import('lodash').then(({ default: _ }) => {
     const element = document.createElement('div');
    const btn = document.createElement('button');


    element.innerHTML = _.join(['sandra', 'webpack_demo'], ' ');
    btn.innerHTML = 'Click me';
    btn.onclick  = print;
    element.onclick = print.bind(null, 'sandra webpack')
  
    return element;
  }).catch((err) => console.log(err))
}

getComponent().then((component) => document.body.appendChild(component))