function blastoff() {  
  /*
  Uses forloop to countdown and blast off!
  Also logs values used to countdown
  */
  
  var app = SpreadsheetApp;
  var ss = app.getActiveSpreadsheet();
  var activeSheet = ss.getActiveSheet();
  
  activeSheet.getRange("A1").setValue("Begin countdown:");
  
  for(var i=10;i>0;i--) {
   
    var count = activeSheet.getRange(12 - i, 1).setValue(i);
    Logger.log(i)
    
  }
  
  activeSheet.getRange(12, 1).setValue("Blast Off!");
  
}
