 import './style/template.css';
 import addProject from './project';
 import pageInit from './load';
// import Icon from './icon.png';
console.log("I am working just perfect splendid!")

//Initializing my Projects
let myProjects=[];
myProjects = pageInit();



// Event Listeners
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'submit-project') {
      addProject(myProjects);
    } 
});



