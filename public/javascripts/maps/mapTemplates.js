var W = app.TILES.WALL;   var H = app.TILES.HOUSE;
var D = app.TILES.DIRT;   var T = app.TILES.SHOP_DOOR;
var G = app.TILES.GRASS;  var Z = app.TILES.GARDEN;
var R = app.TILES.RIVER;  var A = app.TILES.ARCH;
var E = app.TILES.WELL;
var S = app.TILES.SIGN;
var o = app.TILES.BLANK;

var VILLAGE_MAP =
[
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, A, A, A, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, Z, G, G, D, D, D, G, G, G, Z, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, H, H, H, G, G, D, G, G, D, G, G, G, G, H, H, H, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, H, H, H, D, D, G, G, G, D, G, G, G, D, H, H, H, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, H, H, H, G, G, G, G, G, D, G, G, D, G, H, H, H, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, D, D, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, H, H, H, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, H, H, G, G, G, D, G, S, H, H, H, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, H, H, T, D, D, D, D, D, T, H, H, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, H, H, H, S, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, H, H, H, S, D, D, D, S, H, H, H, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, H, H, T, D, D, E, D, D, T, H, H, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, H, H, H, G, D, D, D, G, H, H, H, G, G, G, G, G, G, G, G, o, o, o],
  [o, o, G, G, G, G, G, G, G, G, G, G, G, D, G, G, G, G, G, G, G, G, G, G, G, G, G, o, o, o],
];


// class Map {
//   spawnPoint:
//   map: null

//   var constructor = function(map){
//     this.map = _.cloneDeep(map);
//   }
//   var getTile = function(row, col) {

//   }

// }