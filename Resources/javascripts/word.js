window.onload = function() {
  var db = Titanium.Database.open('db');
  if(Titanium.App.Properties.getString("translateTo") != null && Titanium.App.Properties.getString("translateTo") == 'english') {
    var rows = db.execute("SELECT DISTINCT english FROM dictionary WHERE creole = '"+Titanium.App.Properties.getString("word")+"'");
  } else {
    var rows = db.execute("SELECT DISTINCT creole FROM dictionary WHERE english = '"+Titanium.App.Properties.getString("word")+"'");
  }
	while (rows.isValidRow()) {
	  Titanium.API.info(rows.field(0));
    $("#words").append("<li>"+rows.field(0)+ "</li>");
    Titanium.API.info("1");
		rows.next();
	}
	// close database
	rows.close();
	
  Titanium.API.info("2");
	$("#wrapper").show();
  Titanium.API.info("3");
}