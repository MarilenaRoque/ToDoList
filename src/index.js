import './style/style.css';
import page from './page';
import * as toDo from './toDo';
import * as load from './load';
import * as project from './project';

// Initializing my Projects
let myProjects = [];
myProjects = load.pageInit();
console.log(myProjects);
page.displayProjectsBoards(myProjects);

// Event Listeners
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'submit-project') {
    const title = page.getTitle();
    project.addProject(myProjects, title);
  } else if (e.target && e.target.id === 'new-project') {
    page.displayProjectForm();
  } else if (e.target && e.target.id === 'new-todo') {
    page.displayToDoForm(myProjects);
  } else if (e.target && e.target.id === 'submit-todo') {
    const info = page.getToDoInfo();
    toDo.addToDo(myProjects, info);
  } else if (e.target && (e.target.id).includes('remove-')) {
    const buttonIndex = e.target.id.split('-');
    myProjects = project.removeToDo(myProjects, buttonIndex[1], buttonIndex[2]);
    load.reload();
  } else if ((e.target && e.target.id === 'close') || (e.target && e.target.id === 'edit-form')) {
    page.hideEditForm();
  } else if (e.target && (e.target.id).includes('btnedit')) {
    const buttonIndex = e.target.id.split('-');
    page.displayEditForm(myProjects, buttonIndex[1], buttonIndex[2]);
  } else if (e.target && (e.target.id).includes('change')) {
    const buttonIndex = e.target.id.split('-');
    myProjects = toDo.submitToDo(myProjects, buttonIndex[1], buttonIndex[2]);
    load.reload();
  }
});
