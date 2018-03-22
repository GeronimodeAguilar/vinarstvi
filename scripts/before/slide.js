var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 9000); // Change image every 2 seconds
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " change";
    } else {
        x.className = "topnav";
    }
}

var animateHTML = function () {
  var elems1, elems2,
    windowHeight;
  var init = function () {
    elems1 = document.getElementsByClassName('hidebox1');
    elems2 = document.getElementsByClassName('hidebox2');
    windowHeight = window.innerHeight;
    _addEventHandlers();
  };
  var _addEventHandlers = function () {
    window.addEventListener('scroll', _checkPosition);
    window.addEventListener('resize', init);
  };
  var _checkPosition = function () {
    for (var i = 0; i < elems1.length; i++) {
      var posFromTop1 = elems1[i].getBoundingClientRect().top;
      if (posFromTop1 - windowHeight <= 0) {
        elems1[i].className = elems1[i].className.replace('hidebox1', 'slideLeft');
      }
    }
  for (var j = 0; j < elems2.length; j++) {
      var posFromTop2 = elems2[j].getBoundingClientRect().top;
      if (posFromTop2 - windowHeight <= 0) {
        elems2[j].className = elems2[j].className.replace('hidebox2', 'slideRight');
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
