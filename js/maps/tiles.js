// This file only contains lists of tiles and their actions / attributes
if(window.app == null ||
   window.app == undefined) {
  window.app = {};
}

var TILES = {
// Basic Environment Tiles
  DIRT: {
    name: "DIRT",
    imageUrl: "", 
    solid: false,
    action: null
    info: "Just some dirt",
  },

  GRASS: {
    name: "GRASS",
    imageUrl: "", 
    solid: false,
    action: null
    info: "Just some grass",
  },

  RIVER: {
    name: "RIVER",
    imageUrl: "", 
    solid: true,
    action: null
    info: "Just some water",
  },

  GARDEN: {
    name: "GARDEN",
    imageUrl: "",
    solid: false,
    action: null,
    info: "A small garden"
  }

  WELL: {
    name: "WELL",
    imageUrl: "",
    solid: true,
    action: null,
    info: "A small well"
  }

// Fixture Tiles
  SHOP_DOOR: {
    name: "SHOP_DOOR",
    imageUrl: "", 
    solid: true,
    action: function(){
      // Open Shop?
    }
    info: "",
  },

  CLOSED_DOOR: {
    name: "CLOSED_DOOR".
    imageUrl: "", 
    solid: true,
    action: null // Need an action to replace with open door or alert "Locked!"?
    info: "A closed door",
  },
/*
  LOCKED_DOOR: {  // May not need?
    name: "LOCKED_DOOR".
    imageUrl: "", 
    solid: true,
    action: null // Need an action to replace with open door or alert "Locked!"?
    info: "A locked door",
  },
*/
  OPEN_DOOR: {
    name: "OPEN_DOOR".
    imageUrl: "", 
    solid: false,
    action: null
    info: "A door that is standing open",
  },

  BROKEN_DOOR: {
    name: "BROKEN_DOOR".
    imageUrl: "", 
    solid: false,
    action: null
    info: "A door that looks to have been staved in",
  },

  WALL: {
    name: "WALL",
    imageUrl: "", 
    solid: true,
    action: null
    info: "An impassable wall",
  },

  SIGN: {
    name: "SIGN",
    imageUrl: "", 
    solid: false,
    action: null // Maybe the action can be a lookup of the closest shop door for sign text?
    info: "A shop sign", // Will need to incorporate the ability to have diff sign text for each
  },

  HOUSE: { // This will prob need to be 4-10(?) separate tiles
    name: "HOUSE",
    imageUrl: "", 
    solid: true,
    action: null
    info: "A house",
  },

  ARCH: { // This will prob need to be 3 separate tiles
    name: "ARCH",
    imageUrl: "", 
    solid: true,
    action: null
    info: "An Impressive Arch",
  },

}; // Final brace and semi

