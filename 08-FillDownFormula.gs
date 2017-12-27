function findAnnualSales() {
  /*
  Creates column with annual sales data using setFormula() and copyTo()
  */
  makeSalesData();

  var app = SpreadsheetApp;
  var activeSheet = app.getActiveSpreadsheet().getActiveSheet();
  
  var headerLines = 1;
  var lastRow = activeSheet.getLastRow();
  var fillDownRange = activeSheet.getRange(2, 6, lastRow - headerLines);
  
  activeSheet.getRange('F1').setValue('Total');
  activeSheet.getRange('F2').setFormula('=SUM(B2:E2)');
  activeSheet.getRange('F2').copyTo(fillDownRange);
  
}
