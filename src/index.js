 import './style/template.css';
 import addProject from './project';
// import Icon from './icon.png';
console.log("I am working just perfect splendid!")

document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'submit-project') {
      addProject();
    } 
  });