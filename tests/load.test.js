import * as load from '../src/load';

describe('Testing pageInit function', () => {
  it('Testing if the Object returned is an Array', () => {
    const resultProject = load.pageInit();
    expect(Array.isArray(resultProject)).toBe(true);
  });

  it('Testing if the object returned have the title attribute', () => {
    const resultProject = load.pageInit();
    expect(resultProject[0]).toHaveProperty('title');
  });

  it('Testing if the object returned have the todos attributes', () => {
    const resultProject = load.pageInit();
    expect(resultProject[0]).toHaveProperty('todos');
  });
});