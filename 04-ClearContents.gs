function clearCells() {
  /*
  Shows 3 different ways to clear cells in Google Sheets
  */
  
  var app = SpreadsheetApp;
  var activeSheet = app.getActiveSpreadsheet().getActiveSheet();
  var myRange = activeSheet.getRange("A1:H12");
  
  myRange.clear();
  myRange.clearContent();
  myRange.clearFormat();

}
