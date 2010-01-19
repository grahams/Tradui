var xhr = Titanium.Network.createHTTPClient();
var tableView;
var data = [];
var template;
if(Titanium.Platform.name == 'android') {
  Titanium.API.info("ANDROID");
  template = {
   rowHeight:50,
   backgroundColor:'#000',
   layout:[
     {type:'text', fontSize:20, fontWeight:'bold', left:10, top:10, width:290, height:40, color:'#ffffff', name:'word'}
  ]};
} else {
  template = {
   rowHeight:50,
   layout:[
     {type:'text', fontSize:20, fontWeight:'bold', left:10, top:10, width:290, height:40, color:'#222', name:'letter'}
  ]};
}

function buildData(word) {
	data.push({word:word, title:word, hasChild:true});
}

function buildTable() {
  var db = Titanium.Database.open('db');

  if(Titanium.App.Properties.getString("translateTo") != null && Titanium.App.Properties.getString("translateTo") == 'english') {
    var rows = db.execute("SELECT DISTINCT creole FROM dictionary WHERE creole LIKE '"+Titanium.App.Properties.getString("letter")+"%' AND creole != '' ORDER BY creole ASC");
  } else {
    var rows = db.execute("SELECT DISTINCT english FROM dictionary WHERE english LIKE '"+Titanium.App.Properties.getString("letter")+"%' AND english != '' ORDER BY english ASC");
  }
  if(rows != null && rows.getRowCount() > 0) {
  	while (rows.isValidRow()) {
      buildData(rows.field(0));
  		rows.next();
  	}
  } else {
    Titanium.UI.createAlertDialog({
		  title:"Sorry",
		  message:"There are no words that start with this letter."
		}).show();
		
  }
	// close database
	rows.close();
	db.close();

	var search = Titanium.UI.createSearchBar({barColor:'#ddd', showCancel:false});
	search.addEventListener('change', function(e) {  e.value; }); 
	search.addEventListener('return', function(e) { search.blur(); });
	search.addEventListener('cancel', function(e) { search.blur(); });
	var win;
	var alert;
	tableView = Titanium.UI.createTableView({
		template:template, 
		data:data,
		search:search,
		filterAttribute:'word'
		}, function(eventObject) {
		  if (eventObject.searchMode==true) {  search.blur(); }
		  Titanium.App.Properties.setString("word",eventObject.rowData.word);
      win = Titanium.UI.createWindow({url:'/word.html', title:eventObject.rowData.word});
      win.open({animated:true});
		});

  activityIndicator.hide();
	Titanium.UI.currentWindow.addView(tableView);
	Titanium.UI.currentWindow.showView(tableView);
}

window.onload = function(){
  document.getElementById("loading").style.display = "block";
	if(Titanium.Platform.name == 'android') {
		activityIndicator = Titanium.UI.createActivityIndicator();
		activityIndicator.setMessage('Loading...');
    activityIndicator.setLocation(Titanium.UI.ActivityIndicator.DIALOG);
    activityIndicator.setType(Titanium.UI.ActivityIndicator.INDETERMINANT);
	} else {
		activityIndicator = Titanium.UI.createActivityIndicator({id:'loading', style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG});
	}
	
  activityIndicator.show();
	buildTable();
};
