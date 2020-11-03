// Factory Function for Project Creation
const Project = (title, todos=[]) => {
    return {title, todos};
}

// Function to add new Project --Form Submit Listener --
const addProject = (myProjects) => {
    const title = document.getElementById('title').value;
    const newProject = Project(title);
    console.log(newProject);
    myProjects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(myProjects));
    document.getElementById("formTagProject").reset();
}

// Remove ToDo
const removeToDo = (myProjects, idxProject, idxToDo) => {
    const newMyProjects = [...myProjects]
    newMyProjects[idxProject].todos.splice(idxToDo, 1);
   localStorage.setItem('projects', JSON.stringify(newMyProjects));
    return newMyProjects;    
}



export {addProject, removeToDo};

