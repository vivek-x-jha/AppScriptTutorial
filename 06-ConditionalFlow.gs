function sign() {
  /*
  Uses conditional flow to check if a given number is positive, negative, or zero
  */
  clearCells();

  var app = SpreadsheetApp;
  var activeSheet = app.getActiveSpreadsheet().getActiveSheet();

  for(var i = 1; i<10; i++) {

    activeSheet.getRange(i, 1).setValue(5 - i);
    var num = activeSheet.getRange(i, 1).getValue();

    if( num > 0 ) {
      activeSheet.getRange(i, 2).setValue("Positive");
    } else if( num < 0 ) {
      activeSheet.getRange(i, 2).setValue("Negative");
    } else {
      activeSheet.getRange(i, 2).setValue("Zero");      
    }

  }

}
