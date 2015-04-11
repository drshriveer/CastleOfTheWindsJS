// This file only contains lists of spells and their actions / attributes
// See Google doc for individual spell descriptions:
// https://docs.google.com/spreadsheets/d/1MHQYvHtf5MSnos3rK3_CqR3H5DgOoc_RkfegDHzzbLk/edit#gid=1614980209

if(window.app == null ||
   window.app == undefined) {
  window.app = {};
}
// Start thinking about TTC and spell lvl/cost implementation within SPELLS or without
var SPELLS = {
// Attack Spells
  MAGIC_ARROW: {
    name: "MAGIC_ARROW",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/3/30/Cotw-magic_arrow.PNG",
    action: function() {
      alert("Magic Arrow Cast");
    }
  },

  COLD_BOLT: {
    name: "COLD_BOLT",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/7/77/Cotw-cold_bolt.PNG",
    action: function() {
      alert("Cold Bolt Cast");
    }
  },

  LIGHTNING_BOLT: {
    name: "LIGHTNING_BOLT",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/4/45/Cotw-lightning_bolt.PNG",
    action: function() {
      alert("Lightning Bolt Cast");
    }
  },

  FIRE_BOLT: {
    name: "FIRE_BOLT",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/c/c9/Cotw-fire_bolt.PNG",
    action: function() {
      alert("Fire Bolt Cast");
    }
  },

  COLD_BALL: {
    name: "COLD_BALL",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/4/47/Cotw-cold_ball.PNG",
    action: function() {
      alert("Cold Ball Cast");
    }
  },

  BALL_LIGHTNING: {
    name: "BALL_LIGHTNING",
    status: ,
    imgURL: "NEED_URL",
    action: function() {
      alert("Ball Lightning Cast");
    }
  },

  FIREBALL: {
    name: "FIREBALL",
    status: ,
    imgURL: "NEED_URL",
    action: function() {
      alert("Fireball Cast");
    }
  },
// Defense Spells
  SHIELD: {
    name: "SHIELD",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/4/44/Cotw-shield.PNG",
    action: function() {
      alert("Shield Cast");
    }
  },

  RESIST_COLD: {
    name: "RESIST_COLD",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/7/75/Cotw-resist_cold.PNG",
    action: function() {
      alert("Resist Cold Cast");
    }
  },

  RESIST_LIGHTNING: {
    name: "RESIST_LIGHTNING",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/8/83/Cotw-resist_lightning.PNG",
    action: function() {
      alert("Resist Lightning Cast");
    }
  },

  RESIST_FIRE: {
    name: "RESIST_FIRE",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/8/8b/Cotw-resist_fire.PNG",
    action: function() {
      alert("Resist Fire Cast");
    }
  },
// Healing Spells
  HEAL_MINOR_WOUNDS: {
    name: "HEAL_MINOR_WOUNDS",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/d/de/Cotw-heal_minor_wounds.PNG",
    action: function() {
      alert("Heal Minor Wounds Cast");
    }
  },

  HEAL_MAJOR_WOUNDS: {
    name: "HEAL_MAJOR_WOUNDS",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/2/2b/Cotw-heal_medium_wounds.PNG", // Intentionally used the wrong IMG
    action: function() {
      alert("Heal Major Wounds Cast");
    }
  },

  NEUTRALIZE_POISON: {
    name: "NEUTRALIZE_POISON",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/6/69/Cotw-neutralize_poison.PNG",
    action: function() {
      alert("Neutralize Poison Cast");
    }
  },
// Movement Spells
  PHASE_DOOR: {
    name: "PHASE_DOOR",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/1/10/Cotw-phase_door.PNG",
    action: function() {
      alert("Phase Door Cast");
    }
  },

  LEVITATION: {
    name: "LEVITATION",
    status: , // Assuming this is an instance in which status will be used to add levitation to char
    imgURL: "http://cdn.wikimg.net/strategywiki/images/3/39/Cotw-levitation.PNG",
    action: function() {
      alert("Levitation Cast");
    }
  },

  RUNE_OF_RETURN: {
    name: "RUNE_OF_RETURN",
    status: ,
    imgURL: "NEED_URL",
    action: function() {
      alert("Rune of Return Cast");
    }
  },

  TELEPORT: {
    name: "TELEPORT",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/8/85/Cotw-teleport.PNG",
    action: function() {
      alert("Teleport Cast");
    }
  },
// Divination Spells
  DETECT_OBJECTS: {
    name: "DETECT_OBJECTS",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/a/a2/Cotw-detect_objects.PNG",
    action: function() {
      alert("Detect Objects Cast");
    }
  },

  DETECT_MONSTERS: {
    name: "DETECT_MONSTERS",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/3/35/Cotw-detect_monsters.PNG",
    action: function() {
      alert("Detect Monsters Cast");
    }
  },

  DETECT_TRAPS: {
    name: "DETECT_TRAPS",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/b/bb/Cotw-detect_traps.PNG",
    action: function() {
      alert("Detect Traps Cast");
    }
  },

  IDENTIFY: {
    name: "IDENTIFY",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/f/fd/Cotw-identify.PNG",
    action: function() {
      alert("Identify Cast");
    }
  },

  CLAIRVOYANCE: {
    name: "CLAIRVOYANCE",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/9/97/Cotw-clairvoyance.PNG",
    action: function() {
      alert("Clairvoyance Cast");
    }
  },
// Misc. Spells
  LIGHT: {
    name: "LIGHT",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/9/92/Cotw-light.PNG",
    action: function() {
      alert("Light Cast");
    }
  },

  REMOVE_CURSE: {
    name: "REMOVE_CURSE",
    status: ,
    imgURL: "http://cdn.wikimg.net/strategywiki/images/4/49/Cotw-remove_curse.PNG",
    action: function() {
      alert("Remove Curse Cast");
    }
  },

}; //End bracket and semi