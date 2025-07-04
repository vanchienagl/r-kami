"use strict";

// ____________________________________________________________________________
// ____________________________________________________________________________
// Hamburger Menu Image Active
$(function () {
  const activeImage = document.querySelector('#js_hamburger_menu .image img.is-design');
  activeImage.classList.add("active");
});

// ____________________________________________________________________________
// ____________________________________________________________________________
// Change color fixedMenuPages
$(function () {
  const fixedMenuPages = document.querySelector('.js_com_fixed_menu_subpage');
  const secGreens = document.querySelectorAll('.js_sec_green');

  if (fixedMenuPages && secGreens.length) {
    secGreens.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 40%',
        toggleClass: { targets: fixedMenuPages, className: "is-white" },
        invalidateOnRefresh: true
        // markers: true,
      });
    });
  }
});
