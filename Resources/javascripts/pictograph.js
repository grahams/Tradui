var xhr = Titanium.Network.createHTTPClient();
var tableView;
var data = [];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var template;
if(Titanium.Platform.name == 'android') {
  Titanium.API.info("ANDROID");
  template = {
   rowHeight:50,
   backgroundColor:'#000',
   layout:[
     {type:'text', fontSize:20, fontWeight:'bold', left:10, top:10, width:290, height:40, color:'#fff', name:'letter'}
  ]};
} else {
  template = {
   rowHeight:50,
   layout:[
     {type:'text', fontSize:20, fontWeight:'bold', left:10, top:10, width:290, height:40, color:'#222', name:'letter'}
  ]};
}

function buildData(creole, english) {
	data.push({word:randomNumber, translation:english, title:randomNumber, hasChild:true});
}

function buildDatabase() {
  var db = Titanium.Database.install('db/dictionary.db','db');
  Titanium.App.Properties.setBool("dbInstalled",true);
  db.close();
}

function buildTable() {
    // data for tableview
    var data = [
        {html:'<img src="/images/pictographs/Bandage.png" height="125px" width="125px"/>'},
        {html:'<img src="/images/pictographs/FirstAid.png" height="125px" width="125px"/>'},
        {html:'<img src="/images/pictographs/Hospital.png" height="125px" width="125px"/>'},
        {html:'<img src="/images/pictographs/Water.png" height="125px" width="125px"/>'},
        {html:'<img src="/images/pictographs/Food.png" height="125px" width="125px"/>'},
    ];

    // tableview object
    var tableView = Titanium.UI.createTableView({data:data,title:'Tableview Test',rowHeight:150}, function(eventObject) 
    {
        // Now call some eventhandler function to handle the click event object
        // Took this from the Kitchen Sink
        var a = Titanium.UI.createAlertDialog();
        a.setTitle('Table View Test');
        a.setMessage('row ' + eventObject.row + ' index ' + eventObject.index + ' section ' + eventObject.section + ' rowData ' + eventObject.rowData);
        a.show(); 

    });

    Titanium.UI.currentWindow.addView(tableView);
    Titanium.UI.currentWindow.showView(tableView);
}

window.onload = function(){
  Titanium.UI.currentWindow.setTitle("Pictograph");
  var infoButton = Titanium.UI.createButton({ systemButton:Titanium.UI.iPhone.SystemButton.INFO_LIGHT });
  infoButton.addEventListener("click", function(){
    var win = Titanium.UI.createWindow({url:'/about.html', title:"About", backgroundImage:'../images/tradui_about_screen.png'});
    win.open({modal:true});
  });
	Titanium.UI.currentWindow.setRightNavButton(infoButton);

  document.getElementById("loading").style.display = "block";
	if(Titanium.Platform.name == 'android') {
		activityIndicator = Titanium.UI.createActivityIndicator();
		activityIndicator.setMessage('Loading...');
    activityIndicator.setLocation(Titanium.UI.ActivityIndicator.DIALOG);
    activityIndicator.setType(Titanium.UI.ActivityIndicator.INDETERMINANT);
	} else {
		activityIndicator = Titanium.UI.createActivityIndicator({id:'loading', style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG});
	}
	
	Titanium.UI.currentWindow.addEventListener('focused',function(e) {
		setTimeout(function(){
      Titanium.UI.currentWindow.setTitle("Pictograph");
		},400);
	});
	
  activityIndicator.show();
  if(Titanium.App.Properties.getBool("dbInstalled") == null || Titanium.App.Properties.getBool("dbInstalled") == 0) {
    buildDatabase();
  }
	buildTable();
};
