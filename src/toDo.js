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
    const newToDo = toDo(title, date, description, priority, project);
    console.log(newToDo);
    document.getElementById("formTagToDo").reset();
    setProjectStorage(myProjects, newToDo)
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

export default addToDo;