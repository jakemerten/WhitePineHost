/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    

});

document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'read-more-btn'
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    // Loop through each button and add a click event listener
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior (e.g., jumping to top of page)

            // Find the parent paragraph of the clicked button
            const parentParagraph = this.closest('p');

            // Find the '.more-text' span within that paragraph
            const moreText = parentParagraph.querySelector('.more-text');

            // Toggle the display style of the 'more-text'
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'inline'; // Show the text
                this.textContent = 'See Less'; // Change button text
            } else {
                moreText.style.display = 'none'; // Hide the text
                this.textContent = 'See More'; // Change button text back
            }
        });
    });
});
