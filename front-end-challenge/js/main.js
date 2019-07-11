window.onload = function () {
  toggleFunction();
  animateUpButton()
  scrollFunction()

};

// on scroll event



// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  console.log(getStyle(document.getElementById("myBtn"), "bottom").match(/\d+/g).map(Number)[0])
  var x = document.getElementById("hamburger-menu-id");
  //check if menu apper
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  var x = document.getElementById("main")
  if (x.scrollTop > 20 || x.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  var x = document.getElementById("main");
 
  x.scrollTop=0;
}



// to close the menu if its already opend
function clickOutSide() {
  var x = document.getElementById("hamburger-menu-id");
  //check if menu apper
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}


//for the menu
function toggleFunction() {
  var x = document.getElementById("hamburger-menu-id");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function getStyle(el, styleProp) {
  var value, defaultView = (el.ownerDocument || document).defaultView;
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) { // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
      return (function (value) {
        var oldLeft = el.style.left,
          oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}

function animateUpButton() {
  var btn = document.getElementById("myBtn")
  var bottom = getStyle(document.getElementById("myBtn"), "bottom").match(/\d+/g).map(Number)[0];
  setInterval(function () {
    if (bottom < 10) {
      bottom = -bottom
    } else {
      bottom = bottom
    }
    btn.style.bottom = bottom + "px"

  }, 400);
}
