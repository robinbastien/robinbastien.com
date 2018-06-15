/**
 * Main.JS
 *
 */


 // Data
const s = Snap('#hero-unit__typography');
  
/* ------------------------------
   1. Helpers
   ------------------------------ */

// Get a random Integer
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/* ------------------------------
   2. DOM Manipulation
   ------------------------------ */
function animateTagline(data) {
  s.append(data);
  const outerBlobs = Snap.selectAll('#Outer-Blobs > path');
  let delay = 100;
  outerBlobs.forEach((element) => {
    const myMatrix = new Snap.Matrix();
    const timeout = 6500;
    let direction = 1;
    myMatrix.translate(getRandomInt(20), getRandomInt(20));
    delay = delay + 100;
    const toSimple = () => {
      direction = direction * -1;
      element.animate({ transform: myMatrix }, timeout, mina.linear, toSimple);
      myMatrix.translate(getRandomInt(20) * direction, getRandomInt(20) * direction);
    };
    setTimeout(() => {
      toSimple();
    }, delay);
  });
} // animateTagline()

// Initialize the tagline image
function initializeTagline() {
  Snap.load('assets/images/tagline3.svg', animateTagline);
}

// Define init scripts
function initialize() {

  
  initializeTagline();
  
  // Initialize Vue.JS
  const nav = new Vue({ 
    el: '#nav',
    data: {
      title: 'Navigation',
      isOpen: false,
    },
    methods: {
      toggleNavState: function(event) {
        
        this.isOpen = !this.isOpen;
      },
    },
  });
}

// Initialization helper function
function ready(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// Run init scripts on document load
ready(initialize);
