window.onload = function() {
  var db = Titanium.Database.open('db');
  if(Titanium.App.Properties.getString("translateTo") != null && Titanium.App.Properties.getString("translateTo") == 'english') {
    var rows = db.execute("SELECT DISTINCT english FROM dictionary WHERE creole = '"+Titanium.App.Properties.getString("word")+"'");
  } else {
    var rows = db.execute("SELECT DISTINCT creole FROM dictionary WHERE english = '"+Titanium.App.Properties.getString("word")+"'");
  }
	while (rows.isValidRow()) {
    $("#words").append("<li>"+rows.field(0)+ "</li>");
		rows.next();
	}
	// close database
	rows.close();
	
	$("#wrapper").show();
}