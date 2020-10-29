const projectForm = document.getElementById("formProject");
const page = (() => {
    const displayProjectForm = () => {
        projectForm.classList.toggle("display-none");
    }
    return {displayProjectForm};
})();

export default page;