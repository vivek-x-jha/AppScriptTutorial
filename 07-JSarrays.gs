function makeSalesData() {
  /*
  Read/Write Range to a JavaScript Array to create a sales data table
  */
  
  clearCells();
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Define the javascript objects below
  var jsRowVector = [['Q1', 'Q2', 'Q3', 'Q4']];
  
  var jsColVector = [
    ['EMEA'],
    ['LATAM'],
    ['APJ'],
    ['US'],
  ];
 
  var jsArray = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  
  // Populate sale data table with js objects  
  ss.getRange('A1').setValue('FY17');
  ss.getRange(1, 2, 1, 4).setValues(jsRowVector);
  ss.getRange(2, 1, 4).setValues(jsColVector);
  ss.getRange(2, 2, 4, 4).setValues(jsArray);
  
  var values = ss.getRange(1, 1, 5, 5).getValues();
  Logger.log(values);
  
}
