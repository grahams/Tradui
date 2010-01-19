window.onload = function() {
  var closeButton = Titanium.UI.createButton({ title:'Close' });
  closeButton.addEventListener("click", function(){
    Titanium.UI.currentWindow.close();
  });
	Titanium.UI.currentWindow.setLeftNavButton(closeButton);
	
	var win;
	$("span#intridea").bind("click",function(){
	  win = Titanium.UI.createWindow({url:'http://intridea.com', title:"Loading ...", backgroundImage:'../images/tradui_about_screen.png'});
    win.open({animated:true});
    return false;
	});
	$("span#crisiscommons").bind("click",function(){
	  win = Titanium.UI.createWindow({url:'http://crisiscommons.org', title:"Loading ...", backgroundImage:'../images/tradui_about_screen.png'});
    win.open({animated:true});
    return false;
	});
	$("span#haitisurf").bind("click",function(){
	  win = Titanium.UI.createWindow({url:'http://haitisurf.com', title:"Loading ...", backgroundImage:'../images/tradui_about_screen.png'});
    win.open({animated:true});
    return false;
	});
}