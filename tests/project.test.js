import * as project from '../src/project';
import page from '../src/page';
import * as load from '../src/load';
import setLocalStorage from '../src/storage'



// Testing project.addProject() Function
describe('AddProject function', () => {

    page.displayWarning = jest.fn().mockImplementationOnce(() => "Success");
    load.reload = jest.fn().mockImplementationOnce(() => "Success");
    

    it('Add Project Succed with a valid title', () => {
        expect(project.addProject([], 'New Test')).toStrictEqual({
            "title": "New Test", "todos": []
        });
    });
    
    it('Return an Object with title attribute correctly set', () => {
        let result = project.addProject([], 'Testing Title')
        expect(result.title).toEqual('Testing Title');
    });

    it('Add Project return Fail with invalid Title', () => {
        let result = project.addProject([], '')
        expect(result).toEqual('Fail');
    });

    it('Call the function to Display a warning if a title is not provided', () => {
        let result = project.addProject([], '')
        expect(page.displayWarning).toHaveBeenCalled();
    });

    it('Reload the Page to display new Project', () => {
        let result = project.addProject([], 'Test Reload')
        expect(load.reload).toHaveBeenCalled();
    });

    it('Returns an Object with attribute title', () => {
        let result = project.addProject([], 'Test')
        expect(result).toHaveProperty('title');
    });

    it('Returns an Object with attribute todos', () => {
        let result = project.addProject([], 'Test')
        expect(result).toHaveProperty('todos');
    });


})


// Testing project.addProject() Function
describe('Remove ToDo function', () => {

   // myProjects Example
    let testProjects = [{
            "title": "New Test", "todos": [ {
            "color": "#82d37a",
            "date": "2020-11-24",
            "description": "Low Priority Edited",
            "priority": "Low",
            "project": "Default",
            "title": "Low Priority Edited",
        },
        {
            "color": "#82d37a",
            "date": "2020-11-24",
            "description": "I need to go ",
            "priority": "Low",
            "project": "Default",
            "title": "Grocery Shop Edited"
        }]
    },
    {
        "title": "New Test", "todos": []
    },
    {
        "title": "New Test", "todos": []
    }];
    
    // Function Call
    let removed = project.removeToDo(testProjects,0,1)



    //Tests

    it('remove a toDo of the Projectt', () => {
        expect(removed[0].todos).toHaveLength(1);
    });

    it('remove the correspondent toDo and returns a new array without it', () => {
        expect(removed).toStrictEqual([{
            "title": "New Test", "todos": [ {
            "color": "#82d37a",
            "date": "2020-11-24",
            "description": "Low Priority Edited",
            "priority": "Low",
            "project": "Default",
            "title": "Low Priority Edited",
        }]
        },
        {
            "title": "New Test", "todos": []
        },
        {
            "title": "New Test", "todos": []
        }]);

    });

    it('Reload the Page to display the Project without the toDo removed', () => {
        expect(load.reload).toHaveBeenCalled();
    });

    
})

    
