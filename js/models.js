// This file only contains lists of spells and their actions / attributes
if(window.app == null ||
   window.app == undefined) {
  window.app = {};
}

app.Creature = function(attrs, options) {
  attrs = attrs || {}
  options = options || {};
  if(_.isEmpty(attrs)) {
    throw "creatures need attributes";
  }
  this.name = attrs.name || "unknown";
  this.hp = attrs.hp || 0;
  this.constitution = attrs.constitution || 0;
  this.dexterity = attrs.dexterity || 0;
  this.intelligence = attrs.intelligence || 0;
  this.strength = attrs.strength || 0;
  this.baseSalary = attrs.baseSalary || 0;
};  


// takes in creature model
creature.prototype.attack = function(target) {
  // should attack
}

creature.prototype.defend = function(attackValue) {
  // should defnd 
}

creature.prototype.move = function() {

}

// -----------------------

app.Character = function(attrs, options) {
  // this below is wrong
  Object.prototype.extend(Creature);
  super(attrs, options);

  // specific to the charcter... 
  this.necklace = attrs.necklace;
}


