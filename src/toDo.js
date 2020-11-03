import * as load from './load';
import page from './page';

// Factory Function for ToDo creation
const toDo = (title, date, description, priority, project) => {
    return {title, date, description, priority, project};
}


// Create a new Todo -- triggered by submit to do button
const addToDo = (myProjects) => {
    const title = document.getElementById('title-todo').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;
    if (title && date && description && priority) {
        const newToDo = toDo(title, date, description, priority, project);
        setProjectStorage(myProjects, newToDo)
        load.reload();
    } else {
        page.displayWarning("todo-warning");
    }
}


// Set Storage on myProjects, choosing the right project to insert on
const setProjectStorage = (myProjects, newToDo) => {
    const project = myProjects.findIndex((el) => {
        return el.title == newToDo.project;
    });
    const projectToDo = myProjects[project].todos
    projectToDo.push(newToDo);
    localStorage.setItem('projects', JSON.stringify(myProjects));
}

const submitToDo = (myProjects, idxProject, idxToDo) => {
    const newMyProjects = [...myProjects]
    const todo = newMyProjects[idxProject].todos[idxToDo]

    //getting forms values
    const title = document.getElementById('title-edit').value;
    const date = document.getElementById('edit-date').value;
    const description = document.getElementById('edit-description').value;
    const priority = document.getElementById('edit-priority').value;
    console.log(title, date, description, priority);
    newMyProjects[idxProject].todos[idxToDo] = editToDo(todo, title, date, description, priority);
    localStorage.setItem('projects', JSON.stringify(newMyProjects));
    return newMyProjects;
}

const editToDo = (todo, title, date, description, priority) => {
    const editedToDo = todo;
    if (title) { editedToDo.title = title; }
    if (date) { editedToDo.date= date; }
    editedToDo.description= description; 
    if (priority !== 'nil') { editedToDo.priority= priority; }
    return editedToDo;
}

export {addToDo, submitToDo};