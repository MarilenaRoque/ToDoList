// Factory Function for Project Creation
const Project = (title, test) => {
    return { title, test};
}

// Function to add new Project --Form Submit Listener --
const addProject = (myProjects) => {
    const title = document.getElementById('title').value;
    const newProject = Project(title);
    myProjects.push(newProject);
    console.log(myProjects);
    localStorage.setItem('projects', JSON.stringify(myProjects));
}


export default addProject;

