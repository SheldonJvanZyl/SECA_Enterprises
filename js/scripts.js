/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    //     var navbarShrink = function () {
    //         const navbarCollapsible = document.body.querySelector('#mainNav');
    //         if (!navbarCollapsible) {
    //             return;
    //         }
    //         if (window.scrollY === 0) {
    //             navbarCollapsible.classList.remove('navbar-shrink')
    //         } else {
    //             navbarCollapsible.classList.add('navbar-shrink')
    //         }

    //     };

    //     // Shrink the navbar 
    //     navbarShrink();

    //     // Shrink the navbar when page is scrolled
    //     document.addEventListener('scroll', navbarShrink);

    //     // Activate Bootstrap scrollspy on the main nav element
    //     const mainNav = document.body.querySelector('#mainNav');
    //     if (mainNav) {
    //         new bootstrap.ScrollSpy(document.body, {
    //             target: '#mainNav',
    //             rootMargin: '0px 0px -40%',
    //         });
    //     };

    //     // Collapse responsive navbar when toggler is visible
    //     const navbarToggler = document.body.querySelector('.navbar-toggler');
    //     const responsiveNavItems = [].slice.call(
    //         document.querySelectorAll('#navbarResponsive .nav-link')
    //     );
    //     responsiveNavItems.map(function (responsiveNavItem) {
    //         responsiveNavItem.addEventListener('click', () => {
    //             if (window.getComputedStyle(navbarToggler).display !== 'none') {
    //                 navbarToggler.click();
    //             }
    //         });
    //     });

});

//Close function

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex1 = n);
}



// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}