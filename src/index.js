 import './style/template.css';
 import addProject from './project';
 import page from './page';
 import addToDo from './toDo';
 import * as load from './load';
// import Icon from './icon.png';
console.log("I am working just perfect splendid!")

//Initializing my Projects
let myProjects=[];
myProjects = load.pageInit();

page.displayProjectsBoards(myProjects);




// Event Listeners
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'submit-project') {
      addProject(myProjects);
      load.reload();
    } else if (e.target && e.target.id === 'new-project') {
        page.displayProjectForm();
    } else if (e.target && e.target.id === "new-todo") {
        page.displayToDoForm(myProjects);
    }else if (e.target && e.target.id === "submit-todo") {
        addToDo(myProjects);
        load.reload();
    }
});



