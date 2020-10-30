const projectForm = document.getElementById("formProject");
const toDoForm = document.getElementById("formToDo");
const selectProject = document.getElementById("span-select-project");
const selectTag = document.createElement('select');
const contentArea = document.getElementById("content");
const divBoards = document.createElement('div');



const page = (() => {
    //Hide and Display Project Form
    const displayProjectForm = () => {
        if (!toDoForm.classList.contains("display-none")) {
            toDoForm.classList.add("display-none");
        }
        projectForm.classList.toggle("display-none");
    }

    // Hide and Display To Do Form
    const displayToDoForm = (myProjects) => {
        if (!projectForm.classList.contains("display-none")) {
            projectForm.classList.add("display-none");
        }
        // Set the select and options tags to choose the ToDo's project
        setProjectOptions(myProjects);
        toDoForm.classList.toggle("display-none");
    }

    // Creating Boards to Display Projects
    const displayProjectsBoards = (myProjects) => {
        myProjects.forEach(createBoard);
        contentArea.appendChild(divBoards);
    }

    return {displayProjectForm, displayToDoForm, displayProjectsBoards};
})();

// Create the select tag on the DOM
const setProjectOptions = (myProjects) => {
    selectTag.setAttribute("id", "project");
    selectTag.setAttribute("name", "project");
    myProjects.forEach(buildOption);
    selectProject.appendChild(selectTag);
}

//Create the Options tag
function buildOption(project, index) {
    const newOption = document.createElement('option');
    newOption.innerText = project.title;
    newOption.setAttribute("value", project.title);
    selectTag.appendChild(newOption);
}

// CreateBoard
function createBoard(project) {
    const board = document.createElement('div');
    board.setAttribute('class', 'board');
    board.innerHTML = `<h2><img class='pin' src='../src/images/pin.svg' height='35px'>${project.title}</h2>`;
    divBoards.appendChild(board);
}

export default page;