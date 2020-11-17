import * as load from './load';
import page from './page';
import setLocalStorage from './storage';

// Factory Function for Project Creation
const Project = (title, todos = []) => ({ title, todos });

// Function to add new Project --Form Submit Listener --
const addProject = (myProjects, title) => {
  let result = '';
  if (title) {
    const newProject = Project(title);
    myProjects.push(newProject);
    setLocalStorage(myProjects);
    load.reload();
    result = newProject;
  } else {
    page.displayWarning('project-warning');
    result = 'Fail';
  }
  return result;
};

// Remove ToDo
const removeToDo = (myProjects, idxProject, idxToDo) => {
  const newMyProjects = [...myProjects];
  newMyProjects[idxProject].todos.splice(idxToDo, 1);
  setLocalStorage(newMyProjects);
  return newMyProjects;
};

export { addProject, removeToDo };
