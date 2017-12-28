function whyAmIHere() {
  /*
  We can read/write values from other sheets while on the active sheet
  */
  
  var actSS = SpreadsheetApp.getActiveSpreadsheet();
  
  // Define our Sheet variables
  var ss = actSS.getActiveSheet();
  var sheet2 = actSS.getSheetByName('Sheet2');
  var sheet3 = actSS.getSheetByName('Sheet3');
  
  // We set values in different sheets, then store them in variables
  sheet2.getRange(1, 1).setValue('Vivek');
  sheet3.getRange(1, 1).setValue('To Learn App Script');  

  var myName = sheet2.getRange(1, 1).getValue();
  var myPurpose = sheet3.getRange(1, 1).getValue();
  
  // We can access values from other sheets and write to our active sheet
  ss.getRange(1, 1).setValue('What is your name?');
  ss.getRange(2, 1).setValue(myName);
  ss.getRange(3, 1).setValue('What is your purpose?');
  ss.getRange(4, 1).setValue(myPurpose);
  
}
