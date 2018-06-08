function initMap() {
  var uluru = { lat: 34.064, lng: -118.413 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

// quote slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';
}

// one-page navigation

var handle = document.getElementsByClassName('handle')[0];
var ul = document.getElementsByClassName('one-page-nav')[0];
var header = document.getElementsByClassName('one-page-header')[0];
var container = header.children[0];

handle.addEventListener(
  'click',
  function() {
    ul.classList.toggle('showing');
    if (ul.classList[1] == 'showing') {
      handle.innerHTML = 'HIDE MENU';
      container.style.gridTemplateRows = '100px 570px';
      header.style.display = 'flex';
    } else {
      handle.innerHTML = 'MENU';
      container.style.gridTemplateRows = '100px 400px';
      header.style.display = 'block';
    }
  },
  false
);
