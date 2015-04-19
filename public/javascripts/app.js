$(document).on( "ready", function(){
  var LOG_DATE_FORMAT = "ddd HH:mm:ss";


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
          .data("row",i);
      _.each(row, function(tile, j){
        console.log("tile", tile)
        $newTile = $("<div></div>")
            .addClass("tile")
            .data("row", i)
            .data("col", j)
            .data("tile", tile.name)
            .css({backgroundColor: tile.background});
        if (tile.imageUrl.length > 0) {
          $newTile.html(
              $("<img></img>").attr("src", tile.imageUrl));
        }
        $newRow.append($newTile);
      });
      $mapArea.append($newRow);
    });
  };



  var logMessage = function(text){
    if (text == null || text.length == 0) {
      text = ": A message goes here. The skye is blue.";
    }
    var now = new moment();
    var $message = $("<li></li>")
        .text(now.format(LOG_DATE_FORMAT) + text)
        .addClass("message");
    $(".gameLog").append($message);

    // needs to scroll to the bottom of the gameLogWindow
    $("gameLogWindow").scroll(Infinity);
  };


  fillMap(VILLAGE_MAP);
  logMessage("The map has been filled.");
  // remove this later, but for funzies
  setInterval(logMessage, 3000)
});