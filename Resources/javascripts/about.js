window.onload = function() {
  var closeButton = Titanium.UI.createButton({ title:'Close' });
  closeButton.addEventListener("click", function(){
    Titanium.UI.currentWindow.close();
  });
	Titanium.UI.currentWindow.setLeftNavButton(closeButton);
}