import _ from "lodash";
// import myName from "./myName";



import * as all from "./myName";
console.log(all.myName("broski"));


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.textContent = myName("moski");
  
    return element;
}
  
document.body.appendChild(component());