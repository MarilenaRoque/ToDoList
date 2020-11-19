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
    { title: 'Default', todos: [] },
  ];

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

  // Testing warning message
  describe('testing warning messages', () => {
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

    // Testing the return of the object adn it value

    it('Object returned should contain the righ values', () => {
      const result = toDo.addToDo(testMyProjects, testToDoInfo);
      expect(result).toStrictEqual({
        color: '#82d37a',
        date: '2020-11-24',
        description: 'I need to go',
        priority: 'Low',
        project: 'Default',
        title: 'Grocery Shop Edited',
      });
    });

    it('Page should reload if the object was successfully created', () => {
      toDo.addToDo(testMyProjects, testToDoInfo);
      expect(load.reload).toHaveBeenCalled();
    });
  });
});

describe('submitToDo Function to edit To Do Objects', () => {
  load.reload = jest.fn().mockImplementationOnce(() => 'Success');

  const testToDoInfo = {
    date: '2020-11-01',
    description: 'Low Priority Edited',
    priority: 'High',
    project: 'Default',
    title: 'Low Priority Edited',
  };

  const testProjects = [{
    title: 'New Test',
    todos: [{
      color: '#82d37a',
      date: '2020-11-24',
      description: 'Low Priority',
      priority: 'High',
      project: 'Default',
      title: 'Low Priority',
    },
    {
      color: '#82d37a',
      date: '2020-11-23',
      description: 'I need to go ',
      priority: 'Low',
      project: 'Default',
      title: 'Grocery Shop',
    }],
  },
  {
    title: 'New Test', todos: [],
  },
  {
    title: 'New Test', todos: [],
  }];

  // Set new Color if other priority is provided

  it('New Color is set if new property is provided', () => {
    const newProjects = toDo.submitToDo(testProjects, 0, 0, testToDoInfo);
    expect(newProjects[0].todos[0].color).toStrictEqual('#ee9193');
  });

  it('New Color is set if new property is provided', () => {
    const newProjects = toDo.submitToDo(testProjects, 0, 0, testToDoInfo);
    expect(newProjects[0].todos[0].color).not.toStrictEqual('#82d37a');
  });

  // Return an object with the Info Edited

  it('Edit the right To Do with the provided values', () => {
    const newProjects = toDo.submitToDo(testProjects, 0, 0, testToDoInfo);
    expect(newProjects[0].todos[0]).toStrictEqual({
      color: '#ee9193',
      date: '2020-11-01',
      description: 'Low Priority Edited',
      priority: 'High',
      project: 'Default',
      title: 'Low Priority Edited',
    });
  });

  it('Reload the page to display edited To Do', () => {
    toDo.submitToDo(testProjects, 0, 0, testToDoInfo);
    expect(load.reload).toHaveBeenCalled();
  });

  describe('testing if old info is kept if new one is not provided', () => {
    let testToDoInfo2 = {};
    let testProjects2 = [];

    beforeEach(() => {
      testToDoInfo2 = {
        date: '2020-11-02',
        description: 'New Grocery Edited',
        priority: 'High',
        project: 'Default',
        title: 'New Grocery Edited',
      };

      testProjects2 = [{
        title: 'New Test',
        todos: [{
          color: '#82d37a',
          date: '2020-11-24',
          description: 'Low Priority',
          priority: 'High',
          project: 'Default',
          title: 'Low Priority',
        },
        {
          color: '#82d37a',
          date: '2020-11-23',
          description: 'I need to go ',
          priority: 'Low',
          project: 'Default',
          title: 'Grocery Shop',
        }],
      },
      {
        title: 'New Test', todos: [],
      },
      {
        title: 'New Test', todos: [],
      }];
    });

    it('Old date is kept if a new one is not provided', () => {
      testToDoInfo2.date = '';
      const newProjects = toDo.submitToDo(testProjects2, 0, 1, testToDoInfo2);
      expect(newProjects[0].todos[1].date).toBe('2020-11-23');
    });

    it('Old title is kept if a new one is not provided', () => {
      testToDoInfo2.title = '';
      const newProjects = toDo.submitToDo(testProjects2, 0, 1, testToDoInfo2);
      expect(newProjects[0].todos[1].title).toBe('Grocery Shop');
    });
  });
});
