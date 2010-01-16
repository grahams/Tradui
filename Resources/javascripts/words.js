var xhr = Titanium.Network.createHTTPClient();
var tableView;
var data = [];
var template = {
 rowHeight:50,
 layout:[
   {type:'text', fontSize:16, fontWeight:'bold', left:10, top:14, width:290, height:40, color:'#222', name:'word'}
]};

function buildData(creole, english) {
  if(Titanium.App.Properties.getString("translateTo") != null && Titanium.App.Properties.getString("translateTo") == 'english') {
  	data.push({word:english, translation:creole, title:english, hasChild:true});
  } else {
  	data.push({word:creole, translation:english, title:creole, hasChild:true});
  }
}

function buildTable() {
	var search = Titanium.UI.createSearchBar({barColor:'#ddd', showCancel:false});
	search.addEventListener('change', function(e) {  e.value; }); 
	search.addEventListener('return', function(e) { search.blur(); });
	search.addEventListener('cancel', function(e) { search.blur(); });

  buildData("intridea","woot");
  buildData("crisis","woot");
  buildData("commons","woot");
  buildData("haiti","woot");
  buildData("sunlight","woot");
	
	var win;
	tableView = Titanium.UI.createTableView({
		template:template, 
		data:data,
		search:search,
		filterAttribute:'word'
		}, function(eventObject) {
		  if (eventObject.searchMode==true) {  search.blur(); }
      // win = Titanium.UI.createWindow({url:'/detail.html', title:eventObject.rowData.word});
      // win.open({animated:true});
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
