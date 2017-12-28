function blastoff() {  
  /*
  Uses forloop to countdown from 10 and blast off!
  Also logs values used to countdown
  */
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  ss.getRange('A1').setValue('Begin countdown:');
  
  for (var i = 10; i > 0; i--) {
   
    var count = ss.getRange(12 - i, 1).setValue(i);
    Logger.log(i)
    
  }
  
  ss.getRange(12, 1).setValue('Blast Off!');
  
}
