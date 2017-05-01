const TableModel = require('../table-model');

describe('table-model', () => {

  it('can set then get a value', () => {
    // set up the initial state
    const model = new TableModel();
    const location = {row: 3, col: 5};

    // inspect initial state
    expect(model.getValue(location)).toBeUndefined;

    // execute code under test
    model.setValue(location, 'foo');

    // inspect the resulting state
    expect(model.getValue(location)).toBe('foo');
  });

  it('can set the sum of a column with positive and negative numbers', () => {
    // set up initial state
    const model = new TableModel();
    let location = {row: 3, col: 5};
    model.setValue(location, 23);
    location = {row: 4, col: 5};
    model.setValue(location, -4);
    location = {row: 8, col: 5};
    model.setValue(location, 6);

    // inspect initial state
    expect(model.getColumnSum(5)).toEqual(25);

    // execute code under test
    model.setSumRow();

    // inspect the resulting state
    location = {row: 'sum', col: 5}
    expect(model.getValue(location)).toEqual(25);

  });
  
});