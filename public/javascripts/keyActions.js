var KEY = {
  ENTER: 13,
  UP_ARROW: 38,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40
}

$(document).on("ready", function(){
  $(document).on("keyup", function(e){
    var key = e.keyCode;
    switch(key){
    case KEY.ENTER:
      currentTime.add(5, "minutes");
      logMessage("ENTER was pressed");
      break;
    case KEY.UP_ARROW:
      currentTime.add(5, "minutes");
      logMessage("UP was pressed");
      break;
    default:
      // do nothing
      break;
    }

  });
});