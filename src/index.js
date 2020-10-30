 import './style/template.css';
 import addProject from './project';
 import pageInit from './load';
 import page from './page';
// import Icon from './icon.png';
console.log("I am working just perfect splendid!")

//Initializing my Projects
let myProjects=[];
myProjects = pageInit();




// Event Listeners
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'submit-project') {
      addProject(myProjects);
    } else if (e.target && e.target.id === 'new-project') {
        page.displayProjectForm();
    } else if (e.target && e.target.id === "new-todo") {
        page.displayToDoForm(myProjects);
    }
});



