##### make checklist

##### The Basics:
* Create static content including menu bars and place holders for the following
  * file menu bar
    - just add all needed drop-downs, we will fill in actions later (spells, activate, accept arrays for drop downs)
    - this is mostly css + basic html work here take a look at bootstrap dropdowns
  * action menu bar
    - add static buttons, add LIST of (icons) for spells and invokes the spell's action
  * spell menu
    - accepts js array, calls relevant action)
  * main map
    - just make a place for this
  *
+ Notes:
  + use bootstrap
###### assigned to Robby

##### Making Static Classes
* √ Make tiles
* √ Make Maps
* √ Make Spells
###### assigned to Robby

##### Implement Event System
* Should have event class that things can inherit
* Set up the pub/sub app.vent
###### assigned to Gavin

##### Inventory Template
* Create inventory template for viewing self inv, bags, belts, purse, shops
###### assigned to Gavin

##### Investigate grunt
* In particular for minifying
###### assigned to Gavin

##### Save Game Structure
+ Notes:
  + this is more of a just something to keep in mind for later
###### assigned to Gavin

##### Map initial render
* How do we feed a "map" into a function that will
  A. Turn the template into squares and a picture?
  B. Zoom in only on the person and their current view of the world
###### assigned to Robby

##### Movement on the map
* How does a character continue to move on the map
+ Notes:
  + perhaps all maps need to add an extra buffer to the edges so they can move down further
  + css / overflow etc
  + arrow keys to move scrolling position?
###### assigned to Robby

