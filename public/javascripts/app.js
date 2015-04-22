// GLOBAL VARS
var LOG_DATE_FORMAT = "YYYY/MM/DD ddd HH:mm:ss"; //momentjs
var currentTime = new moment("1500/12/12");




// takes in..?? maybe col and row
// places a
var placePerson = function(row, col){
  if (row = null || undefined) {
    row = 1;
  }
  if (col = null || undefined) {
    col = 1;
  }
  // should be:
  // <div id="player" class="creature">&#xb1;</div>

};

var logMessage = function(text){
  if (text == null || text.length == 0) {
    text = "A message goes here. The skye is blue.";
  }
  var $message = $("<li></li>")
      .text(currentTime.format(LOG_DATE_FORMAT) + ": " + text)
      .addClass("message");
  $(".gameLog").append($message);

  // needs to scroll to the bottom of the gameLogWindow
  $("gameLogWindow").scroll(Infinity);
};

var fillMap = function(map) {
  if (map === null || map === undefined) {
    throw "cannot load unknown map";
  }
  $mapArea = $(".mapArea");
  // clear html
  $mapArea.html("");
  // fill in row by row
  // set tile size

  _.each(map, function(row, i){
    $newRow = $("<div></div>")
        .addClass("tileRow")
        .addClass("tile-row-"+i)
        .data("row",i);
    _.each(row, function(tile, j){
      $newTile = $("<div></div>")
          .addClass("tile")
          .addClass("tile-col-"+j)
          .addClass("tile-row-"+i)
          .data({row:i, col:j})
          .css({backgroundColor: tile.background});
      if (tile.imageUrl.length > 0) {
        $newTile.html(
            $("<img></img>").attr("src", tile.imageUrl));
      }
      $newRow.append($newTile);
    });
    $mapArea.append($newRow);

    // placePerson()
  });
};




$(document).on( "ready", function(){
  // on new game....
  fillMap(VILLAGE_MAP);
  logMessage("The map has been filled.");
  // remove this later, but for funzies
  setInterval(logMessage, 3000)
});

