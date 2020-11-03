let myProjects = [];
//Function to get data stored in the Browser
const pageInit = () => { // eslint-disable-line no-unused-vars
    if (localStorage.getItem('projects')) {
        myProjects = JSON.parse(localStorage.getItem('projects'));
    } else {
        myProjects = [{title: "Default", todos: []}];
    }
    return myProjects;
}

const reload = () => {

    localStorage.setItem('projects', JSON.stringify(myProjects));
    document.location.reload();

}



export { pageInit, reload} ;

