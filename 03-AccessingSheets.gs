function whyAmIHere() {
  /*
  We can read/write values from other sheets while on the active sheet
  */
  
  var app = SpreadsheetApp;
  var ss = app.getActiveSpreadsheet();
  
  // Define our Sheet variables
  var activeSheet = ss.getActiveSheet();
  var Sheet2 = ss.getSheetByName("Sheet2");
  var Sheet3 = ss.getSheetByName("Sheet3");
  
  // We set values in different sheets, then store them in variables
  Sheet2.getRange(1, 1).setValue("Vivek");
  var myName = Sheet2.getRange(1, 1).getValue();

  Sheet3.getRange(1, 1).setValue("To Learn App Script");  
  var myPurpose = Sheet3.getRange(1, 1).getValue();
  
  // We can access values from other sheets and write to our active sheet
  activeSheet.getRange(1, 1).setValue("What is your name?");
  activeSheet.getRange(2, 1).setValue(myName);
  activeSheet.getRange(3, 1).setValue("What is your purpose?");
  activeSheet.getRange(4, 1).setValue(myPurpose);
  
}
