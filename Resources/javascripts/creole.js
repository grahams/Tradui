var xhr = Titanium.Network.createHTTPClient();
var tableView;
var data = [];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var template = {
 rowHeight:50,
 layout:[
   {type:'text', fontSize:20, fontWeight:'bold', left:10, top:10, width:290, height:40, color:'#222', name:'letter'}
]};

function buildData(creole, english) {
	data.push({word:randomNumber, translation:english, title:randomNumber, hasChild:true});
}

function buildTable() {
	var search = Titanium.UI.createSearchBar({barColor:'#ddd', showCancel:false});
	search.addEventListener('change', function(e) {  e.value; }); 
	search.addEventListener('return', function(e) { search.blur(); });
	search.addEventListener('cancel', function(e) { search.blur(); });
	for(var index in alphabet) {
	  data.push({letter:alphabet[index], title:alphabet[index], hasChild:true});
	}
	
	var win;
	tableView = Titanium.UI.createTableView({
		template:template, 
		data:data,
		search:search,
		filterAttribute:'letter'
		}, function(eventObject) {
		  if (eventObject.searchMode==true) {  search.blur(); }
		  Titanium.App.Properties.setString("letter",eventObject.rowData.letter);
      win = Titanium.UI.createWindow({url:'/words.html', title:eventObject.rowData.letter});
      win.open({animated:true});
		});

	Titanium.UI.currentWindow.addView(tableView);
	Titanium.UI.currentWindow.showView(tableView);
}

window.onload = function(){
  var infoButton = Titanium.UI.createButton({ systemButton:Titanium.UI.iPhone.SystemButton.INFO_LIGHT });
  infoButton.addEventListener("click", function(){
    var win = Titanium.UI.createWindow({url:'/about.html', title:"About"});
    win.open({modal:true});
  });
	Titanium.UI.currentWindow.setRightNavButton(infoButton);

  // document.getElementById("loading").style.display = "block";
	if(Titanium.Platform.name == 'android') {
		activityIndicator = Titanium.UI.createActivityIndicator();
		activityIndicator.setMessage('Loading...');
    activityIndicator.setLocation(Titanium.UI.ActivityIndicator.DIALOG);
    activityIndicator.setType(Titanium.UI.ActivityIndicator.INDETERMINANT);
	} else {
		activityIndicator = Titanium.UI.createActivityIndicator({id:'loading', style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG});
	}
	
  // activityIndicator.show();
	buildTable();
};
