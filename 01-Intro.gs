function makeMatrices() {
  /*
  The hierarchy of objects is as follows:
  Application
  Spreadsheet
  Sheet
  Range/Cells
  */
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Below are various ways to use getRange()
  ss.getRange('A1').setValue('Matrix A:');
  ss.getRange('B1:C2').setValue(0);
  ss.getRange(3, 1).setValue('These are both Zero Matrices');
  ss.getRange(1, 5).setValue('Matrix B:');
  ss.getRange(1, 6, 3, 3).setValue(0);
  
  // We can also use getValue() to store spreadsheet data into variables
  var zero = ss.getRange(1, 2).getValue();
  
  ss.getRange(5, 1).setValue('Below is the 2x2 Identity Matrix');
  ss.getRange(6, 1).setValue(zero + 1);
  ss.getRange(6, 2).setValue(zero);
  ss.getRange(7, 1).setValue(zero);
  ss.getRange(7, 2).setValue(zero + 1);
  
}
