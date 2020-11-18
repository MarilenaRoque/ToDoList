const projectForm = document.getElementById('formProject');
const toDoForm = document.getElementById('formToDo');
const selectProject = document.getElementById('span-select-project');
const selectTag = document.createElement('select');
const contentArea = document.getElementById('content');
const divBoards = document.createElement('div');

// Create the Options tag
function buildOption(project) {
  const newOption = document.createElement('option');
  newOption.innerText = project.title;
  newOption.setAttribute('value', project.title);
  selectTag.appendChild(newOption);
}

// Create the select tag on the DOM
const setProjectOptions = (myProjects) => {
  selectTag.setAttribute('id', 'project');
  selectTag.setAttribute('name', 'project');
  myProjects.forEach(buildOption);
  selectProject.appendChild(selectTag);
};

// Create Post
const createPost = (item, idxToDo, grid, idxProject) => {
  const toDoItem = document.createElement('div');
  toDoItem.setAttribute('class', 'todo-item');
  toDoItem.style.backgroundColor = item.color;
  toDoItem.innerHTML = `<h3><img class="pin" src="../src/images/pin.svg" height="18px">${item.title} </h3>`;

  // Creating div for date and priority information
  const divInfo = document.createElement('div');
  divInfo.innerHTML = `<p> Date:  ${item.date} </p><p> Priority: ${item.priority} </p>`;
  toDoItem.appendChild(divInfo);

  // Creating div for buttons
  const divButtons = document.createElement('div');
  divButtons.setAttribute('class', 'todo-buttons');
  divButtons.innerHTML = `<button> <span class="hover-under" id="btnedit-${idxProject}-${idxToDo}"> Edit/Details →</span></button>
           <button> <img class="trash"  id="remove-${idxProject}-${idxToDo}" src="../src/images/trash.svg" height="18px"> </button> </p>`;
  toDoItem.appendChild(divButtons);
  grid.appendChild(toDoItem);
};

// Create the grid to display ToDos
function createGrid(todoArray, board, idxProject) {
  const grid = document.createElement('div');
  grid.setAttribute('class', 'todos-grid');
  todoArray.forEach((item, idxToDo) => createPost(item, idxToDo, grid, idxProject));
  board.appendChild(grid);
}

// CreateBoard
function createBoard(project, idxProject) {
  const board = document.createElement('div');
  board.setAttribute('class', 'board');
  board.innerHTML = `<h2><img class='pin' src='../src/images/pin.svg' height='35px'>${project.title}</h2>`;
  const todoArray = project.todos;
  createGrid(todoArray, board, idxProject);
  divBoards.appendChild(board);
}

const page = (() => {
  // Hide and Display Project Form
  const displayProjectForm = () => {
    if (!toDoForm.classList.contains('display-none')) {
      toDoForm.classList.add('display-none');
    }
    projectForm.classList.toggle('display-none');
  };

  // get Title for project submission
  const getTitle = () => document.getElementById('title').value;

  // get To Do Info to submit new To Do
  const getToDoInfo = () => {
    const title = document.getElementById('title-todo').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;
    return {
      title,
      date,
      description,
      priority,
      project,
    };
  };

  // get Edit ToDo Info
  const getEditToDoInfo = () => {
    const title = document.getElementById('title-edit').value;
    const date = document.getElementById('edit-date').value;
    const description = document.getElementById('edit-description').value;
    const priority = document.getElementById('edit-priority').value;
    return {
      title,
      date,
      description,
      priority,
    };
  }

  // Hide and Display To Do Form
  const displayToDoForm = (myProjects) => {
    if (!projectForm.classList.contains('display-none')) {
      projectForm.classList.add('display-none');
    }
    // Set the select and options tags to choose the ToDo's project
    setProjectOptions(myProjects);
    toDoForm.classList.toggle('display-none');
  };

  // Creating Boards to Display Projects
  const displayProjectsBoards = (myProjects) => {
    myProjects.forEach(createBoard);
    contentArea.appendChild(divBoards);
  };

  // Hide Edit Form
  const hideEditForm = () => {
    const editFormBox = document.getElementById('edit-form');
    editFormBox.classList.toggle('display-none');
  };

  // Display ToDo Form
  const displayEditForm = (myProjects, idxProject, idxToDo) => {
    const todo = myProjects[idxProject].todos[idxToDo];

    // Getting and displaying To Do detail
    document.getElementById('title-edit').setAttribute('value', todo.title);
    document.getElementById('current-date').innerText = `${todo.date}`;
    document.getElementById('edit-description').value = todo.description;
    document.getElementById('current-priority').innerText = `${todo.priority}`;

    // Creating Submit Button
    const pButtonSubmit = document.getElementById('btnEdit');
    pButtonSubmit.innerHTML = `<p id=change-${idxProject}-${idxToDo}>Save Changes</p>`;

    const editFormBox = document.getElementById('edit-form');
    editFormBox.classList.toggle('display-none');
  };

  const displayWarning = (id) => {
    document.getElementById(id).classList.remove('display-none');
  };

  return {
    displayProjectForm,
    displayToDoForm,
    displayProjectsBoards,
    displayEditForm,
    hideEditForm,
    displayWarning,
    getTitle,
    getToDoInfo,
    getEditToDoInfo,
  };
})();

export default page;