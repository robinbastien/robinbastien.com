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
  Snap.load("assets/images/tagline3.svg", animate_tagline );

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function animate_tagline( data ) {
  s.append( data );
  var blobs = Snap.select('#Inner-Blobs > g');
  var outer_blobs = Snap.selectAll('#Outer-Blobs path');

  blobs.animate({"transform" : "r0 600 -50 s1.5"}, 16000);
  outer_blobs.forEach( (element, i ) => {
    console.log(element.attr('s') );
    element.attr('s', getRandomInt(15)/10);
    console.log(element.attr('s') );
    element.animate({"transform" : "r0 600 -50 s1.5"}, 16000);
  });

  function conveyor(el,speed,reversed) {
    var speed    = speed    || 1,
        reversed = reversed || 0;
    var len = reversed ? -el.getTotalLength() : el.getTotalLength(),
        dur = 60000/speed;
    el.attr('stroke-dashoffset',0);
    el.animate({ 'stroke-dashoffset': len }, dur );
    setTimeout(function() { conveyor(el, reversed); }, dur);
  }

  // var goo_end = Snap.select('#tertiary-overlay');
  // var goo_startPoints = goo_start.node.getAttribute('d');
  // var goo_endPoints = goo_end.node.getAttribute('d');
  // var timeout = 1000;
  //
  // var toFancy = function(){
  //   goo_start.animate({ d: goo_endPoints }, timeout, mina.linear, toSimple);
  // }
  // var toSimple = function(){
  //   goo_start.animate({ d: goo_startPoints }, timeout, mina.linear, toFancy);
  //   timeout = 6500;
  // }
  // toSimple();

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
