const Project = (title, test) => {
    return { title, test};
}

let myLibrary = [];

const addProject = () => {
    const title = document.getElementById('title').value;
    const newProject = Project(title);
    console.log(newProject);
}

export default addProject;

