// This file only contains lists of tiles and their actions / attributes
if(window.app == null ||
   window.app == undefined) {
  window.app = {};
}

app.TILES = {
// Basic Environment Tiles
  BLANK: {
    action: null,
    background: "#FFFFFF",
    friendly: true,
    imageUrl: "",
    info: "The Emptiness",
    name: "BLANK",
    solid: true,
  },

  DIRT: {
    action: null,
    background: "#7F5217",
    friendly: true,
    imageUrl: "",
    info: "Just some dirt",
    name: "DIRT",
    solid: false,
    containedObjects: []
  },

  GRASS: {
    action: null,
    background: "#348017",
    friendly: true,
    imageUrl: "",
    info: "Just some grass",
    name: "GRASS",
    solid: false,
  },

  RIVER: {
    action: null,
    background: "#3090C7",
    friendly: true,
    imageUrl: "",
    info: "Just some water",
    name: "RIVER",
    solid: true,
  },

  GARDEN: {
    action: null,
    background: "#EDE275",
    friendly: true,
    imageUrl: "",
    info: "A small garden",
    name: "GARDEN",
    solid: false,
  },

  WELL: {
    action: null,
    background: "#566D7E",
    friendly: true,
    imageUrl: "",
    info: "A small well",
    name: "WELL",
    solid: true,
  },

// Fixture Tiles
  SHOP_DOOR: {
    background: "#806517",
    friendly: true,
    imageUrl: "",
    name: "SHOP_DOOR",
    solid: true,
    action: function(){},
    info: "",
      // Open Shop?
  },

  CLOSED_DOOR: {
    action: null, // Need an action to replace with open door or alert "Locked!"?
    background: "#806517",
    friendly: true,
    imageUrl: "",
    info: "A closed door",
    name: "CLOSED_DOOR",
    solid: true,
  },
/*
  LOCKED_DOOR: {  // May not need?
    imageUrl: "",
    name: "LOCKED_DOOR".
    info: "A locked door",
    solid: true,
    action: null // Need an action to replace with open door or alert "Locked!"?
  },
*/
  OPEN_DOOR: {
    action: null,
    background: "#806517",
    friendly: true,
    imageUrl: "",
    info: "A door that is standing open",
    name: "OPEN_DOOR",
    solid: false,
  },

  BROKEN_DOOR: {
    action: null,
    background: "#806517",
    friendly: true,
    imageUrl: "",
    info: "A door that looks to have been staved in",
    name: "BROKEN_DOOR",
    solid: false,
  },

  WALL: {
    action: null,
    background: "#848482",
    friendly: true,
    imageUrl: "",
    info: "An impassable wall",
    name: "WALL",
    solid: true,
  },

  SIGN: {
    action: null, // Maybe the action can be a lookup of the closest shop door for sign text?
    background: "#FFFFC2",
    friendly: true,
    imageUrl: "",
    info: "A shop sign", // Will need to incorporate the ability to have diff sign text for each
    name: "SIGN",
    solid: false,
  },

  HOUSE: { // This will prob need to be 4-10(?) separate tiles
    action: null,
    background: "#C19A6B",
    friendly: true,
    imageUrl: "",
    info: "A house",
    name: "HOUSE",
    solid: true,
  },

  ARCH: { // This will prob need to be 3 separate tiles
    action: null,
    background: "#5C5858",
    friendly: true,
    imageUrl: "",
    info: "An Impressive Arch",
    name: "ARCH",
    solid: true,
  },

}; // Final brace and semi

