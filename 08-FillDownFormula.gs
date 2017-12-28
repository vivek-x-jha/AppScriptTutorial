function findAnnualSales() {
  /*
  Creates column with annual sales data using setFormula() and copyTo()
  */
  
  makeSalesData();

  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  var headerLines = 1;
  var lastRow = ss.getLastRow();
  var fillDownRange = ss.getRange(2, 6, lastRow - headerLines);
  
  ss.getRange('F1').setValue('Total');
  ss.getRange('F2').setFormula('=SUM(B2:E2)');
  ss.getRange('F2').copyTo(fillDownRange);
  
}
