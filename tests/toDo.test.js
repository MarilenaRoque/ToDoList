import * as toDo from '../src/toDo';
import * as load from '../src/load';
import page from '../src/page';

// Testing the addToDo function
describe('AddToDo function', () => {
  page.displayWarning = jest.fn().mockImplementationOnce(() => 'Success');
  load.reload = jest.fn().mockImplementationOnce(() => 'Success');

  let testToDoInfo = {
    date: '2020-11-24',
    description: 'I need to go',
    priority: 'Low',
    project: 'Default',
    title: 'Grocery Shop Edited',
  };

  const testMyProjects = [
    { "title": 'Default', "todos": [] },
  ];

  it('Return an Object when valid arguments are received', () => {
    expect(toDo.addToDo(testMyProjects, testToDoInfo) instanceof Object).toBeTruthy;
  });

  // Testing if all the attributes were set correctly

  it('Object returned should have valid title if valid info is received', () => {
    const result = toDo.addToDo(testMyProjects, testToDoInfo);
    expect(result).toHaveProperty('title');
  });

  it('Object returned should have valid description if valid info is received', () => {
    const result = toDo.addToDo(testMyProjects, testToDoInfo);
    expect(result).toHaveProperty('description');
  });

  it('Object returned should have valid color if valid info is received', () => {
    const result = toDo.addToDo(testMyProjects, testToDoInfo);
    expect(result).toHaveProperty('color');
  });

  it('Object returned should have valid priority if valid info is received', () => {
    const result = toDo.addToDo(testMyProjects, testToDoInfo);
    expect(result).toHaveProperty('priority');
  });

  it('Object returned should have valid date if valid info is received', () => {
    const result = toDo.addToDo(testMyProjects, testToDoInfo);
    expect(result).toHaveProperty('date');
  });

  it('Object returned should have valid project if valid info is received', () => {
    const result = toDo.addToDo(testMyProjects, testToDoInfo);
    expect(result).toHaveProperty('project');
  });

  // Check if the color were set correctly

  it('Color is set correctly for low priority', () => {
    const result = toDo.addToDo(testMyProjects, testToDoInfo);
    expect(result.color).toBe('#82d37a');
  });

  it('Color is set differently if priority change', () => {
    testToDoInfo.priority = 'Medium';
    const result = toDo.addToDo(testMyProjects, testToDoInfo);
    expect(result.color).not.toBe('#82d37a');
  });

  it('Color is set correctly for Medium priority', () => {
    testToDoInfo.priority = 'Medium';
    const result = toDo.addToDo(testMyProjects, testToDoInfo);
    expect(result.color).toBe('#f8e953');
  });

  it('Color is set correctly for High priority', () => {
    testToDoInfo.priority = 'High';
    const result = toDo.addToDo(testMyProjects, testToDoInfo);
    expect(result.color).toBe('#ee9193');
  });


  // Testing warning messaage
  describe ("testing warning messages", () => {

    beforeEach(() => {
      testToDoInfo = {
        date: '2020-11-24',
        description: 'I need to go',
        priority: 'Low',
        project: 'Default',
        title: 'Grocery Shop Edited',
      };
    });

    it('Call the function to Display a warning if a title is not provided', () => {
      testToDoInfo.title = '';
      toDo.addToDo(testMyProjects, testToDoInfo);
      expect(page.displayWarning).toHaveBeenCalled();
    });

    it('Call the function to Display a warning if a description is not provided', () => {
      testToDoInfo.description = '';
      toDo.addToDo(testMyProjects, testToDoInfo);
      expect(page.displayWarning).toHaveBeenCalled();
    });

    it('Call the function to Display a warning if a date is not provided', () => {
      testToDoInfo.date = '';
      toDo.addToDo(testMyProjects, testToDoInfo);
      expect(page.displayWarning).toHaveBeenCalled();
    });

    it('Call the function to Display a warning if a priority is not provided', () => {
      testToDoInfo.priority = '';
      toDo.addToDo(testMyProjects, testToDoInfo);
      expect(page.displayWarning).toHaveBeenCalled();
    });

  

    //Testing the return of the object adn it value

    it('Object returned should contain the righ values', () => {
      const result = toDo.addToDo(testMyProjects, testToDoInfo);
      expect(result).toStrictEqual({"color": "#82d37a", 
                            "date": "2020-11-24", 
                            "description": "I need to go", 
                            "priority": "Low",
                            "project": "Default", 
                            "title": "Grocery Shop Edited"});
    });

    it('Page should reload if the object was successfully created', () => {
      const result = toDo.addToDo(testMyProjects, testToDoInfo);
      expect(load.reload).toHaveBeenCalled();
    });
  
  });

});


