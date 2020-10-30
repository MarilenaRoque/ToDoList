// Factory Function for Project Creation
const Project = (title, todos=[]) => {
    return {title, todos};
}

// Function to add new Project --Form Submit Listener --
const addProject = (myProjects) => {
    const title = document.getElementById('title').value;
    const newProject = Project(title);
    myProjects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(myProjects));
    document.getElementById("formTagProject").reset();
}


export default addProject;

