import * as load from './load';
import page from './page';
import setLocalStorage from './storage'

const setColor = (priority) => {
  let color = '';
  if (priority === 'Low') {
    color = '#82d37a';
  } if (priority === 'Medium') {
    color = '#f8e953';
  } if (priority === 'High') {
    color = '#ee9193';
  }
  return color;
};

// Factory Function for ToDo creation
const toDo = (title, date, description, priority, project) => {
  const color = setColor(priority);
  return {
    title, date, description, priority, project, color,
  };
};

// Set Storage on myProjects, choosing the right project to insert on
const setProjectStorage = (myProjects, newToDo) => {
  const project = myProjects.findIndex((el) => el.title === newToDo.project);
  const projectToDo = myProjects[project].todos;
  projectToDo.push(newToDo);
  setLocalStorage(myProjects);
};


// Create a new Todo -- triggered by submit to do button
const addToDo = (myProjects) => {
  const title = document.getElementById('title-todo').value;
  const date = document.getElementById('date').value;
  const description = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;
  const project = document.getElementById('project').value;
  if (title && date && description && priority) {
    const newToDo = toDo(title, date, description, priority, project);
    setProjectStorage(myProjects, newToDo);
    load.reload();
  } else {
    page.displayWarning('todo-warning');
  }
};


const editToDo = (todo, title, date, description, priority) => {
  const editedToDo = todo;
  if (title) { editedToDo.title = title; }
  if (date) { editedToDo.date = date; }
  editedToDo.description = description;
  if (priority !== 'nil') {
    editedToDo.priority = priority;
    const color = setColor(priority);
    editedToDo.color = color;
  }
  return editedToDo;
};

const submitToDo = (myProjects, idxProject, idxToDo) => {
  const newMyProjects = [...myProjects];
  const todo = newMyProjects[idxProject].todos[idxToDo];

  // getting forms values
  const title = document.getElementById('title-edit').value;
  const date = document.getElementById('edit-date').value;
  const description = document.getElementById('edit-description').value;
  const priority = document.getElementById('edit-priority').value;
  newMyProjects[idxProject].todos[idxToDo] = editToDo(todo, title, date, description, priority);
  setLocalStorage(newMyProjects);
  return newMyProjects;
};


export { addToDo, submitToDo };