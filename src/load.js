let myProjects = [];
//Function to get data stored in the Browser
const pageInit = () => { // eslint-disable-line no-unused-vars
    console.log("hello!")
    if (localStorage.getItem('projects')) {
        myProjects = JSON.parse(localStorage.getItem('projects'));
    } else {
        myProjects = [];
    }
    return myProjects;
}

const reload = () => {

    localStorage.setItem('projects', JSON.stringify(myProjects));
    document.location.reload();

}



export { pageInit, reload} ;

