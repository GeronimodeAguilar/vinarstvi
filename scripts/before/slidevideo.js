'use strict';

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " change";
    } else {
        x.className = "topnav";
    }
}

let animateHTML = function () {
  let elems1, elems2, elems3,
    windowHeight;
  let init = function () {
    elems1 = document.getElementsByClassName('slideBoxLeft');
    elems2 = document.getElementsByClassName('slideBoxRight');
    elems3 = document.getElementsByClassName('slideBoxUp');
    windowHeight = window.innerHeight;
    _addEventHandlers();
  };
  let _addEventHandlers = function () {
    window.addEventListener('scroll', _checkPosition);
    window.addEventListener('resize', init);
  };
  let _checkPosition = function () {
    for (let i = 0; i < elems1.length; i++) {
      let posFromTop1 = elems1[i].getBoundingClientRect().top;
      if (posFromTop1 - windowHeight <= 0) {
        elems1[i].className = elems1[i].className.replace('slideBoxLeft', 'slideLeft');
      }
    }
  for (let j = 0; j < elems2.length; j++) {
      let posFromTop2 = elems2[j].getBoundingClientRect().top;
      if (posFromTop2 - windowHeight <= 0) {
        elems2[j].className = elems2[j].className.replace('slideBoxRight', 'slideRight');
      }       
    }
  for (let k = 0; k < elems3.length; k++) {
      let posFromTop3 = elems3[k].getBoundingClientRect().top;
      if (posFromTop3 - windowHeight <= 0) {
        elems3[k].className = elems3[k].className.replace('slideBoxUp', 'slideUp');
      }       
    }      
  };
  return {
    init: init
  };
};
animateHTML().init();

window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
  }
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function downFunction() {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption var imgs = [i1,i2]

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
  var i;
  var img = document.getElementsByClassName("mig");
  for (i = 0; i < img.length; i++) {
      img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}


const hero = document.querySelector('.picbox');
const logo = hero.querySelector('.pic');
    
function logoMove(e) {
 
const width = hero.offsetWidth;  
const height = hero.offsetHeight;  
let x = e.offsetX / 180;
let y = e.offsetY / 180;    

logo.style.transform = `
translate(${x}%, ${y}%) skew(${x}deg,${-y}deg)
`;
}    
    
hero.addEventListener('mousemove', logoMove);    