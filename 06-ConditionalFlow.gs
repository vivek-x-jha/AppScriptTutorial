function sign() {
  /*
  Uses conditional flow to check if a given number is positive, negative, or zero
  */
  
  clearCells();

  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  for (var i = 1; i < 10; i++) {

    ss.getRange(i, 1).setValue(5 - i);
    var num = ss.getRange(i, 1).getValue();

    if (num > 0) {
      ss.getRange(i, 2).setValue('Positive');
    } else if (num < 0) {
      ss.getRange(i, 2).setValue('Negative');
    } else {
      ss.getRange(i, 2).setValue('Zero');      
    }

  }

}
