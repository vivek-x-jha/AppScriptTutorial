function clearCells() {
  /*
  Shows 3 different ways to clear cells in Google Sheets
  */
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var myRange = ss.getRange('A:Z');
  
  myRange.clear();
//  myRange.clearContent();
//  myRange.clearFormat();

}