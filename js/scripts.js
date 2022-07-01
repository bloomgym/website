/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const logo = document.body.querySelector('#logo');
        const logo_rgb = document.body.querySelector('#logo_rgb');
        const vk = document.body.querySelector('#vk');

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
            logo_rgb.classList.add('visually-hidden')
            logo.classList.remove('visually-hidden')
            vk.classList.add('text-white-50')
            vk.classList.remove('text-black-50')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            logo_rgb.classList.remove('visually-hidden')
            logo.classList.add('visually-hidden')
            vk.classList.remove('text-white-50')
            vk.classList.add('text-black-50')
        }

    };

    document.getElementById('vk').onmouseover =
        function() {
            this.classList.remove('text-white-50');
            this.classList.remove('text-black-50');
        };

    document.getElementById('vk').onmouseout =
        function() {
            if (window.scrollY === 0) {
                this.classList.add('text-white-50');
            } else {
                this.classList.add('text-black-50')
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
            target: '#mainNav', offset: 74,
        });
    }

    // // Collapse responsive navbar when toggler is visible
    // const navbarToggler = document.body.querySelector('.navbar-toggler');
    // const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
    // responsiveNavItems.map(function (responsiveNavItem) {
    //     responsiveNavItem.addEventListener('click', () => {
    //         if (window.getComputedStyle(navbarToggler).display !== 'none') {
    //             navbarToggler.click();
    //         }
    //     });
    // });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    ("#vk").mouseover(function(){
        $("#ul1").addClass("open").removeClass("closed")
    })

});
