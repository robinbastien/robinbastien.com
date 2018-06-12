/**
 * Main.JS
 *
 */

 // Data

// Run init scripts on document load
ready(initialize);

var s = Snap("#hero-unit__typography");
// Handle the tagline animation
function initialize_tagline() {
  Snap.load("assets/images/tagline2.svg", animate_tagline );

}

function animate_tagline( data ) {
  s.append( data );
  var goo_start = Snap.select('#secondary-overlay');
  var goo_end = Snap.select('#tertiary-overlay');
  var goo_startPoints = goo_start.node.getAttribute('d');
  var goo_endPoints = goo_end.node.getAttribute('d');
  var toFancy = function(){
    goo_start.animate({ d: goo_endPoints }, 6000, mina.linear, toSimple);
  }
  var toSimple = function(){
    goo_start.animate({ d: goo_startPoints }, 6000, mina.linear, toFancy);
  }
  toSimple();

}

// Define init scripts
function initialize() {
  initialize_tagline();
}

// Initialization helper function
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
