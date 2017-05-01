const { getArraySum } = require('./sum-util');

class TableModel{
  constructor(numCols = 10, numRows = 20){
    this.numCols = numCols;
    this.numRows = numRows;
    this.data = {};
  }

  _getCellId(location){
    return `${location.col}:${location.row}`;
  }

  getValue(location){
    return this.data[this._getCellId(location)];
  }

  setValue(location, value){
    this.data[this._getCellId(location)] = value;
  }

  getColumnSum(col){
    let colNums = [];
    for (var i = 0; i < this.numRows; i++) {
      colNums.push(this.getValue({col: col, row: i}));
    }
    return getArraySum(colNums);
  }

  setSumRow(){
    let location = {col: 0, row: 'sum'};
    for (var col = 0; col < this.numCols; col++){
      location.col = col;
      this.setValue(location, this.getColumnSum(col));
    }
  }
}

module.exports = TableModel;