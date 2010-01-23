function buildFormElements() {



  var playButton = Titanium.UI.createButton({
        id:'playButton',
        title:'Speak',
        color:'#ffffff',
        backgroundImage:'/images/BUTT_drk_off.png',
        backgroundSelectedImage:'/images/BUTT_drk_on.png',
        backgroundFocusedImage:'/images/BUTT_drk_on.png',
        height:57,
        width:300,
        fontSize:16,
        fontWeight:'bold'
  });
 
  playButton.addEventListener("click",function(e) {
    // XXX we need to get an identifier for the audio, and pass that to play. 
    // XXX ghall's DB changes are needed, plus we need the pictographKey here.
    var sound = Titanium.Media.createSound('/audio/creole-female-doctor.mp3');
    sound.play();


  });
}


window.onload = function() {
var db = Titanium.Database.open('db');

var pictographKey = Titanium.App.Properties.getString("pictographKey");

if(pictographKey != null) {
    $("#pictograph").append("<img src='/images/pictographs/" + pictographKey + ".png' height='125px' width='125px' />");
}

$("#wrapper").show();

buildFormElements();

}





