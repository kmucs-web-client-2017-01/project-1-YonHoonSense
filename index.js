

$(document).ready(function() {
  var roll=1;
  setInterval(function() {
    roll++;
    if(roll>6) {
      roll=1;
    }
    $("#roll").attr("src","hooni_"+roll+".jpg");
  },1000);
});

setInterval(function(){
  $("#col").css("color", "skyblue");
},499);

setInterval(function(){
  $("#col").css("color", "pink");
},1000);
