window.onload = function() {
var db = Titanium.Database.open('db');

var pictographKey = Titanium.App.Properties.getString("pictographKey");

if(pictographKey != null) {
    $("#pictograph").append("<img src='/images/pictographs/" + pictographKey + ".png' height='125px' width='125px' />");
}

$("#wrapper").show();
}
