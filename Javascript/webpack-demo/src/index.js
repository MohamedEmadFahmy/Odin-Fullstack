import _ from "lodash";
import './style.css';
import Icon from './mane.jpeg';
// import myName from "./myName";



import * as all from "./myName";
console.log(all.myName("broski"));


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = all.myName("moski");
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
  
    return element;
}
  
document.body.appendChild(component());