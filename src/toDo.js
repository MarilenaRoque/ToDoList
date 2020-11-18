import * as load from './load';
import page from './page';
import setLocalStorage from './storage';

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
const addToDo = (myProjects, toDoInfo) => {
  let status = '';
  if (toDoInfo.title && toDoInfo.date && toDoInfo.description && toDoInfo.priority) {
    const newToDo = toDo(toDoInfo.title,
      toDoInfo.date,
      toDoInfo.description,
      toDoInfo.priority,
      toDoInfo.project);
    setProjectStorage(myProjects, newToDo);
    load.reload();
    status = newToDo;
  } else {
    page.displayWarning('todo-warning');
    status = 'Fail';
  }
  return status;
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

const submitToDo = (myProjects, idxProject, idxToDo, newToDoInfo) => {
  const newMyProjects = [...myProjects];
  const todo = newMyProjects[idxProject].todos[idxToDo];

  // getting forms values
  const { title } = newToDoInfo;
  const { date } = newToDoInfo;
  const { description } = newToDoInfo;
  const { priority } = newToDoInfo;
  newMyProjects[idxProject].todos[idxToDo] = editToDo(todo, title, date, description, priority);
  setLocalStorage(newMyProjects);
  return newMyProjects;
};

export { addToDo, submitToDo };