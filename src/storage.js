const setLocalStorage = (myProjects) => {
  localStorage.setItem('projects', JSON.stringify(myProjects));
};

export default setLocalStorage;