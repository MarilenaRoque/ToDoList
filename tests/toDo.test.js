import * as toDo from '../src/toDo';
import * as load from '../src/load';

// Testing the addToDo function
describe('AddToDo function', () => {
    load.reload = jest.fn().mockImplementationOnce(() => 'Success');

    let testToDoInfo = { date: "2020-11-24",
                         description: "I need to go",
                         priority: "Low",
                         project: "Default",
                         title: "Grocery Shop Edited"};
    
    let testMyProjects = [
        { title: 'Default', todos: [] }
        ];

    it('Return an Object when valid arguments are received', () => {
        expect(toDo.addToDo(testMyProjects, testToDoInfo) instanceof Object).toBeTruthy;
    });


    // Testing if all the attributes were set correctly

    it('Object returned should have valid title if valid info is received', () => {
        let result = toDo.addToDo(testMyProjects, testToDoInfo);
        expect(result).toHaveProperty('title');
    });

    it('Object returned should have valid description if valid info is received', () => {
        let result = toDo.addToDo(testMyProjects, testToDoInfo);
        expect(result).toHaveProperty('description');
    });

    it('Object returned should have valid color if valid info is received', () => {
        let result = toDo.addToDo(testMyProjects, testToDoInfo);
        expect(result).toHaveProperty('color');
    });

    it('Object returned should have valid priority if valid info is received', () => {
        let result = toDo.addToDo(testMyProjects, testToDoInfo);
        expect(result).toHaveProperty('priority');
    });

    it('Object returned should have valid date if valid info is received', () => {
        let result = toDo.addToDo(testMyProjects, testToDoInfo);
        expect(result).toHaveProperty('date');
    });

    it('Object returned should have valid project if valid info is received', () => {
        let result = toDo.addToDo(testMyProjects, testToDoInfo);
        expect(result).toHaveProperty('project');
    });

    // Check if the color is set correctly


});