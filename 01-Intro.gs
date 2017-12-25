function makeMatrices() {
  /*
  The hierarchy of objects is as follows:
  Application
  Spreadsheet
  Sheet
  Range/Cells
  */
  
  var app = SpreadsheetApp;
  var ss = app.getActiveSpreadsheet();
  var activeSheet = ss.getActiveSheet();
  
  // Below are various ways to use getRange()
  activeSheet.getRange("A1").setValue("Matrix A:");
  activeSheet.getRange("B1:C2").setValue(0);
  activeSheet.getRange(3, 1).setValue("These are both Zero Matrices");
  activeSheet.getRange(1, 5).setValue("Matrix B:");
  activeSheet.getRange(1, 6, 3, 3).setValue(0);
  
  // We can also use getValue() to store spreadsheet data into variables
  var zero = activeSheet.getRange(1, 6, 3, 3).getValue();
  
  activeSheet.getRange(5, 1).setValue("Below is the 2x2 Identity Matrix");
  activeSheet.getRange(6, 1).setValue(zero + 1);
  activeSheet.getRange(6, 2).setValue(zero);
  activeSheet.getRange(7, 1).setValue(zero);
  activeSheet.getRange(7, 2).setValue(zero + 1);
  
}
