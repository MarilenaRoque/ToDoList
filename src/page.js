const projectForm = document.getElementById("formProject");
const toDoForm = document.getElementById("formToDo");
const selectProject = document.getElementById("span-select-project");
const selectTag = document.createElement('select');


const page = (() => {
    //Hide and Display Project Form
    const displayProjectForm = () => {
        projectForm.classList.toggle("display-none");
    }

    // Hide and Display To Do Form
    const displayToDoForm = (myProjects) => {
        setProjectOptions(myProjects);
        toDoForm.classList.toggle("display-none");
    }

    return {displayProjectForm, displayToDoForm};
})();

const setProjectOptions = (myProjects) => {
    selectTag.setAttribute("id", "project");
    selectTag.setAttribute("name", "project");
    myProjects.forEach(buildOption);
    selectProject.appendChild(selectTag);
}

function buildOption(project, index) {
    const newOption = document.createElement('option');
    newOption.innerText = project.title;
    newOption.setAttribute("value", project.title);
    selectTag.appendChild(newOption);
}

export default page;